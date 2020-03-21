<template>
	<view>
		<uni-section title="管理报名" type="line"></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item,index) in ProjectInstanceList" :options="options2" :key="item.instanceId"  @click="swipeClick($event,index,item.instanceId)">
				<text class="cont">{{item.instanceNum}}-{{item.instanceName}}-{{item.year}}年</text>
			</uni-swipe-action-item>
		</uni-swipe-action>
		
		<button class="button-cell" @click="submit">添加报名项</button>
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
	import  { getEnrollProjectInstanceListOfProject } from '@/api/project.js'
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
		 			showyemian: false,
		 			showdetail: false,
		 			projectId: '',
		 			list: [],
					options2: [{
						text: '编辑',
						style: {
							backgroundColor: '#7acfa6'
						}
					}, {
						text: '删除',
						style: {
							backgroundColor: 'rgb(255,58,49)'
						}
					}],
		 			instanceId: '',
		 			instanceName: '',
		 			retType: '',
		 			ProjectInstanceList: []
		 		}
		 	},
		 	onLoad(options) {
		 		this.projectId = options.projectId
		 		getEnrollProjectInstanceListOfProject({projectId: this.projectId}).then(res => {
		 						this.ProjectInstanceList = res.data
		 						
		 						
		 					}).catch(err => {
		 						
		 					})
		 	},
		 	methods:{
		 	
		 		submit(){
		 			uni.navigateTo({
		 				url:'./onlyTianjia'
		 			})
		 		},
				swipeClick(e, index,instanceId) {
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
								} else  {
									uni.showToast({
										title: `已取消操作`,
										icon: 'none'
									})
								}
							}
						});
					} else {
						uni.navigateTo({
							url:'./addProject?instanceId='+instanceId+'&&projectId='+this.projectId+''
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
