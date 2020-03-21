<template>
	<view>
		<uni-section title="人员添加" type="line"></uni-section>
		<view class="example-body">
			<uni-search-bar  placeholder="请输入姓名或工号" @confirm="search"/>
			
		</view>
		
		<view v-if="showShanchu">
			<uni-section title="请点击要添加的人员" type="line"></uni-section>
			<uni-list v-for="items in addList" :key="items.perNum" >
				 <uni-list-item :show-arrow="true" @click="add(items.perNum)">{{items.perName}}-{{items.perNum}}-{{items.collegeName}}</uni-list-item>
					</uni-list>
		</view>
	
		
		<view v-else>
			<uni-section title="人员删除" type="line"></uni-section>
	    <uni-swipe-action>
	    	<uni-swipe-action-item v-for="(item,index) in personList" :options="options" :key="item.itemPersonId" @change="swipeChange" @click="swipeClick($event,index,item.itemPersonId)">
	    		<text class="cont">{{item.perName}}-{{item.perNum}}-{{item.collegeName}}</text>
	    	</uni-swipe-action-item>
	    </uni-swipe-action>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { getEnrollItemPersonList } from '@/api/manage.js'
	import  { enrollItemPersonApplyCancel } from '@/api/manage.js'
	import  { getSelectPersonList } from '@/api/manage.js'
		import  { enrollItemPersonApplyAdd } from '@/api/manage.js'
	export default {
		 components: {uniNoticeBar,
		 uniSection,
		 uniList,
		 uniSearchBar,
		 uniSwipeAction,
		 uniSwipeActionItem,
		 uniListItem
		 },
		data() {
			return {
				showShanchu: false,
				showdetail: false,
				addList: [],
				itemId: '',
				enrollMode: '',
				personList: [],
				options: [{
					text: '取消'
				}, {
					text: '删除',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}]
				
			}
		},
		onLoad(options) {
			this.itemId = options.itemId
			this.enrollMode = options.enrollMode
			console.log(options.enrollMode)
			this.showShanchu = false
			getEnrollItemPersonList({itemId:this.itemId,enrollMode:this.enrollMode}).then(res => {
							 this.personList = res.data
							
						}).catch(err => {
							
						})
		},
		methods:{
			
			search(res) {
				this.showShanchu = true
				getSelectPersonList({input:res.value}).then(res => {
								 this.addList = res.data
								
							}).catch(err => {
								
							})
				
			},
			add(perNum){
				var that = this;
				uni.showModal({
					title: '是否添加',
					content: perNum,
					success: (res) => {
						if (res.confirm) {
							
						enrollItemPersonApplyAdd({perNum:perNum,itemId:this.itemId,enrollMode:this.enrollMode}).then(res => {
														
						       if(res.data==='查不到此人，无法报名！')
										{
											uni.showToast({
												title: '查不到此人，无法报名！',
												icon: 'none'
											})
											
										}else if(res.data==='已经报名无须再报名！'){
											uni.showToast({
												title: '已经报名无须再报名！',
												icon: 'none'
											})
										}
										
										else if(res.re === 1){
											uni.showToast({
												title: '添加成功！',
												icon: 'none'
											})
											uni.redirectTo({
												url:'../enroll/personList?itemId='+that.itemId+'&&enrollMode='+that.enrollMode+''
											})
										}
									}).catch(err => {
										
									})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			
			},
			
			   swipeChange(e) {
					console.log('返回：', e);
				},
				swipeClick(e, index,id) {
					let {
						content
					} = e
					if (content.text === '删除') {
						uni.showModal({
							title: '提示',
							content: '是否删除',
							success: (res) => {
								if (res.confirm) {
									
									enrollItemPersonApplyCancel({itemPersonId:id}).then(res => {
													 if(res.re === 1){
														 this.personList.splice(index,1);
														 uni.showToast({
														 	title: `删除成功`,
														 	icon: 'none'
														 })
													 }
												
												}).catch(err => {
													
												})
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
	
	
	
	.search-result {
		margin-top: 10px;
		margin-bottom: 20px;
		text-align: center;
	}
	
	.search-result-text {
		text-align: center;
		font-size: 14px;
	}
	
	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}
</style>
