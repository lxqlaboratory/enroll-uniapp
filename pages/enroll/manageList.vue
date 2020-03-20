<template>
	<view>
		<uni-section :title="instanceName" type="line"></uni-section>
	    <uni-list v-for="items in itemList" :key="items.itemId" >
			<uni-list-item :show-arrow="false" >{{items.itemName}}  需要人数：{{items.needCount}}</uni-list-item>
	
            <uni-list-item :show-arrow="true" @click="entry(items.itemId)">已报名人数：{{items.enrollCount}}</uni-list-item>
			<uni-list-item :show-arrow="true" @click="entry2(items.itemId)">候选人数：{{items.candidateCount}}</uni-list-item>
			<view class="bottomLine2"></view>
		</uni-list>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { getEnrollProjectInstanceAndItemList } from '@/api/manage.js'
	export default {
		 components: {uniNoticeBar,uniSection,
		 uniSection,
		 uniList,
		 uniListItem
		 },
		data() {
			return {
				showyemian: false,
				showdetail: false,
				loginName: '',
				itemList: [],
				instanceId: '',
				instanceName: '',
				retType: '',
				ProjectInstanceList: []
			}
		},
		onLoad(options) {
			this.instanceId = options.instanceId
			getEnrollProjectInstanceAndItemList({instanceId:this.instanceId}).then(res => {
							 this.instanceName = res.data.instanceName
					 this.itemList = res.data.itemList
							
						}).catch(err => {
							
						})
		},
		methods:{
			entry(itemId){
				uni.navigateTo({
					url:'./personList?itemId='+itemId+'&&enrollMode=1'
				})
			},
			entry2(itemId){
				uni.navigateTo({
					url:'./personList?itemId='+itemId+'&&enrollMode=2'
				})
			}
		}
	}
</script>

<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}
	
	/* #endif */
	
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}
	
	view {
		font-size: 14px;
		line-height: inherit;
	}
	
	.example {
		padding: 0 15px 15px;
	}
	
	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}
	
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}
	
	/* #endif */
	.example {
		padding: 0 15px;
	}
	
	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}
	
	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}
	
	
	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}
	
	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}
	
	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}
	
	.word-btn--hover {
		background-color: #4ca2ff;
	}
</style>
