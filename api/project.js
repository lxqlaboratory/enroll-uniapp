import request from '@/common/request.js'

export function getEnrollProjectInfoListOfManage(data) {
	return request.request({
		url: '/enroll/getEnrollProjectInfoListOfManage',
		method: 'POST',
		data: data
	})
}

export function getEnrollProjectInstanceListOfProject(data) {
	return request.request({
		url: '/enroll/getEnrollProjectInstanceListOfProject',
		method: 'POST',
		data: data
	})
}


export function getEnrollProjectInstanceDetail(data) {
	return request.request({
		url: '/enroll/getEnrollProjectInstanceDetail',
		method: 'POST',
		data: data
	})
}

export function saveOrUpdateEnrollProjectInstance(data) {
	return request.request({
		url: '/enroll/saveOrUpdateEnrollProjectInstance',
		method: 'POST',
		data: data
	})
}

export function deleteEnrollProjectInstance(data) {
	return request.request({
		url: '/enroll/deleteEnrollProjectInstance',
		method: 'POST',
		data: data
	})
}

export function getEnrollInstanceItemDetail(data) {
	return request.request({
		url: '/enroll/getEnrollInstanceItemDetail',
		method: 'POST',
		data: data
	})
}


export function saveOrUpdateEnrollInstanceItem(data) {
	return request.request({
		url: '/enroll/saveOrUpdateEnrollInstanceItem',
		method: 'POST',
		data: data
	})
}


export function deleteEnrollInstanceItem(data) {
	return request.request({
		url: '/enroll/deleteEnrollInstanceItem',
		method: 'POST',
		data: data
	})
}
