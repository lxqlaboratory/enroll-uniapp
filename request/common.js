
export async function requestConfig(ins, options) {

	// JSON.parse(JSON.stringify(options.header || ins.header))
	
	const header = Object.assign({}, (options.header || ins.header))
	const baseUrl = options.baseUrl || ins.baseUrl
	// config
	let config = {
		url: baseUrl + options.url,
		header: header
	}
	let _cg = null
	if (ins.requestInterceptor) {
		
		// 为了保证数据隔离/孤立,互不影响,采用深拷贝
		try{
			const _options = JSON.parse(JSON.stringify(Object.assign({}, options, config)))
			// _cg is tha same object of _options
			_cg = await ins.requestInterceptor(_options)
		}catch(e){
			//TODO handle the exception
			return false
		}

		if (!_cg || typeof _cg !== 'object') {
			return false
		}
		
		if (_cg.mypReqToCancel) {
			return _cg
		}
		
		config.url = _cg.url
		config.header = _cg.header
		
		if (_cg.failReject && (typeof _cg.failReject === 'object')) {
			config.failReject = _cg.failReject
		}
	}
	const type = options.type || "request"

	if (type === "request") {
		config["data"] = _cg.data || {}
		config["method"] = _cg.method || "GET"
		config["dataType"] = _cg.dataType || "json"
		config["responseType"] = _cg.responseType || "text"
	} else if (type === "upload") {
		config['filePath'] = _cg.filePath
		config['name'] = _cg.name
		config["method"] = _cg.method || "POST"
		config['formData'] = _cg.formData || {}
		
		config["fileType"] = _cg.fileType || "image"
		
		// config.header['Content-Type'] = 'multipart/form-data;charset=UTF-8'
		delete config.header['Content-Type']
	} 
	console.log(config)
	return config
}

function _isPromise(obj) {
	return obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}
