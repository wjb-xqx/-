<template>
    <div class="bbigBo">
        <!-- tv视频 -->
        <div class="devio">
            <!-- 返回 -->
            <div class="return clearfix">
                <i class="iconfont" @click='prev'>&#xe602;</i>
                <span class="iconfont">&#xe610;</span>  继续播放
                <span tag="span" class="fr post">
                    <i class="iconfont">&#xe637;</i>
                </span>
            </div>
            <div class="tvBig">
                <video controls src="@/assets/images/vedios.mp4" ></video>
            </div>
            <div class="content">
                <h3>日剧《昼颜》11完结</h3>
                 <p>
                     <span><i class="iconfont">&#xe697;</i>126万</span>
                     <span><i class="iconfont">&#xe642;</i>827</span>
                 </p>
                 <span>昼颜</span>
                 <ul class="down clearfix">
                     <li>
                         <i class="iconfont">&#xe60c;</i>
                         <p>119</p>
                     </li>
                     <li>
                         <i class="iconfont">&#xe60c;</i>
                         <p>284</p>
                     </li>
                     <li>
                         <i class="iconfont">&#xe60c;</i>
                         <p>缓存</p>
                     </li>
                     <li>
                         <i class="iconfont">&#xe60c;</i>
                         <p>分享</p>
                     </li>
                </ul>
                <!-- 猜你喜欢 -->
                <div class="likes">
                    <h3>猜你喜欢 <span class="fr">查看更多</span> </h3>
                    <ul class="clearfix">
                        <li>
                            <div class="img">
                                <img src="@/assets/images/dongman.jpg" alt="">
                                <div class="text">
                                     <span class="fl">
                                        <i class="iconfont">&#xe697;</i>
                                        8.3万
                                    </span>
                                    <span class="fr">
                                        <i class="iconfont">&#xe69f;</i>
                                        15
                                    </span>
                                </div>
                                <p>日剧《昼颜》04</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img src="@/assets/images/dongman.jpg" alt="">
                                <div class="text">
                                    <span class="fl">
                                        <i class="iconfont">&#xe697;</i>
                                        8.3万
                                    </span>
                                    <span class="fr">
                                        <i class="iconfont">&#xe69f;</i>
                                        15
                                    </span>
                                </div>
                                <p>日剧《昼颜》04</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 来自 -->
                <div class="form">
                 来自&nbsp;<span class="formAd">日剧区</span>
                <div class="fr">
                    <span>日剧</span>
                    <span>昼颜</span>
                    <span>人妻</span>
                    <span>上户彩</span>
                </div>
                </div>
                <!-- 楼主 -->
                <div class="lz">
                <img src="@/assets/images/dongman.jpg" alt="">
                <div class="text">
                    <h3>BetterLee <span>楼主</span></h3>
                    <div class="time">
                        17-07-20 17:57
                    </div>
                </div>     
                <div class="add">
                    <span>+关注</span> 
                </div>
                </div>
                <!-- 精彩回复 -->
                <ul class="Reply clearfix">
                     <h3>精彩回复</h3>
                    <router-link tag="li" to="/comment" class="content1">
                        <div class="img">
                            <img src="@/assets/images/20190106100157.jpg" alt="">
                        </div>
                        <div class="info">
                            <h4>ddd15613232 <span class="fr">13楼</span> </h4>
                             <p>谁能概述我昼颜的小说在哪里看啊？一直没找到，百度只有故事概念，贴吧也没有看到</p>
                             <div class="te">
                                 <span class="fl">12-12-12 10:50</span>
                                 <span class="fr"><i class="iconfont">&#xe643;</i></span>
                             </div>
                             <div class="reapyCentent clearfix">
                                 <div class="name clearfix">
                                     <span>70默</span>
                                     <span>大概只有买的吧。。。</span>
                                 </div>
                                 <div class="name clearfix">
                                     <span>70默</span>
                                     <span>大概只有买的吧大概只有吧大概只有大概大概只有买的吧。大概只有买的吧。买的吧。。</span>
                                 </div>
                                 <div class="more clearfix">
                                     更多1条回复
                                 </div>
                             </div>
                        </div>
                    </router-link>
                </ul>
                <!-- 全部回复 -->
                <div class="replyAll clearfix">
                <ul class="text">
                    <router-link tag="li" to="/replyAll">全部回复<span>47</span> </router-link>
                    <router-link tag="li" to="/tvRecommend">相关推荐</router-link>
                    <li>正序排序<i class="iconfont"></i> </li>
                </ul>
                <router-view />
                </div>
                </div>
                <!-- 底部评价，糖果，收藏，转发 -->
                <div class="footer">
                <input type="text" placeholder="我也说一句...">
                <i class="iconfont">&#xe642;</i>
                <i class="iconfont">&#xe60e;</i>
                <i class="iconfont">&#xe60c;</i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'TvDetails',
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
        display: none;
        width: 100%;
        height: 48/50rem;
        font-size: 20/50rem;
        line-height: 48/50rem;
        color:#000;
        font-weight: 700;
        text-align: center;
        border-bottom: .001rem solid #EEEEF0;
        font-family: KaiTi;
        background-color: #fff;
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
.tvBig{
     width: 100%;
     height: 4.5rem;
     >video{
         width: 100%;
         height: 100%;
     }
}
.content{
    margin: 10/50rem 0;
    >h3{
        padding: 0 10/50rem;
        font-size: 18/50rem;
        line-height: 40/50rem;
    }
    >p{
        padding: 0 10/50rem;
        line-height: 20/50rem;
        color:#ccc;
        >span{
            padding-right: 30/50rem;
            >i{
                padding-right: 5/50rem;
            }
        }
    }
    >span{
        padding: 0 10/50rem;
        color:#58575C;
        font-size: 16/50rem;
        line-height: 30/50rem;
    }
    >.down{
        margin: 10/50rem 0;
        >li{
            float: left;
            width: 25%;
            text-align: center;
            color:#939298;
            >i{
                font-size: 25/50rem;
            }
            >p{
                line-height: 20/50rem;
            }
        }
    }
}
// 猜你喜欢
.likes{
    margin: 10/50rem 0;
    padding: 5/50rem 0;
   >h3{
     padding: 0 10/50rem;
     line-height: 40/50rem;
     font-size: 18/50rem;
     >span{
         color:#ccc;
     }
   }
   >ul{
       >li{
           float: left;
           width: 50%;
           padding: 10/50rem;
           box-sizing: border-box;
          >.img{
              width: 100%;
              height: 2rem;
              position: relative;
              >img{
                  width: 100%;
                  height: 100%;
              }
              >.text{
                  position: absolute;
                  bottom: 5/50rem;
                  color:#fff;
                  left: 8/50rem;
                  right: 8/50rem;
                  font-size: 16/50rem;
                  background-color: rgba(0, 0, 0, .1);
                  i{
                      font-size: 20/50rem;
                  }
              }
              >p{
                  line-height: 30/50rem;
                  font-size: 16/50rem;
              }
          }
       }
   }
}
// 来自
.form{
    margin-top: 1.2rem;
    line-height: 1rem;
    padding: 0 10/50rem;
    font-size: 18/50rem;
    color:#ccc;
    >span{
        color:#5B71AB;
    }
    >.fr{
        color:#5B71AB;
        >span{
            display: inline-block;
            background-color: #EFF2F7;
            padding: .01rem 5/50rem;
            border-radius: 15/50rem;
        }
    }
}
// 楼主
.lz{
    padding: 20/50rem 10/50rem;
    display: flex;
    width: 100%;
    height: 1.5rem;
    >img{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
    >.text{
        flex: 1;
        padding: 0 3/50rem;
        >h3{
            line-height: 40/50rem;
            font-size: 18/50rem;
            >span{
                display: inline-block;
                width: 40/50rem;
                height: 20/50rem;
                color:#ccc;
                text-align: center;
                line-height: 20/50rem;
                font-size: 16/50rem;
                border: .01rem solid #ccc;
            }
        }
        >.time{
            line-height: 30/50rem;
            color:#ccc;
        }
    }
    >.add{
        width: 1.2rem;
        height: 1.5rem;
        margin-right: 5/50rem;
        >span{
            display: inline-block;
            width: 1rem;
            height: 30/50rem;
            border: .01rem solid #1D1D1D;
            text-align: center;
            line-height: 30/50rem;
            border-radius: 15/50rem;
            margin-top: 20/50rem;
        }
    }
}
// 精彩回复
.Reply{
    margin-bottom: 20/50rem;
    >h3{
        line-height: 1rem;
        font-size: 18/50rem;
        padding: 0 10/50rem;
    }
    >.content1{
        display: flex;
        padding: 0 10/50rem;
        >.img{
            width: 1.5rem;
            >img{
                width: 1rem;
                border-radius: 50%;
                height: 1rem;
            }
        }
        >.info{
            padding-left: 5/50rem;
            >h4{
                line-height: 30/50rem;
            }
            >p{
                line-height: 20/50rem;
                font-size: 16/50rem;
            }
            .te{
                height: 25/50rem;
                width: 100%;
                color:#ccc;
            }
            >.reapyCentent{
                >.name{
                    line-height: 28/50rem;
                   >span{
                       float: left;
                       &:nth-child(1){
                            color:#9CB7C8;
                            font-size: 18/50rem;
                       }
                       &:nth-child(2){
                            color:#000;
                            font-size: 18/50rem;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                       }
                   }
                }
                >.more{
                    line-height: 40/50rem;
                    color:#728896;
                }
            }
        }
    }
}
// 全部回复
.text{
    >li{
        width: 33.33%;
        float: left;
        text-align: center;
        font-size: 18/50rem;
        line-height: 1rem;
        color:#000;
    }
}
// 底部
.footer{
    height: 1rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    >i{
        font-size: 25/50rem;
        line-height: 1rem;
        float: right;
        padding-right: 8/50rem;
    }
    >input{
        width: 60%;
        height: 40/50rem;
        background-color: #F7F7F7;
        margin-left: 8/50rem;
        padding-left: 5/50rem;
        margin-top: 5/50rem;
        border-radius: 15/50rem;
    }
}
</style>

