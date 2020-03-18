import request from '@/common/request.js'

export function getEnrollProjectInstanceItemList(data) {
	return request.request({
		url: '/enroll/getEnrollProjectInstanceItemList',
		method: 'POST',
		data: data
	})
}