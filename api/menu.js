import request from '@/common/request.js'

export function enrollProjectInstanceApply(data) {
	return request.request({
		url: '/enroll/enrollProjectInstanceApply',
		method: 'POST',
		data: data
	})
}

export function enrollProjectInstanceItemSubmit(data) {
	return request.request({
		url: '/enroll/enrollProjectInstanceItemSubmit',
		method: 'POST',
		data: data
	})
}