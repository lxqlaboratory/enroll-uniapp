<template>
	<view >
		<view class="title">
			山东大学报名服务平台
		</view>
		    
			<uni-section title="校内报名" type="line"/>
			<view class="adBaseView" @click="entry">
				<view class="cloumnlist" >
					监考报名
				</view>
				<view class="bottomLine2"/>
			</view>
		 

		  
		  
		  
	
		  
		  
		  
		  
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import  { MenuList } from '@/api/login.js'
	import  { getEnrollProjectInstanceList } from '@/api/login.js'
	export default {
		 components: {uniNoticeBar,uniSection},
		data() {
			return {
				showdetail: false,
				loginName: '',
				list: [],
				password: ''
			}
		},
		onLoad() {
			
		   MenuList({}).then(res => {
				 this.list = res.data
				if(this.list.length===1)
				{
					this.showdetail = true
					console.log(this.showdetail)
				}
			}).catch(err => {
				
			})
			getEnrollProjectInstanceList({}).then(res => {
							 this.list = res.data
							if(this.list.length===1)
							{
								this.showdetail = true
								console.log(this.showdetail)
							}
						}).catch(err => {
							
						})
		},
		methods:{
			entry(){
				uni.navigateTo({
					url:'../baoming/baoming'
				})
			}
		}
	}
</script>

<style>
</style>
