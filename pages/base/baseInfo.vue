<template>
	<view>
		<uni-section title="基本信息完善" type="line"/>
		<view class="adBaseView">
		  <view class="adRowView">
				<view class="headView">姓名</view>
				<view class="input-text">{{perName}}</view>
			</view>
				<view class="bottomLine"></view>
		</view>
			<view class="adBaseView">
			  <view class="adRowView">
					<view class="headView">工号</view>
					<view class="input-text">{{perNum}}</view>
				</view>
					<view class="bottomLine"></view>
			</view>
				
			<view class="adBaseView">
			  <view class="adRowView">
					<view class="headView">学院</view>
					<view class="input-text">{{collegeName}}</view>
				</view>
					<view class="bottomLine"></view>
			</view>
			
			<view class="adBaseView">
				<view class="adRowView">
					<view class="headView">聘任类型</view>
					<view style="width: 70%;"><picker class="input" @change="bindchange" :value="index" :range="secondPerTypeList" :range-key="'label'">
									<view class="uni-input">{{secondPerTypeList[index].label}}</view>
								</picker></view>
				</view>
				<view class="bottomLine"/>
			</view>	
			<view class="adBaseView">
				<view class="adRowView">
					<view class="headView">手机号</view>
					<view style="width: 70%;"><input  class="input" v-model="mobilePhone" placeholder="请输入手机号" /></view>
				</view>
				<view class="bottomLine"/>
			</view>
			
			<view class="adBaseView">
				<view class="adRowView">
					<view class="headView">银行名称</view>
					<view style="width: 70%;"><input  class="input" v-model="bankName" placeholder="请输入银行名称,可以为空" /></view>
				</view>
				<view class="bottomLine"/>
			</view>
			
			<view class="adBaseView">
				<view class="adRowView">
					<view class="headView">银行卡号</view>
					<view style="width: 70%;"><input  class="input" v-model="bankNo" placeholder="请输入银行卡号,可以为空" /></view>
				</view>
				<view class="bottomLine"/>
			</view>				
			<button class="button-cell" @click="submit">保存并提交</button>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import  { personBaseInfoMaintainInit } from '@/api/baseInfo.js'
	import  { personBaseInfoMaintain } from '@/api/baseInfo.js'
	export default {
		 components: {uniNoticeBar,uniSection},
		data() {
			return {
				perName: '',
				perNum: '',
				personId: '',
				index: 0,
				mobilePhone: '',
				bankNo: '',
				bankName: '',
				collegeName: '',
				secondPerType: '',
				secondPerTypeList: [],
				ProjectInstanceList: []
			}
		},
		onShow(){
			
			personBaseInfoMaintainInit({}).then(res => {
							 this.secondPerTypeList = res.data.secondPerTypeList
							this.perName = res.data.perName
							this.perNum = res.data.perNum
							this.index = res.data.secondPerTypeIndex
							this.personId = res.data.personId
							this.mobilePhone = res.data.mobilePhone
							this.bankNo = res.data.bankNo
							this.bankName = res.data.bankName
							this.collegeName = res.data.collegeName
						}).catch(err => {
							
						})
		},
		methods:{
			bindchange(e){
				 this.index = e.target.value
				 
				this.secondPerType = this.secondPerTypeList[this.index].value
				 console.log(this.secondPerType )
			},
			submit(){
				personBaseInfoMaintain({personId:this.personId,secondPerType:this.secondPerType,
				mobilePhone:this.mobilePhone,bankNo:this.bankNo,bankName:this.bankName
				}).then(res => {
					if(res.re === 1){
						uni.showModal({
						    title: '提示',
							showCancel: false,
							confirmColor: "#000000",
						    content: '提交成功',
						    success: function (res) {
						        if (res.confirm) {
							
						        } 
						    }
						});
					}
					
					}).catch(err => {
						
					})
					
				}
		}
}
</script>

<style>
</style>
