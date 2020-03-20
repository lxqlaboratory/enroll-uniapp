<template>
	<view>
		<uni-section title="人员管理" type="line"></uni-section>
	    <uni-swipe-action>
	    	<uni-swipe-action-item v-for="(item,index) in swipeList" :options="item.options" :key="item.id" @change="swipeChange" @click="swipeClick($event,index)">
	    		<text class="cont">{{item.content}}</text>
	    	</uni-swipe-action-item>
	    </uni-swipe-action>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { getEnrollItemPersonList } from '@/api/manage.js'
	export default {
		 components: {uniNoticeBar,
		 uniSection,
		 uniList,
		 uniSwipeAction,
		 uniSwipeActionItem,
		 uniListItem
		 },
		data() {
			return {
				showyemian: false,
				showdetail: false,
				loginName: '',
				enrollMode: '',
				personList: [],
				swipeList: [{
					options: [{
						text: '添加',
						style: {
							backgroundColor: 'rgb(255,58,49)'
						}
					}],
					id: 0,
					content: 'item1'
				}, {
					id: 1,
					options: [{
						text: '取消'
					}, {
						text: '删除',
						style: {
							backgroundColor: 'rgb(255,58,49)'
						}
					}],
					content: 'item2'
				}, {
					id: 2,
					options: [{
						text: '置顶'
					}, {
						text: '标记为已读',
						style: {
							backgroundColor: 'rgb(254,156,1)'
						}
					}, {
						text: '删除',
						style: {
							backgroundColor: 'rgb(255,58,49)'
						}
					}],
					content: 'item3'
				}]
			}
		},
		onLoad(options) {
			this.itemId = options.itemId
			this.enrollMode = options.enrollMode
			console.log(options.enrollMode)
			getEnrollItemPersonList({itemId:this.itemId,enrollMode:this.enrollMode}).then(res => {
							 this.personList = res.data
							
						}).catch(err => {
							
						})
		},
		methods:{
			swipeChange(e) {
					console.log('返回：', e);
				},
				swipeClick(e, index) {
					let {
						content
					} = e
					if (content.text === '删除') {
						uni.showModal({
							title: '提示',
							content: '是否删除',
							success: (res) => {
								if (res.confirm) {
									this.swipeList.splice(index, 1)
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					} else {
						uni.showToast({
							title: `已取消操作`,
							icon: 'none'
						})
					}
			
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
	
	
	.cont {
		flex: 1;
		height: 45px;
		line-height: 45px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		font-size: 15px;
		border-bottom-color: #F5F5F5;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
	
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding: 10px 0;
		background-color: #fff;
	}
	
	.button {
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		padding: 4px 8px;
		border-radius: 4px;
	}
	
	.button-text {
		font-size: 15px;
	}
</style>
