<script>
	export default {
		globalData: {
		            vueSessionId: ''  
		        },
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*每个页面公共css */
	
	.cloumnlist {
	text-align: center;
	/* margin-left: 30upx; */
	font-size: 28upx;
	}
	
	
	
	.adBaseView {
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 20upx;
	}
	.adRowView {
		width: calc(100% - 48upx);
		display: flex;
		flex-direction: row;
		align-items: center;
		 color: rgb(94, 94, 94);
	}
	.headView {
		flex: 1;
		text-align: left;
		/* margin-left: 30upx; */
		font-size: 28upx;
		/*超出一行点点点*/
		overflow:hidden; /*超出的部分隐藏起来。*/ 
		white-space:nowrap;/*不显示的地方用省略号...代替*/
		text-overflow:ellipsis;/* 支持 IE */
		
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.mustView {
		color: red;
		font-size: 32upx;
		margin-left: 10upx;
	}
	.bottomLine {
		width: 95%;
		height: 2upx;
		background-color: #DDDDDD;
		margin-top: 20upx;
	}
	.input{
		text-align: right !important;
		font-size: 28upx !important;
	}
	.input-text{
		text-align: right !important;
		font-size: 28upx !important;
		color: rgb(128, 128, 128);
	}
	.button-cell{

       width: 45%;
	   font-size: 28upx;
	   margin-top: 10upx;
       background-color: #7acfa6;
	
	}
	.bottomLine2 {
		width: 100%;
		height: 2upx;
		background-color: #DDDDDD;
		margin-top: 20upx;
	}
	
	.title{
	  margin: 0 15upx;
	  color: black;
	  font-weight: bolder;
	  font-size: 30upx;
	  text-align: center;
	}
	
	
	.content{
	 
	  padding: 10upx;
	  text-indent: 2em;
	  text-align: left;
	  margin: 10upx;
	  border: 2upx solid gray;
	  border-radius: 8upx;
	  background-color: white;
	}
</style>
