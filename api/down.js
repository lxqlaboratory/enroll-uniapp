import request from '@/common/request.js'

export function downloadEnrollAppointment(data) {
	return request.request({
		url: '/enroll/downloadEnrollAppointment',
		method: 'POST',
		data: data
	})
}