<template>
	<view >
		<uni-section :title="instanceName" type="line"></uni-section>
			<view class="example-body">
			<view class="fuwenben">
					 <rich-text :nodes="instanceDes"></rich-text>
			</view>
			</view>
			 
			<button class="button-cell" @click="baoming">进入报名 </button>
			 
	
		
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
				instanceName: '',
				instanceDes: '',

				itemList: []
			}
		},
		onLoad(options) {
			
			this.instanceId = options.instanceId
			enrollProjectInstanceApply({instanceId:this.instanceId}).then(res => {
							 this.instanceDes = res.data.instanceDes
							 this.instanceName = res.data.instanceName
						
							 this.retType = res.data.retType
							 if(this.retType === 4)
							 {
								 
								 uni.switchTab({
								 	url:'../history/histroy'
								 })
								 }
						}).catch(err => {
							
						})
			},
		methods:{
			
			baoming(){
				uni.navigateTo({
					url:'../baoming/fillinfo?instanceId='+this.instanceId+''
				})
			}
		}
	}
</script>

<style>
</style>
