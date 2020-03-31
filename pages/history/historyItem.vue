<template>
	<view>
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
	import  { getApplyedEnrollInstanceItem } from '@/api/manage.js'
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default {
		 components: {uniSection},
		data() {
			return {
				isExportPdf: false,
				itemPersonId: '',
				retType: '',
				index: 0,
				instanceName: '',
				instanceDes: '',
	            resultList: '',
				itemList: []
			}
		},
		onLoad(options) {
			
			this.itemPersonId = options.itemPersonId
			getApplyedEnrollInstanceItem({itemPersonId:this.itemPersonId}).then(res => {
							 this.instanceDes = res.data.instanceDes
							 this.instanceName = res.data.instanceName
						     this.resultList =  res.data.resultList
							 this.retType = res.data.retType
							 this.isExportPdf = res.data.isExportPdf
						}).catch(err => {
							
						})
			},
		methods:{
			donlowd(){
				wx.downloadFile({
				    url: getApp().globalData.enrollurl+'/enroll/downloadEnrollAppointment?itemPersonId='+this.itemPersonId+'', 
				    success: (res) => {
				        if (res.statusCode === 200) {
							    var filePath = res.tempFilePath;
							            console.log(filePath);
							        wx.openDocument({
							                        filePath: filePath,
							                        success: function(res) {
							                            console.log('打开文档成功')
							                        },
							                        fail: function(res) {
							                            console.log(res);
							                        },
							                        complete: function(res) {
							                            console.log(res);
							                        }
							                    })
							     
							
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
