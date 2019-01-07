<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/edition">版区</van-tabbar-item>
            <van-tabbar-item icon="add"></van-tabbar-item>
            <van-tabbar-item icon="chat" info="5" to="/chat">消息</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/User">我</van-tabbar-item>
        </van-tabbar>
        <span></span>
    </div>
</template>
<script>
export default {
    data() {
        return {
          active: 0
        }
  }
}
</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;
    height: 60/50rem;
    left: 0;
    right: 0;
    border-top: .01rem solid #EEEEF0;
    z-index: 999;
    background-color: #fff;
    /deep/.van-tabbar-item__icon{
        font-size: 30/50rem;
    }
    /deep/.van-tabbar-item--active{
        color:#FD56A6;
    }
    /deep/.van-icon-add{
        color:#FD56A6;
        font-size: 1rem;
        margin-top: -0.2rem;
    }
}
</style>
