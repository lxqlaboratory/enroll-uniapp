<template>
	<view>
	<uni-section title="校内报名" type="line"/>
			<view v-if="!showyemian" >
			  <view class="adBaseView" v-for="items in ProjectInstanceList" :key="items.instanceId" @click="entry(items.instanceId)">
				 
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
						}).catch(err => {
							
						})
		},
		methods:{
			entry(instanceId){
				uni.navigateTo({
					url:'../baoming/baoming?instanceId='+instanceId+''
				})
			}
		}
	}
</script>

<style>
</style>
