<template>
	<view>
		<uni-section title="菜单列表" type="line"></uni-section>
	<uni-list>
			<uni-list-item :show-arrow="false" title="列表文字mmmmmmmmmmmmmmmmmmm" />
			<uni-list-item :show-arrow="true" title="列表文字" :note="'已报名'+baoming" />
			<uni-list-item :disabled="true" :show-arrow="false" title="列表禁用状态" />
		</uni-list>
		<uni-section title="菜单列表" type="line"></uni-section>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { getEnrollProjectInstanceList } from '@/api/login.js'
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
