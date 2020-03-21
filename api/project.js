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
