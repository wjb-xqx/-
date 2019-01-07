<template>
    <div class="conetnt">
        <div class="zq">
            <img src="@/assets/images/user.png" alt="">
            <div class="text">
                <h3>专区：泰剧</h3>
                <p>
                    <span>帖子：666万</span>
                    <span>成员：66.6万</span>
                </p>
            </div>
            <div class="add">
                <span>+加入</span>
            </div>
        </div>
        <ul class="list vedioList">
            <!-- 视频 -->
              <li class="clearfix">
                <div class="user">
                    <img src="@/assets/images/tup.jpg" alt="" class="fl">
                    <div class="title fl">
                        <h4>进度条菌
                            <i class="iconfont xing">&#xe60c;</i>
                        </h4>
                        <p class="time">4天前</p>
                    </div>
                    <!-- 分享页面 -->
                     <i class="fr iconfont" @click="forwardPage">&#xe637;</i>
                </div>
                <h3><span>原创</span> 游园惊梦 这是我见过的我见过我见过最见过的最想的妖想的妖姬了</h3>
                <h5>别名：治爱游戏</h5>
                <div class="videoBig clearfix">
                    <video controls src="@/assets/images/vedios.mp4" ></video>
                </div>
                <div class="type">
                    <span>短视频区</span>
                    <span>cos</span>
                    <span>游戏coser</span>
                </div>
                <!-- 留言评价喜欢 -->
                <ul class="likes">
                    <li><i class="iconfont">&#xe625;</i>685</li>
                    <li><i class="iconfont">&#xe69f;</i>888</li>
                    <li><i class="iconfont">&#xe6ac;</i>666</li>
                </ul>
            </li>
        </ul>
        <ul class="list textList">
            <!-- 文本 -->
              <li class="clearfix">
                <div class="user">
                    <img src="@/assets/images/tup.jpg" alt="" class="fl">
                    <div class="title fl">
                        <h4>进度条菌
                            <i class="iconfont xing">&#xe60c;</i>
                        </h4>
                        <p class="time">4天前</p>
                    </div>
                    <!-- 分享页面 -->
                     <i class="fr iconfont" @click="forwardPage">&#xe637;</i>
                </div>
                <h3>游园惊梦 这是我见过的最想的妖姬了</h3>
                <div class="videoBig clearfix">
                    <img src="@/assets/images/user.png" alt="">
                    <img src="@/assets/images/user.png" alt="">
                    <img src="@/assets/images/user.png" alt="">
                </div>
                <div class="type">
                    <span>短视频区</span>
                    <span>cos</span>
                    <span>游戏coser</span>
                </div>
                <!-- 留言评价喜欢 -->
                <ul class="likes">
                    <li><i class="iconfont">&#xe625;</i>685</li>
                    <li><i class="iconfont">&#xe69f;</i>888</li>
                    <li><i class="iconfont">&#xe6ac;</i>666</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'seContent'
}
</script>

<style lang="less" scoped>
.conetnt{
   padding: 10/50rem;
   >.zq{
       display: flex;
       margin-bottom: 40/50rem;
       >img{
           width: 1rem;
           height: 1rem;
           border-radius: 5/50rem;
       }
       >.text{
           flex: 1;
           padding-left: 5/50rem;
           >h3{
               line-height: 30/50rem;
               font-size: 16/50rem;
           }
           >p{
               color:#ccc;
           }
       }
       >.add{
           width: 1rem;
           >span{
               display: inline-block;
               width: 1rem;
               height: 30/50rem;
               line-height: 30/50rem;
               text-align: center;
               border: .01rem solid #212121;
               border-radius: 30/50rem;
           }
       }
   }
  >.list{
        margin-top: 10/50rem;
        >li{
            padding: 0 10/50rem;
            margin-bottom: 20/50rem;
            >.user{
                height: 1rem;
            >img{
                height: 1rem;
                border-radius: 50%;
            }
            >.title{
                padding-left: 15/50rem;
                >h4{
                    font-size: 16/50rem;
                    font-weight: 700;
                    >.xing{
                        color:#FFAE14;
                    }
                    >.zhuang{
                        color:#BBE7FF;
                    }
                }
                >.time{
                    line-height: 30/50rem;
                    color:#ccc;
                }
            }
             >i{
                font-size: 20/50rem;
                padding-right: 20/50rem;
            }
            }
            >h3{
                line-height: 28/50rem;
                color:#000;
                font-weight: 700;
                font-size: 16/50rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-bottom: 10/50rem;
                >span{
                    width: 40/50rem;
                    height: 25/50rem;
                    display: inline-block;
                    color:#fff;
                    font-size: 14/50rem;
                    border-radius: 10/50rem;
                    text-align: center;
                    line-height: 25/50rem;
                    background-color: #FFAE14;
                }
            }
            >h5{
                color:#ccc;
                 display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }
            >.text{
                color:#666;
                font-family: KaiTi;
                font-size: 18/50rem;
                margin: 10/50rem 0;
            }
            >.videoBig{
                width: 100%;
                >video{
                   width: 100%;
                   height: 3.5rem;
                }
                >img{
                    padding: 3/50rem;
                    box-sizing: border-box;
                    width: 33.33%;
                    float: left;
                }
            }
            >.type{
                line-height: 1.2rem;
                >span{
                    display: inline-block;
                    line-height: 30/50rem;
                    text-align: center;
                    background-color: #EEF3F6;
                    color:#537A9B;
                    padding: .001rem 12/50rem;
                    border-radius: 15/50rem;
                }
            }
            >.likes{
                width: 100%;
                line-height: 40/50rem;
                color:#B8B8B8;
                >li{
                    float: left;
                    width: 33.33%;
                    text-align: center;
                    font-size: 18/50rem;
                    >i{
                        font-size: 20/50rem;
                    }
                }
            }
        }
    }
}
</style>
