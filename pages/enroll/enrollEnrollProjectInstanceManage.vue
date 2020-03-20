<template>
	<view>
		<uni-section title="报名管理" type="line"></uni-section>
	    <uni-list v-for="items in ProjectInstanceList" :key="items.instanceId" >
			<uni-list-item :show-arrow="true" :title="items.instanceName"  @click="entry(items.instanceId)"/>
		</uni-list>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { getEnrollProjectInstanceListOfManage } from '@/api/manage.js'
	export default {
		 components: {uniNoticeBar,uniSection,
		 uniSection,
		 uniList,
		 uniListItem},
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
			
			getEnrollProjectInstanceListOfManage({}).then(res => {
							 this.ProjectInstanceList = res.data
					
							
						}).catch(err => {
							
						})
		},
		methods: { 
			entry(instanceId){
				console.log(instanceId)
				uni.navigateTo({
					url:'./manageList?instanceId='+instanceId+''
				})
			}
		}
	}
</script>


<style>
</style>
