<template>
	<view>
	<uni-section title="报名信息填写" type="line"></uni-section>
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView"><view class="mustView" >*</view>手机号</view>
			<view style="width: 70%;"><input  class="input"  placeholder="请输入手机号" /></view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView"><view class="mustView" >*</view>银行名称</view>
			<view style="width: 70%;"><input  class="input"  placeholder="请输入银行名称" /></view>
		</view>
		<view class="bottomLine"/>
	</view>
	
	<view class="adBaseView">
		<view class="adRowView">
			<view class="headView"><view class="mustView" >*</view>银行卡号</view>
			<view >
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				                        <view>{{date}}</view>
				                    </picker>
			</view>
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
	import  { getEnrollProjectInstanceDetail } from '@/api/project.js'
	export default {
		 components: {
		 uniSection,
		 uniList,
		 uniListItem},
		data() {
			    const currentDate = this.getDate({
			            format: true
			        })
			return {
				date: currentDate,
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
		onLoad(options) {
			
			this.instanceId = options.instanceId
			getEnrollProjectInstanceDetail({instanceId: this.instanceId}).then(res => {
							
							
							
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
		 bindDateChange: function(e) {
		            this.date = e.target.value
		        },
			submit(){
				uni.navigateTo({
					url:'./addProject'
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
			        }
		}
	}
</script>

<style>
	
</style>
