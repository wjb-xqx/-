<template>
    <div class="list">
        <navbar title="创建收藏"></navbar>
        <div class="main">
           <!-- 搜索框 -->
            <div class="se clearfix">
                <div class="search">
                    <i class="iconfont">&#xe6a8;</i>
                    <input type="text" placeholder="搜索关键字">
                </div>
            </div>
            <ul class="lists">
                <router-link tag="li" to="/">
                    <img src="../imgs/rrr.jpg" alt="">
                    <div class="text">
                        <h3>符合iOShiU盾拉奶酪等你拉大手大脚偶的呢</h3>
                        <p><span>楼主</span>傻大个呀</p>
                        <span>收藏：1</span>
                        <span class="fr">回复：1</span>
                    </div>
                </router-link>
                <router-link router-link tag="li" to="">
                    <img src="../imgs/rrr.jpg" alt="">
                    <div class="text">
                        <h3>符合iOShiU盾拉奶酪等你拉大手大脚偶的呢</h3>
                        <p><span>楼主</span>傻大个呀</p>
                        <span>收藏：1</span>
                        <span class="fr">回复：1</span>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import navbar from '../../navbar/navbar'
export default {
    data(){
        return{
            checked: true,
        }
    },
    methods:{
       
    },
    components:{
        navbar
    }
}
</script>

<style lang="less" scoped>
.main{
    position: absolute;
    top: 46/50rem;
    background-color: #FAFAFA;
    left: 0;
    right: 0;
    bottom: 0;
}
 // 搜索框
.se{
    background-color: #FAFAFA;
    margin: 10/50rem 0;
}
.search{
    width: 90%;
    height: 1rem;
    background-color: #fff;
    border-radius: 25/50rem;
    margin: 0 auto;
    position: relative;
    >input{
        width:90%;
        display: block;
        margin: 0 auto;
        height: 100%;
        background-color: #F3F5F4;
        border-radius: 25/50rem;
        text-align: center;
        font-size: 0.35rem;
    }
    >i{
        position: absolute;
        top: 15/50rem;
        left: 50/50rem;
        font-size: 22/50rem;
    }
}
// 列表
.lists{
    margin: 15/50rem 0;
    >li{
        padding: 10/50rem;
        display: flex;
        height: 2rem;
        margin: 20/50rem 0;
        border-bottom: .001rem solid #ccc;
        >img{
            width: 3rem;
            height: 100%;
            border-radius: 5/50rem;
        }
        >.text{
            padding-left: 15/50rem;
           >h3{
               line-height: 20/50rem;
               color: #000;
               font-size: 16/50rem;
               display: -webkit-box;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 2;
               overflow: hidden;
           } 
           >p{
               line-height: 40/50rem;
               >span{
                   display: inline-block;
                   width: 40/50rem;
                   height: 25/50rem;
                   line-height: 25/50rem;
                   text-align: center;
                   border-radius: 5/50rem;
                   border: .01rem solid #ccc;
               }
           }
           >span{
               color:#ccc;
           }
        }
    }    
}
</style>
