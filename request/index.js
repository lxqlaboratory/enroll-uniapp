import { requestConfig } from './common.js'


export default class Request {
	constructor(config={}, reqInterceptor=null, resInterceptor=null, successHandler=null, failHandler=null, completeHandler=null) {
		
	    this.baseUrl = config.baseUrl
		if (config.header) {
			
			this.header = Object.assign({}, config.header) // JSON.parse(JSON.stringify(config.header))
		} else {
			this.header = {"Content-Type": "application/json;charset=UTF-8"}
		}
		// this.header = config.header || {"Content-Type": "application/json;charset=UTF-8"},
		
		this.success = successHandler
		this.fail = failHandler
		this.complete = completeHandler
		this.requestInterceptor = reqInterceptor
		this.responseInterceptor = resInterceptor
		if (config.cancelReject && (typeof config.cancelReject === 'object')) {
			this.cancelReject = Object.assign({}, config.cancelReject)
		} else {
			this.cancelReject = {text: '请求未通过验证,检查是否登录或者数据正确', type: 'warning'}
		}
		if (config.failReject && (typeof config.failReject === 'object')) {
			this.failReject = Object.assign({}, config.failReject)
		} else {
			this.failReject = null
		}
	}
	async request(options, successHandler=null, failHandler=null, completeHandler=null) {
		const task = options.task || false
		const type = options.type || "request"
		let config = null
		try{
			// 执行请求拦截器,重新构造请求数据/参数(不包括响应拦截器/处理器)
			config = await requestConfig(this, options)
		}catch(e){
			return Promise.reject(e)
		}
		if (!config || typeof config != 'object') {
			return Promise.reject(this.cancelReject)
		}
		if (config.mypReqToCancel) {
			if (config.cancelReject && (typeof config.cancelReject === 'object')) {
				return Promise.reject(config.cancelReject)
			}
			return Promise.reject(this.cancelReject)
		}
		if (config.cancelReject) {
			delete config.cancelReject
		}
		const that = this
		if (task) {
			config["success"] = (response) => {
				if (that.responseInterceptor) {
					that.responseInterceptor(response, config)
				}
				that.success && that.success(response)
				successHandler && successHandler(response)
			}
			config["fail"] = (response) => {
				that.fail && that.fail(response)
				failHandler && failHandler(response)
			}
			config["complete"] = (response) => {
				that.complete && that.complete(response)
				completeHandler && completeHandler(response)
			}
			if (type === "request") {
				return uni.request(config)
			} else if (type === "upload") {
				return uni.uploadFile(config)
			} else {
				return uni.downloadFile(config)
			}
			return
		}
		return new Promise((resolve, reject)=>{
			config["success"] = (response) => {
				let _res = null
				if (that.responseInterceptor) {
					_res = that.responseInterceptor(response, config)
				}
				that.success && that.success(response)
				successHandler && successHandler(response)
				if (_res && _res.mypReqToReject) {
					delete _res.mypReqToReject
					reject(_res)
				} else {
					resolve(_res)
				}
			}
			config["fail"] = (response) => {
				that.fail && that.fail(response)
				failHandler && failHandler(response)
				if (config.failReject && (typeof config.failReject === 'object')) {
					reject(config.failReject)
				} else {
					if (that.failReject) {
						reject(that.failReject)
					} else {
						reject(response)
					}
				}
			}
			config["complete"] = (response) => {
				that.complete && that.complete(response)
				completeHandler && completeHandler(response)
			}
			if (type === "request") {
				uni.request(config)
			} else if (type === "upload") {
				uni.uploadFile(config)
			} else {
				uni.downloadFile(config)
			}
		})
	}
}
