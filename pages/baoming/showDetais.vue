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
			
			<view v-if="isExportPdf">
			<button class="button-cell" @click="donlowd">下载pdf </button>
			</view>
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
					isExportPdf: false,
					instanceId: '',
					retType: '',
					index: 0,
					itemPersonId: '',
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
								 this.isExportPdf = res.data.isExportPdf
						this.itemPersonId=res.data.itemPersonId
							}).catch(err => {
								
							})
				},
			methods:{
				donlowd(){
					uni.downloadFile({
					    url: getApp().globalData.enrollurl+'/enroll/downloadEnrollAppointment?itemPersonId='+this.itemPersonId+'', 
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
