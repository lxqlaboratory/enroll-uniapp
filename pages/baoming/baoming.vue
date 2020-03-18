<template>
	<view >
		<uni-section title="系统公告" type="line"></uni-section>
			<view class="example-body">
				<uni-notice-bar text="    uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
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
				hideEyes: false,
				loginName: '',
				password: ''
			}
		},
		onLoad() {
			getEnrollProjectInstanceItemList({}).then(res => {
						
						}).catch(err => {
							
						})
			},
		methods:{
			
			baoming(){
				uni.navigateTo({
					url:'../baoming/fillinfo'
				})
			}
		}
	}
</script>

<style>
</style>
