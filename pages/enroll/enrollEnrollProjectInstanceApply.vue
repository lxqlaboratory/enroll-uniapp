<template>
	<view>
	<uni-section title="校内报名" type="line"/>
			<view v-if="!showyemian" >
			  <view class="adBaseView" v-for="items in ProjectInstanceList" :key="items.instanceId" @click="entry(items.instanceId,items.isApply)">
				 
				<view class="cloumnlist" >
					{{items.instanceName}}
				</view>
				<view class="bottomLine2"/>
				
			  </view>
			    </view>
				<view v-else>当前无报名信息</view>
				
			</view>
		</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import  { getEnrollProjectInstanceList } from '@/api/login.js'
	export default {
		 components: {uniNoticeBar,uniSection},
		data() {
			return {
				showyemian: false,
				showdetail: false,
				loginName: '',
				list: [],
				instanceId: '',
				instanceName: '',
				retType: '',
				ProjectInstanceList: []
			}
		},
		onLoad() {
			
			getEnrollProjectInstanceList({}).then(res => {
							 this.ProjectInstanceList = res.data.projectList
							this.retType = res.data.retType
							
							if(this.retType === 1){
								this.showyemian = true;
							}
							if(this.ProjectInstanceList.length === 1){
								if(this.ProjectInstanceList[0].isApply === true)
								{
		
									uni.navigateTo({
										url:'../baoming/showDetais?instanceId='+this.ProjectInstanceList[0].instanceId+''
									})
								}else if(this.ProjectInstanceList[0].isApply === false){
									uni.navigateTo({
										url:'../baoming/baoming?instanceId='+this.ProjectInstanceList[0].instanceId+''
									})
								}
							}
						}).catch(err => {
							
						})
		},
		methods:{
			entry(instanceId,isApply){
				if(isApply === true)
				{
					uni.navigateTo({
						url:'../baoming/showDetais?instanceId='+instanceId+''
						
					})
				}else if(isApply === false){
					uni.navigateTo({
						url:'../baoming/baoming?instanceId='+instanceId+''
					})
				}
				
			}
		}
	}
</script>

<style>
</style>
