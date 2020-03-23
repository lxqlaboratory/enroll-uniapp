<template>
	<view>
		<uni-section title="填写具体项" type="line"></uni-section>
		<view class="adBaseView">
			<view class="adRowView">
				<view class="headView"><view class="mustView" >*</view>名称</view>
				<view style="width: 70%;"><input  class="input" v-model="item.itemName" placeholder="请输入名称" /></view>
			</view>
			<view class="bottomLine"/>
		</view>
		
		<view class="adBaseView">
			<view class="adRowView">
				<view class="headView"><view class="mustView" >*</view>需要人数</view>
				<view style="width: 70%;"><input  class="input" v-model="item.needCount" placeholder="请输入需要人数" /></view>
			</view>
			<view class="bottomLine"/>
		</view>
		
		<view class="adBaseView">
			<view class="adRowView">
				<view class="headView"><view class="mustView" >*</view>属性1</view>
				<view style="width: 70%;"><input  class="input" v-model="item.attribute1" placeholder="请输入属性1" /></view>
			</view>
			<view class="bottomLine"/>
		</view>
		
		
		
		<button class="button-cell" @click="submit">保存并提交</button>
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { saveOrUpdateEnrollInstanceItem } from '@/api/project.js'
	export default {
		 components: {
		 uniSection,
		 uniList,
		 uniListItem
		 },
		data() {
			return {
				showyemian: false,
				showdetail: false,
				item: {
					itemId: '',
					itemName: '',
					needCount: '',
					attribute1: ''
					},
				itemList: [],
				instanceId: '',
				instanceName: '',
				retType: '',
				ProjectInstanceList: []
			}
		},
		onLoad(options) {
			this.instanceId = options.instanceId
	
		},
		methods:{
			submit(){
				
				saveOrUpdateEnrollInstanceItem({instanceId:this.instanceId,item:this.item}).then(res => {
					              uni.switchTab({
					              	url:'../fist/fist'
					              })
								
							}).catch(err => {
								
							})
				
			}
		}
	}
</script>

<style>
</style>
