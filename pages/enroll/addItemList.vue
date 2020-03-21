<template>
	<view>
	<uni-section title="报名信息填写" type="line"></uni-section>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { getEnrollProjectInstanceList } from '@/api/login.js'
	export default {
		 components: {
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
			
		},
		methods:{
		
			submit(){
				uni.navigateTo({
					url:'./addProject'
				})
			}
		}
	}
</script>

<style>
</style>
