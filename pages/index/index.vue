<template>
	<view >
	</view>
</template>

<script>
	import { login } from '@/api/login.js'
	export default {
		data() {
			return {
				code: ''
			}
		},
		onLoad() {
		
             wx.login({
               success (res) {
				  
                 login({code:res.code}).then(res2 => {
                 	 if(res2.reCode === '0'){
						 getApp().globalData.vueSessionId = res.sessionId
						 console.log(getApp().globalData.vueSessionId)
                 		 uni.switchTab({
                 		 	url:'../fist/fist'
                 		 })
                 	 }else{
                 		 uni.navigateTo({
                 		 	url:'../login/login?code='+res.code+''
                 		 })
                 	 }
                 	
                 }).catch(err => {
                 	
                 })
				}
             })
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
