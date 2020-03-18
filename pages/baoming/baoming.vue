<template>
	<view >
		<uni-section title="系统公告" type="line"></uni-section>
			<view class="example-body">
				<uni-notice-bar :text="instanceDes" />
			</view>
			 
			<button class="button-cell" @click="baoming">进入报名 </button>
			 
	
		
	</view>
	
	
	
	
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
import  { getEnrollProjectInstanceItemList } from '@/api/menu.js'
	export default {
		 components: {uniNoticeBar,uniSection},
		data() {
			return {
				instanceId: '',
				instanceDes: '',
				password: ''
			}
		},
		onLoad(options) {
			console.log(options.instanceId)
			console.log(options.instanceDes)
			this.instanceDes = options.instanceDes
			this.instanceId = options.instanceId
			
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
