<template>
	<view>
		     <uni-section title="报名成功" type="line"></uni-section>
		
			<uni-section :title="instanceName" type="line"></uni-section>
			<view>
			<view class="adBaseView" v-for="(item,i)  in resultList"  >
				<view class="cloumnlist" >
					{{item}}
				</view>
				<view class="bottomLine2"/>
			</view>
			</view>
			
			
			<button class="button-cell" @click="donlowd">下载pdf </button>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
		import uniSection from '@/components/uni-section/uni-section.vue'
	import  { enrollProjectInstanceApply } from '@/api/menu.js'
		export default {
			 components: {uniNoticeBar,uniSection},
			data() {
				return {
					instanceId: '',
					retType: '',
					index: 0,
					instanceName: '',
					instanceDes: '',
	                resultList: '',
					itemList: []
				}
			},
			onLoad(options) {
				
				this.instanceId = options.instanceId
				enrollProjectInstanceApply({instanceId:this.instanceId}).then(res => {
								 this.instanceDes = res.data.instanceDes
								 this.instanceName = res.data.instanceName
							     this.resultList =  res.data.resultList
								 this.retType = res.data.retType
						
							}).catch(err => {
								
							})
				},
			methods:{
				donlowd(){
					uni.downloadFile({
					    url: getApp().globalData.enrollurl+'/enroll/downloadEnrollAppointment', 
					    success: (res) => {
					        if (res.statusCode === 200) {
								
					            uni.showToast({
					            	title: `下载成功`,
					            	icon: 'none'
					            })
					        }
					    }
					});
				}
				
			}
		}
</script>

<style>
</style>
