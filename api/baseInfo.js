import request from '@/common/request.js'

export function personBaseInfoMaintainInit(data) {
	return request.request({
		url: '/person/personBaseInfoMaintainInit',
		method: 'POST',
		data: data
	})
}


export function personBaseInfoMaintain(data) {
	return request.request({
		url: '/person/personBaseInfoMaintain',
		method: 'POST',
		data: data
	})
}