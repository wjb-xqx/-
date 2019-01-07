<template>
    <div class="info">
         <navbar title="个人资料"></navbar>
         <div class="main">
             <div class="userImg clearfix">
                <div class="img">
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <span><i class="iconfont">&#xe62b;</i></span>
                </div>
                <div class="info">
                    <p>DD号：1291864545</p>
                    <p>在线时长：2小时30分钟</p>
                    <p>资料完整度：33%</p>
                </div>
             </div>
             <ul class="infoList clearfix">
                 <li>
                     昵称 
                     <span>dd999999999</span>
                 </li>
                 <li>
                     个人主页背景 
                     <span>
                         <img src="@/assets/images/20190106100157.jpg" alt="">
                     </span>
                 </li>
                 <li>
                     性别 
                     <span>
                         <i class="iconfont">&#xe612;</i>男
                     </span>
                     <span>
                         <i class="iconfont">&#xe612;</i>女
                     </span>
                     <span>
                         <i class="iconfont">&#xe612;</i>你猜
                     </span>
                 </li>
                 <li>
                     生日 
                     <span>未设置</span>
                 </li>
                 <li>
                     学校 
                     <span><van-icon name="arrow" /></span>
                 </li>
                 <li>
                     位置 
                     <span><van-icon name="arrow" /></span>
                     <span>未次元</span>
                 </li>
                 <li>
                     邦定账号 
                     <span><van-icon name="arrow" /></span>
                     <span> <i class="iconfont">&#xe62d;</i></span>
                     <span> <i class="iconfont">&#xe628;</i></span>
                     <span> <i class="iconfont">&#xe60b;</i></span>
                     <span> <i class="iconfont">&#xe677;</i></span>
                 </li>
                 <li>
                     个性签名 
                     <span class="text fr">懒癌晚期。什么都没有留下o(╥﹏╥)o</span>
                 </li>
             </ul>
         </div>
    </div>
</template>

<script>
import navbar from '../../navbar/navbar'
export default {
     components:{
        navbar
    }
}
</script>

<style lang="less" scoped>
.main{
     position: absolute;
    background-color: #FAFAFA;
    top: 46/50rem;
    left: 0;
    right: 0;
    bottom: 0;
    >.userImg{
        padding: 15/50rem 10/50rem;
        text-align: center;
        font-size: 18/50rem;
        >.img{
            width: 1.5rem;
            height: 1.5rem;
            margin: 0 auto;
            border: .01rem solid #ccc;
            border-radius: 50%;
            line-height: 1.5rem;
             position: relative;
            overflow: hidden;
            >img{
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
            }
            >span{
                position: absolute;
                bottom: 0;
                left: 0;
                display: inline-block;
                width:1.5rem;
                height:.6rem;
                background-color: rgba(0, 0, 0, .5);
                border-radius: 0 0 50px 50px;
                >i{
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    color:#fff;
                    line-height: .6rem;
                }
            }
        }
        >.info{
            margin: 10/50rem;
            >p{
                line-height: 25/50rem;
                color:#BCBCBC;
                &:nth-child(3){
                   color: #E5BC86;
                }
            }
        }
    }
    >.infoList{
        padding: 0 20/50rem;
        font-size: 18/50rem;
        >li{
            line-height: 1rem;
            color:#222222;
            border-bottom: .01rem solid #E4E4E4;
            >span{
                float: right;
                color:#B2B2B2;
                padding-right: 3/50rem;
                >img{
                    width: 1rem;
                    height: .8rem;
                }
                >i{
                    font-size: 22/50rem;
                    line-height: .8rem;
                }
            }
            >.text{
                width: 60%;
                height: 100%;
                font-size: 12/50rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
        }
    }
}
</style>
