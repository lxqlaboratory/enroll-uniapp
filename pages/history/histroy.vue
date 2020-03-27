<template>
	<view>
	<uni-section title="报名记录" type="line"></uni-section>
	      <view v-for="items in ProjectInstanceList" :key="items.itemPersonId">
		<uni-section :title="items.instanceName" type="line"></uni-section>
		<uni-list  >
			<uni-list-item :show-arrow="true" :title="items.itemName"  @click="entry(items.itemPersonId)"/>
		</uni-list>
		
		</view>
		
		
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	   import  { getApplyedEnrollInstanceItemList } from '@/api/manage.js'
	   import uniSection from '@/components/uni-section/uni-section.vue'
		export default {
			  components: { uniList,
		 uniListItem,uniSection},
			data() {
				return {
					itemPersonId: '',
			
					ProjectInstanceList: []
				}
			},
			onShow(){
				
				getApplyedEnrollInstanceItemList({}).then(res => {
							this.ProjectInstanceList = res.data
							}).catch(err => {
								
							})
			},
			methods:{
				entry(itemPersonId){
					uni.navigateTo({
						url:'./historyItem?itemPersonId='+itemPersonId+''
					})
						
				}
			}
	}
</script>

<style>
</style>
