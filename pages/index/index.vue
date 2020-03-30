<template>
	<view >
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: ''
			}
		},
		onShow() {
             wx.login({
               success (res) {
				   this.code = res.code
                 login({code:res.code}).then(res => {
                 	 if(res.reCode === '0'){
						 getApp().globalData.vueSessionId = res.sessionId
						 console.log(getApp().globalData.vueSessionId)
                 		 uni.switchTab({
                 		 	url:'../fist/fist'
                 		 })
                 	 }else{
                 		 uni.navigateTo({
                 		 	url:'../login/login?code='+this.code+''
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
