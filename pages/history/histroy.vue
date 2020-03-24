<template>
	<view class="adBaseView" >		 
		<view class="cloumnlist">
			报名记录
		</view>
		<view class="bottomLine"/>
		
		
		
		
		
		<button class="button-cell" @click="donlowd">下载pdf </button>
	</view>
</template>

<script>
	   import  { personBaseInfoMaintainInit } from '@/api/baseInfo.js'
		export default {
			 
			data() {
				return {
					perName: '',
					perNum: '',
					personId: '',
					index: 0,
					mobilePhone: '',
					bankNo: '',
					bankName: '',
					collegeName: '',
					secondPerType: '',
					secondPerTypeList: [],
					ProjectInstanceList: []
				}
			},
			onLoad(){
				
				personBaseInfoMaintainInit({}).then(res => {
							
							}).catch(err => {
								
							})
			},
			methods:{
				donlowd(){
					uni.downloadFile({
					    url: 'http://localhost:8080/func/enroll/downloadEnrollAppointment', 
					    success: (res) => {
					        if (res.statusCode === 200) {
								
					            uni.showToast({
					            	title: `下载成功`,
					            	icon: 'none'
					            })
					        }
					    }
					});
				},
				submit(){
					personBaseInfoMaintain({personId:this.personId,secondPerType:this.secondPerType,
					mobilePhone:this.mobilePhone,bankNo:this.bankNo,bankName:this.bankName
					}).then(res => {
						if(res.re === 1){
							uni.showModal({
							    title: '提示',
								showCancel: false,
								confirmColor: "#000000",
							    content: '提交成功',
							    success: function (res) {
							        if (res.confirm) {
								
							        } 
							    }
							});
						}
						
						}).catch(err => {
							
						})
						
					}
			}
	}
</script>

<style>
</style>
