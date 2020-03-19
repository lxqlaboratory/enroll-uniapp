<template>
	<view >
		<view class="title">
			山东大学报名服务平台
		</view>
		    
			<uni-section title="校内报名" type="line"/>
			<view class="adBaseView" v-for="items in ProjectInstanceList" :key="items.instanceId" @click="entry(items.instanceId,items.instanceDes)">
				 
				<view class="cloumnlist" >
					{{items.instanceName}}
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
				ProjectInstanceList: []
			}
		},
		onLoad() {
			
		   MenuList({}).then(res => {
				 this.list = res.data
				if(this.list.length===1)
				{
					this.showdetail = true
		
				}
			}).catch(err => {
				
			})
			getEnrollProjectInstanceList({}).then(res => {
							 this.ProjectInstanceList = res.data
							
						}).catch(err => {
							
						})
		},
		methods:{
		
			entry(instanceId,instanceDes){
				
				uni.navigateTo({
					url:'../baoming/baoming?instanceId='+instanceId+'&&instanceDes='+instanceDes+''
				})
			}
		}
	}
</script>

<style>
</style>
