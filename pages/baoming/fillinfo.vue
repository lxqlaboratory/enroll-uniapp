<template>
	<view>
	<uni-section title="请选择报名地点" type="line"></uni-section>
	<view class="adBaseView" v-for="items in itemList" :key="items.itemId" @click="submit(items.itemId)" >
		<view class="cloumnlist" >
			{{items.itemName}}-{{items.needCount}}人
		</view>
		<view class="bottomLine2"/>
	</view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
		import uniSection from '@/components/uni-section/uni-section.vue'
	import  { getEnrollProjectInstanceItemList } from '@/api/menu.js'
	export default {
		 components: {uniNoticeBar,uniSection},
		data() {
			return {
				instanceId: '',
				itemList: []
			}
		},
		onLoad(options) {
			console.log(options.instanceId)
			this.instanceId = options.instanceId
			getEnrollProjectInstanceItemList({instanceId:this.instanceId}).then(res => {
						this.itemList = res.data
						}).catch(err => {
							
						})
			},
		methods:{
			
         submit(itemId){
			 console.log(itemId)
		 }
		}
	}
</script>

<style>
</style>
