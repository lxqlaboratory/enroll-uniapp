<template>
	<view>
	<uni-section title="报名记录" type="line"></uni-section>
	<view v-if="!showList">
	      <view v-for="items in ProjectInstanceList" :key="items.itemPersonId">
		<view  class="record-item" @click="entry(items.itemPersonId)">
			<view class="f1">
				<view class="condition">{{items.instanceName}}</view>
				<view class="date">报名成功</view>
			</view>
			<view class="f1">
		<view class="address">{{items.itemName}}</view>
		<view class="date2">点击查看</view>
		</view>
		</view>
		</view>
		</view>
		
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	   import  { getApplyedEnrollInstanceItemList } from '@/api/manage.js'
	   import uniSection from '@/components/uni-section/uni-section.vue'
		export default {
			  components: { uniList,
		 uniListItem,uniNoticeBar,uniSection},
			data() {
				return {
					itemPersonId: '',
			        showList: false,
					ProjectInstanceList: []
				}
			},
			onShow(){
				
				getApplyedEnrollInstanceItemList({}).then(res => {
					if(res.re===1){
						this.ProjectInstanceList = res.data
						
						if(this.ProjectInstanceList.length === 0){
							this.showList = true
						}else{
							this.showList = false
						}
					}
							
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
