<template>
    <div class="comic">
        <div class="header">
            <img src="@/assets/images/tup.jpg" alt="">
            <div class="content clearfix">
                <div class="img">
                     <img src="@/assets/images/tup.jpg" alt="">
                </div>
                <div class="info">
                    <span>宅：1491596</span>
                    <span>美图：17887917</span>
                </div>
                <div class="info info1">
                    <span>No.9999+</span>
                    <span>成就</span>
                    <span>加入</span>
                </div>
            </div>
        </div>
        <!-- 顶部 -->
        <div class="return clearfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
             动漫美图
            <span class="fr post"><i class="iconfont">&#xe62c;</i></span>
            <router-link tag="div" to="/ComList" class="fr post"><i class="iconfont">&#xe6a8;</i></router-link>
        </div>
        <!-- 导航 -->
        <van-tabs v-model="active">
            <van-tab title="全部">
                <div class="content">
                    <!-- 精选推送 -->
                    <ul class="selectedList">
                        <li>
                            <span>精</span>
                            【贺年弹回征集】赢Wacom手绘板！元圆圆圆
                        </li>
                        <li>
                            <span>精</span>
                            【贺年弹回征集】赢Wacom手绘板！元圆圆圆
                        </li>
                        <li>
                            <span>精</span>
                            【贺年弹回征集】赢Wacom手绘板！元圆圆圆
                        </li>
                    </ul>
                    <!-- 推荐列表 -->
                    <ul class="recommendUser clearfix">
                         <li class="clearfix" v-for="(item,index) in userList" :key="index">
                              <div class="user">
                                  <img :src="item.url" alt="" class="fl">
                                  <div class="title fl">
                                      <h4>{{item.title}}
                                          <i class="iconfont xing">&#xe60c;</i>
                                      </h4>
                                      <p class="time">{{item.time}}天前</p>
                                  </div>
                                   <i class="fr iconfont">&#xe637;</i>
                              </div>
                              <h3>{{item.text}}</h3>
                              <ul class="imgBox clearfix">
                                  <li>
                                      <img src="@/assets/images/tup.jpg" alt="">
                                  </li>
                                  <li>
                                      <img src="@/assets/images/tup.jpg" alt="">
                                  </li>
                                  <li>
                                      <img src="@/assets/images/tup.jpg" alt="">
                                  </li>
                              </ul>
                              <div class="code">
                                  <span>动漫美图</span>
                                  <span>绘画</span>
                                  <span>P站</span>
                                  <span>风景</span>
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
            </van-tab>
            <van-tab title="头像">内容 2</van-tab>
            <van-tab title="壁纸">内容 3</van-tab>
            <van-tab title="热门">内容 4</van-tab>
            <van-tab title="最新">内容 4</van-tab>
        </van-tabs>
        <div class="add">
            <i class="iconfont">+&#xe670;</i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          active: 0,
          userList:[{
                id:1,
                url:require('../../assets/images/tup.jpg'),
                title:'进度条菌',
                time:'4',
                text:'游园惊梦 这是我见过的最想的妖姬了',
            },{
                id:2,
                url:require('../../assets/images/tup.jpg'),
                title:'区区俗人',
                time:'4',
                text:'游园惊梦 这是我见过的最想的妖姬了',
            },{
                id:3,
                url:require('../../assets/images/tup.jpg'),
                title:'进度条菌',
                time:'4',
                text:'游园惊梦 这是我见过的最想的妖姬了',
          }]
        };
    },
    methods:{
        prev(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    height: 6rem;
    position: relative;
    >img{
        width: 100%;
        height: 100%;
        position: relative;
        &::before{
            content:'';
            opacity: 0.1;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
        }
    }
    >.content{
        position: absolute;
        top: 30%;
        left: 50%;
        right: 0;
        width: 100%;
        transform: translateX(-50%);
        font-size: 18/50rem;
        >.img{
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          margin: 0 auto;
          >img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
          }  
        }
        >.info{
            line-height: 1rem;
            color:#000;
            text-align: center;
            >span{
                padding: 2/50rem;
            }
        }
        >.info1{
            >span{
                padding: 8/50rem 10/50rem;
                background-color: rgba(255, 255, 255, .2);
                border-radius: 15/50rem;
                &:nth-child(3){
                    background-color: #FB4C85;
                    border: .01rem solid#93384A;
                }
            }
        }
    }
}
// 顶部
.return{
        width: 100%;
        height: 48/50rem;
        font-size: 20/50rem;
        line-height: 48/50rem;
        color:#fff;
        font-weight: 700;
        text-align: center;
        font-family: KaiTi;
        position: fixed;
        top: 0;
        z-index: 99;
        >i{
            float: left;
            font-size: 20/50rem;
            padding:0  10/50rem;
        }
        >.post{
            padding-right: 10/50rem;
            >i{
               font-size: 20/50rem;

            }
        }
}
// 导航
/deep/.van-tabs__nav {
    width: 100%;
}
/deep/.van-tab{
    width: 20%;
    color:#000;
    font-size: 18/50rem;
}
/deep/.van-tabs__wrap--scrollable .van-tab{
    flex: 1;
}
/deep/.van-tabs__line{
    background-color: #000;
}
// 全部
.content{
    >.selectedList{
        padding: 0 10/50rem;
        margin: 10/50rem 0;
        >li{
            line-height: 40/50rem;
            font-size: 16/50rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            >span{
                display: inline-block;
                width: 20/50rem;
                line-height: 20/50rem;
                text-align: center;
                height: 20/50rem;
                background-color: #FDB34A;
                color:#fff;
            }
        }
    }
}
// 列表
.recommendUser{
        margin: 20/50rem 0;
        >li{
            padding: 0 10/50rem;
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
                    font-family: KaiTi;
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
            >.imgBox{
                >li{
                    width: 33.33%;
                    float: left;
                    padding: 6/50rem;
                    box-sizing: border-box;
                    >img{
                        width: 100%;
                    }
                }
            }
            >.code{
                line-height: 30/50rem;
                >span{
                    display: inline-block;
                    padding: 2/50rem 5/50rem;
                    background-color: #EBF6F2;
                    color:#567BA8;
                    border-radius: 10/50rem;
                }
            }
            >h3{
                line-height: 40/50rem;
                color:#000;
                font-weight: 700;
                font-size: 18/50rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-bottom: 10/50rem;
                font-family: KaiTi;
            }
            >.text{
                color:#666;
                font-family: KaiTi;
                font-size: 18/50rem;
                margin: 10/50rem 0;
            }
            >.likes{
                width: 100%;
                line-height: 1.5rem;
                color:#B8B8B8;
                >li{
                    float: left;
                    width: 33.33%;
                    text-align: center;
                    font-size: 20/50rem;
                    >i{
                        font-size: 25/50rem;
                    }
                }
            }
        }
}
.add{
    position: fixed;
    bottom: 1.5rem;
    right: 15/50rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    line-height: 1.2rem;
    background-color: #F44894;
    color:#fff;
    >i{
        font-size: 30/50rem;
    }
}
</style>

