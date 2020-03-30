
import Request from '@/request/index.js'

// 切换baseUrl 
const config = {
	baseUrl: 'https://enroll.sdu.edu.cn/func',
    //baseUrl: 'http://localhost:8080/func',
	header: {"Content-Type": "application/json",
	},
	cancelReject: {
		text: '请求未通过验证,检查是否登录或者数据正确',
		type: 'warning'
	},
	failReject: {
		type: 'error',
		text: "网络异常，请求发送失败，请检查网络"
	}
}

const reqInterceptor = async (options) => {
	//options.url = options.url+'?vueSessionId='+getApp().globalData.vueSessionId+''
	// console.log(getApp().globalData.vueSessionId)
    //    if(!options.data){
	// 	options.data={}
	// }
	//if(options.url != 'http://localhost:8080/func/auth/webLogin')
	if(options.url != 'https://enroll.sdu.edu.cn/func/auth/webLogin')
    {options.header= {"Content-Type": "application/json",
	"Cookie":"JSESSIONID="+getApp().globalData.vueSessionId}}
	return options
}


const resInterceptor = (response, conf={}) => {
	
	return response.data
}

const req = new Request(config, reqInterceptor, resInterceptor)

export default req
