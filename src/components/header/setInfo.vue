<template>
    <div class="setinfo">
        <navbar title="设置"></navbar>
        <div class="main">
            <ul class="item clearfix">
                <router-link tag="li" to="/personalInfo">个人资料<van-icon name="arrow" /></router-link>
                <router-link tag="li" to="/Blacklist">黑名单<van-icon name="arrow" /></router-link>
                <li>夜间模式 
                    <span class="fr">
                        <van-switch
                           v-model="checked"
                           active-color="#EEEEF0"
                           inactive-color="#F44F87"
                           size="18px"
                        />
                    </span>
                </li>
                <li>非WiFi下自动播放视频
                    <span class="fr">
                        <van-switch
                           v-model="checked1"
                           active-color="#EEEEF0"
                           inactive-color="#F44F87"
                           size="18px"
                        />
                    </span>
                </li>
                <li>清楚缓存<van-icon name="arrow" /></li>
            </ul>
            <ul class="item clearfix">
                <router-link tag="li" to="/automatic">自动回复<van-icon name="arrow" /></router-link>
                <router-link tag="li" to="/chatInfo">私信弹弹娘<van-icon name="arrow" /></router-link>
                <router-link tag="li" to="/chatInfo">私信弹弹妹<van-icon name="arrow" /></router-link>
            </ul>
            <ul class="item clearfix">
                <router-link tag="li" to="convention">用户公约 <van-icon name="arrow" /></router-link>
                <router-link tag="li" to="cooperation">商务合作<van-icon name="arrow" /></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import navbar from '../navbar/navbar'
export default {
    data(){
        return{
            checked: true,
            checked1: true
        }
    },
    components:{
        navbar
    }
}
</script>

<style lang="less" scoped>
.setinfo{
   font-family: KaiTi;
   position: absolute;
   background-color: #EEEEF0;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   color:#000;
}
.main{
    position: absolute;
    top: 46/50rem;
    left: 0;
    right: 0;
    bottom: 0;
    .item{
        background-color: #fff;
        >li{
            line-height: 1rem;
            padding: 0 20/50rem;
            border-bottom: .001rem solid #EEEEF0;
            font-size: 16/50rem;
            >.point{
                display: inline-block;
                width: 8/50rem;
                height: 8/50rem;
                border-radius: 50%;
                background-color: #F44F87;
                margin-top: 16/50rem;
            }
            >i{
                font-size: 20/50rem;
                float: right;
                line-height: 1rem;
            }
        }
        margin-bottom: 8/50rem; 
    }
}
</style>

