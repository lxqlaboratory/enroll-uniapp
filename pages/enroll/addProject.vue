<template>
	<view>
	<uni-section title="报名信息填写" type="line"></uni-section>
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView"><view class="mustView" >*</view>项目名称</view>
			<view style="width: 70%;"><input  class="input" v-model="instance.instanceName" placeholder="请输入实例名称" /></view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView"><view class="mustView" >*</view>报名说明</view>
			<view style="width: 70%;"><input  class="input" v-model="instance.instanceDes" placeholder="请输入报名说明" /></view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView"><view class="mustView" >*</view>年份</view>
			<view style="width: 70%;"><input  class="input" v-model="instance.year" placeholder="例:2020" /></view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView"><view class="mustView" >*</view>是否可见</view>
			<view style="width: 70%;"><input  class="input" v-model="instance.isVisible" placeholder="请输入0或1" /></view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">人员限制类型</view>
			<view style="width: 70%;"><picker class="input" @change="bindchange" :value="index" :range="limitTypeList" :range-key="'label'">
							<view class="uni-input">{{limitTypeList[index].label}}</view>
						</picker></view>
		</view>
		<view class="bottomLine"/>
	</view>	
	
	
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">报名开始日期</view>
			<view >
				<picker mode="date" :value="instance.enrollStartDate" :start="startDate" :end="endDate" @change="bindDateChange">
				                        <view>{{instance.enrollStartDate}}</view>
				                    </picker>
			</view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">报名开始时间</view>
			<view >
				<picker mode="time" :value="instance.enrollStartTime" start="00:00" end="24:00" @change="bindTimeChange">
				                        <view>{{instance.enrollStartTime}}</view>
				                    </picker>
			</view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">报名结束日期</view>
			<view >
				<picker mode="date" :value="instance.enrollEndDate" :start="startDate" :end="endDate" @change="bindDateChangeenrollEndDate">
				                        <view>{{instance.enrollEndDate}}</view>
				                    </picker>
			</view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">报名结束时间</view>
			<view >
				<picker mode="time" :value="instance.enrollEndTime" start="00:00" end="24:00" @change="bindTimeChangeenrollEndTime">
				                        <view>{{instance.enrollEndTime}}</view>
				                    </picker>
			</view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">结果发布开始日期</view>
			<view >
				<picker mode="date" :value="instance.viewStartDate" :start="startDate" :end="endDate" @change="bindDateChangeviewStartDate">
				                        <view>{{instance.viewStartDate}}</view>
				                    </picker>
			</view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">结果发布开始时间</view>
			<view >
				<picker mode="time" :value="instance.viewStartTime" start="00:00" end="24:00" @change="bindTimeChangeviewStartTime">
				                        <view>{{instance.viewStartTime}}</view>
				                    </picker>
			</view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">结果发布结束日期</view>
			<view >
				<picker mode="date" :value="instance.viewEndDate" :start="startDate" :end="endDate" @change="bindDateChangeviewEndDate">
				                        <view>{{instance.viewEndDate}}</view>
				                    </picker>
			</view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView">结果发布结束时间</view>
			<view >
				<picker mode="time" :value="instance.viewEndTime" start="00:00" end="24:00" @change="bindTimeChangeviewEndTime">
				                        <view>{{instance.viewEndTime}}</view>
				                    </picker>
			</view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	
	
	
	
	<button class="button-cell" @click="submit">保存并提交</button>
	
	
	
	
	<view>
		<uni-section title="报名项" type="line"></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item,index) in itemList" :options="options2" :key="item.itemId"  @click="swipeClick($event,index,item.itemId)">
				<text class="cont">{{item.itemName}}-{{item.needCount}}人</text>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<button class="button-cell" @click="addItem">添加报名项</button>
	</view>
	
	
	
	
	
	
	
	
	</view>
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import  { getEnrollProjectInstanceDetail } from '@/api/project.js'
	import  { saveOrUpdateEnrollProjectInstance } from '@/api/project.js'
	export default {
		 components: {
		 uniSection,
		 uniList,
		 uniSwipeAction,
		 uniSwipeActionItem,
		 uniListItem},
		    data() {
			    const currentDate = this.getDate({
			            format: true
			        })
			return {
				instance:{
					enrollEndDate:'',
					enrollEndTime:'',
					enrollStartDate: '',
					enrollStartTime: '',
					instanceDes:'',
					instanceId:'',
					instanceName:'',
					instanceNum: '',
					isVisible: '',
					limitType: '',
					viewEndDate: '',
					viewEndTime: '',
					viewStartDate: '',
					viewStartTime: ''
				},
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
				projectId: '',
				date: currentDate,
				showyemian: false,
				showdetail: false,
				index: 0,
				limitTypeList: [],
				instanceId: '',
				instanceName: '',
				retType: '',
				itemList: []
			}
		},
		onLoad(options) {
			this.projectId = options.projectId
			this.instanceId = options.instanceId
			getEnrollProjectInstanceDetail({instanceId: this.instanceId}).then(res => {
							this.instance = res.data.instance
							this.itemList = res.data.itemList
							this.index = res.data.instance.limitTypeIndex
							this.limitTypeList = res.data.instance.limitTypeList
							
						}).catch(err => {
							
						})
		},
		 computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		methods:{
			bindchange(e){
				this.index = e.target.value
				 
				this.instance.limitType = this.limitTypeList[this.index].value
				 console.log(this.instance.limitType )
			},
			
		            bindDateChange: function(e) {
		            
					this.instance.enrollStartDate =  e.target.value
		          },
				   bindTimeChange: function(e) {
				            this.instance.enrollStartTime = e.target.value
				   },
				   bindDateChangeenrollEndDate(e){
					   this.instance.enrollEndDate = e.target.value
				   },
				   bindTimeChangeenrollEndTime(e){
					   this.instance.enrollEndTime = e.target.value
				   },
				   bindDateChangeviewStartDate(e){
					   this.instance.viewStartDate = e.target.value
				   },
				   bindTimeChangeviewStartTime(e){
					   this.instance.viewStartTime = e.target.value
				   },
				   bindDateChangeviewEndDate(e){
					   this.instance.viewEndDate = e.target.value
				   },
				   bindTimeChangeviewEndTime(e){
					    this.instance.viewEndTime = e.target.value
				   },
				   
				   
				   
				   
				   
			submit(){
				saveOrUpdateEnrollProjectInstance({instance: this.instance,projectId: this.projectId}).then(res => {
								uni.switchTab({
									url:'../fist/fist'
								})
								
							}).catch(err => {
								
							})
				
			},
			getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
			        },
					
					
					
					addItem(){
						
					},
					
					
					swipeClick(e, index,itemId) {
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
								url:'./addNewItem?itemId='+itemId+''
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

