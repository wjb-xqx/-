<template>
    <div class="list">
         <!-- 返回 -->
            <div class="return clearfix">
                <i class="iconfont" @click='prev'>&#xe602;</i>
                配音/声控
                <span tag="span" class="fr post">
                    <i class="iconfont">&#xe637;</i>
                </span>
            </div>
            <div class="header">
                <div class="c">
                    <div class="img">
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                     </div>
                     <div class="te">
                         <h3>配音/声控</h3>
                         <p>
                             <span class="fl">成员：16556401564</span>
                             <span class="fr">帖子：16556401564</span>
                         </p>
                     </div>
                </div>
            </div>
            <h4>版区介绍</h4>
            <p>行走事件，全是妖怪</p>
            <ul class="item clearfix">
                <h3>版主（3/3）</h3>
                <router-link tag="li" to="/User">
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </router-link>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
            </ul>
            <ul class="item clearfix">
                <h3>版主（3/3）</h3>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
            </ul>
            <ul class="item clearfix">
                <h3>版主（3/3）</h3>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
                <li>
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <p>[长生]天后丢</p>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    methods:{
        prev(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
// 返回
.return{
    width: 100%;
    height: 48/50rem;
    font-size: 20/50rem;
    line-height: 48/50rem;
    color:#000;
    font-weight: 700;
    text-align: center;
    font-family: KaiTi;
    position: fixed;
    z-index: 99;
    >i{
        float: left;
        color:#FE4C86;
        font-size: 20/50rem;
        padding:0  10/50rem;
    }
    >.post{
        padding-right: 14/50rem;
        font-size: 14/50rem;
        color:#FE4C86;;
    }
}
.header{
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    width: 100%;
    >.c{
        display: flex;
        position: absolute;
        top: 1.2rem;
        padding: 0 10/50rem;
        color:#fff;
        >.img{
            width: 1.5rem;
            height: 1.5rem;
            >img{
                width: 100%;
                height: 100%;
                border-radius: 15/50rem;
            }
        }
        >.te{
            flex: 1;
            padding-left: 3/50rem;
            >h3{
                line-height: 1rem;
                font-size: 16/50rem;
            }
            >p{
              font-size: 16/50rem;
              >span{
                  padding-right: 3/50rem;
              }
            }
        }
    }
}
.list{
    >h4{
        line-height: 40/50rem;
        font-size: 18/50rem;
        padding: 0 10/50rem;
    }
    >p{
        line-height: 30/50rem;
        font-size: 16/50rem;
        color:#ccc;
        padding: 0 10/50rem;
    }
    >.item{
        margin: 15/50rem 0;
        >h3{
            font-size: 18/50rem;
            padding: 0 10/50rem;
        }
        >li{
            width: 25%;
            float: left;
            padding: 10/50rem;
            box-sizing: border-box;
            >img{
                width: 100%;
                border-radius: 50%;
            }
            >p{
                text-align: center;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
        }
    }
}
</style>

