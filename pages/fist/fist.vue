<template>
	<view v-if="!showdetail">
	<view class="main-core" >
	   
	<view class="main-core-item" v-for="item in list" :key = item.resId >
			   <view @click="swtich(item.cmd)">
				<image class="core-item-icon" :src=item.image></image>
				<text class="core-item-name">{{item.name}}</text>
				</view>
			</view>
		
			</view>	
			</view>
	<view v-else>
		<uni-section title="校内报名" type="line"/>
		<view class="adBaseView" v-for="items in ProjectInstanceList" :key="items.instanceId" @click="entry(items.instanceId,items.instanceDes)">
			 
			<view class="cloumnlist" >
				{{items.instanceName}}
			</view>
			<view class="bottomLine2"/>
			
		</view>
		</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import  { MenuList } from '@/api/login.js'
	import  { getEnrollProjectInstanceList } from '@/api/login.js'
	export default {
		 components: {uniNoticeBar,uniSection},
		data() {
			return {
				showdetail: false,
				loginName: '',
				list: [],
				ProjectInstanceList: []
			}
		},
		onLoad() {
			
		   MenuList({}).then(res => {
				 this.list = res.data
				if(this.list.length===1)
				{
					this.showdetail = true
		            
				}else{
					this.showdetail = false
				}
			}).catch(err => {
				
			})
			getEnrollProjectInstanceList({}).then(res => {
							 this.ProjectInstanceList = res.data
							
						}).catch(err => {
							
						})
		},
		methods:{
			swtich(url) {
				console.log(url)
				uni.navigateTo({
					url:'../enroll/'+url
				})
			},
			entry(instanceId,instanceDes){
				uni.navigateTo({
					url:'../baoming/baoming?instanceId='+instanceId+'&&instanceDes='+instanceDes+''
				})
			}
		}
	}
</script>

<style>
	
	.main-core{
	  background-color: white;
	  display: flex;
	  flex-flow: row wrap;
	  align-content: flex-start;
	  height: 18%;
	  overflow: hidden;
	  
	}
	.main-core-item{
	  display: flex;
	  flex-flow: column wrap;
	  justify-content: center;
	  align-items: center;
	  box-sizing: border-box;
	  width: 20%;
	  height: 170upx;
	}
	.core-item-icon{
	  display: block;
	  width: 85upx;
	  height: 85upx;
	  margin: 15upx auto;
	}
	.core-item-name{
	  display: block;
	
	  font-size: 20upx;
	}
	
	.title{
		     position: relative;
	padding-bottom: 10upx;
		    text-align: center;
		    background-color: #C8C7CC;
			
	}
	.text{
		font-weight: 500;
		font-size: 30upx;
	     
	}
</style>
