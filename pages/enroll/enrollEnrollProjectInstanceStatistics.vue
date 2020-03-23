<template>
	<view>
		<uni-section title="报名项目" type="line"></uni-section>
	<uni-list v-for="items in projectList" :key="items.projectId">
			<uni-list-item :show-arrow="true" :title="items.projectName" @click="entry(items.projectId,items.projectType)"/>
		</uni-list>
		
		
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { getEnrollProjectInfoListOfManage } from '@/api/project.js'
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
				projectList: []
			}
		},
		onLoad() {
			
			getEnrollProjectInfoListOfManage({}).then(res => {
							this.projectList = res.data
							
							
						}).catch(err => {
							
						})
		},
		methods:{
			entry(projectId,projectType){
				if(projectType==='02'){
					uni.navigateTo({
						url:'./addInstanceLIst?projectId='+projectId+''
					})
				}else if(projectType==='01'){
					uni.navigateTo({
						url:'./fistAddinsItem?projectId='+projectId+''
					})
				}
				
			}
		}
	}
</script>

<style>
</style>
