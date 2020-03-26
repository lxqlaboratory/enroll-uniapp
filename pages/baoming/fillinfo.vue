<template>
	<view>
	<view>
	<uni-section title="请选择报名地点" type="line"></uni-section>
	<view class="adBaseView" v-for="items in applyList" :key="items.itemId" @click="submit1(items.itemId,items.enrollMode,items.itemName)" >
		<view class="cloumnlist" >
			{{items.itemName}}
		</view>
		<view class="cloumnlist" v-for="index in items.auxiliaryList">
			{{index}}
		</view>
		<view class="cloumnlist" >
			需要{{items.needCount}}人
		</view>
		<view class="bottomLine2"/>
	</view>
	</view>
	
	
	<view>
	<uni-section title="候选报名地点" type="line"></uni-section>
	<view class="adBaseView" v-for="items in candidateList" :key="items.itemId" @click="submit2(items.itemId,items.enrollMode,items.itemName)" >
		<view class="cloumnlist" >
			{{items.itemName}}
		</view>
		<view class="cloumnlist" v-for="index in items.auxiliaryList">
			{{index}}
		</view>
		<view class="cloumnlist" >
			需要{{items.needCount}}人
		</view>
		<view class="bottomLine2"/>
	</view>
	</view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
		import uniSection from '@/components/uni-section/uni-section.vue'
		import  { enrollProjectInstanceApply } from '@/api/menu.js'
		import  { enrollProjectInstanceItemSubmit } from '@/api/menu.js'
	export default {
		 components: {uniNoticeBar,uniSection},
		data() {
			return {
				instanceId: '',
				retType: '',
				candidateList: [],
				applyList: []
			}
		},
		onLoad(options) {
			
			this.instanceId = options.instanceId
			enrollProjectInstanceApply({instanceId:this.instanceId}).then(res => {
						 this.candidateList = res.data.candidateList
							 this.applyList = res.data.applyList
						}).catch(err => {
							
						})
			},
		methods:{
			
         submit1(itemId,enrollMode,itemName){
			 console.log(itemId)
			 console.log(enrollMode)
			 var that = this;
			 uni.showModal({
			     title: '是否报名',
			     content: itemName,
			     success: function (res) {
			         if (res.confirm) {
						
			             enrollProjectInstanceItemSubmit({itemId:itemId,enrollMode:enrollMode}).then(res => {
			             		     if(res.re===1){
										 uni.showToast({
										      title: '报名成功',
										      duration: 2000
										 	
										  });
										 uni.switchTab({
										 	url:'../fist/fist'
										 })
									 }
									 else{
								uni.showModal({
								    title: '提示',
									showCancel: false,
									confirmColor: "#000000",
								    content: '报名已满',
								    success: function (res) {
								        if (res.confirm) {
											console.log(that.instanceId)
										uni.redirectTo({
											url:'../baoming/fillinfo?instanceId='+that.instanceId+''
										})
								        } 
								    }
								});
									
									 }
									
			             			}).catch(err => {
			             				
			             			})
			         } else if (res.cancel) {
			             console.log('用户点击取消');
			         }
			     }
			 });
			 
		 },
		 
		 
		 submit2(itemId,enrollMode,itemName){
		 	 console.log(itemId)
		 	 console.log(enrollMode)
		 	 var that = this;
		 	 uni.showModal({
		 	     title: '是否报名',
		 	     content: itemName,
		 	     success: function (res) {
		 	         if (res.confirm) {
		 				
		 	             enrollProjectInstanceItemSubmit({itemId:itemId,enrollMode:enrollMode}).then(res => {
		 	             		     if(res.re===1){
		 								 uni.showToast({
		 								      title: '报名成功',
		 								      duration: 2000
		 								 	
		 								  });
		 								 uni.switchTab({
		 								 	url:'../fist/fist'
		 								 })
		 							 }
		 							 else{
		 						uni.showModal({
		 						    title: '提示',
		 							showCancel: false,
		 							confirmColor: "#000000",
		 						    content: '报名已满',
		 						    success: function (res) {
		 						        if (res.confirm) {
		 									console.log(that.instanceId)
		 								uni.redirectTo({
		 									url:'../baoming/fillinfo?instanceId='+that.instanceId+''
		 								})
		 						        } 
		 						    }
		 						});
		 							
		 							 }
		 							
		 	             			}).catch(err => {
		 	             				
		 	             			})
		 	         } else if (res.cancel) {
		 	             console.log('用户点击取消');
		 	         }
		 	     }
		 	 });
		 	 
		  }
		 
		}
	}
</script>

<style>
</style>
