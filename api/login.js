import request from '@/common/request.js'

export function login(data) {
	return request.request({
		url: '/auth/webLogin',
		method: 'POST',
		data: data
	})
}
export function MenuList(data) {
	return request.request({
		url: '/auth/getUniappMenuList',
		method: 'POST',
		data: data
	})
}
export function getEnrollProjectInstanceList(data) {
	return request.request({
		url: '/enroll/getEnrollProjectInstanceList',
		method: 'POST',
		data: data
	})
}
export function unbounding(data) {
	return request.request({
		url: '/auth/unbounding',
		method: 'POST',
		data: data
	})
}