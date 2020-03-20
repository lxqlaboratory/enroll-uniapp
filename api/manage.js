import request from '@/common/request.js'

export function getEnrollProjectInstanceListOfManage(data) {
	return request.request({
		url: '/enroll/getEnrollProjectInstanceListOfManage',
		method: 'POST',
		data: data
	})
}

export function getEnrollProjectInstanceAndItemList(data) {
	return request.request({
		url: '/enroll/getEnrollProjectInstanceAndItemList',
		method: 'POST',
		data: data
	})
}

export function getEnrollItemPersonList(data) {
	return request.request({
		url: '/enroll/getEnrollItemPersonList',
		method: 'POST',
		data: data
	})
}

export function enrollItemPersonApplyCancel(data) {
	return request.request({
		url: '/enroll/enrollItemPersonApplyCancel',
		method: 'POST',
		data: data
	})
}

export function getSelectPersonList(data) {
	return request.request({
		url: '/person/getSelectPersonList',
		method: 'POST',
		data: data
	})
}

export function enrollItemPersonApplyAdd(data) {
	return request.request({
		url: '/enroll/enrollItemPersonApplyAdd',
		method: 'POST',
		data: data
	})
}