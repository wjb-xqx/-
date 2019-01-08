<template>
    <div class="comment cleaarfix">
        <!-- 返回 -->
        <div class="return cleaarfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
            12楼
            <span tag="span" class="fr post">
                <i class="iconfont">&#xe637;</i>
            </span>
        </div>
        <!-- 全部回复 -->
        <div class="item">
            <div class="content1 cleaarfix">
                <div class="img">
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                    <div class="text">
                       ddd15613232
                    </div>
                    <div class="add">
                        <span>+关注</span>
                    </div>
                </div>
                <p>谁能概述我昼颜的小说在哪里看啊？一直没找到，百度只有故事概念，贴吧也没有看到</p>
                <div class="time">
                    <span class="fl">12-12-12 10:50</span>
                    <span class="fr">9<i class="iconfont">&#xe643;</i></span>
                </div>
            </div>
            <h3>全部回复</h3>
            <ul class="listBox">
                <li class="content2">
                    <div class="img">
                        <img src="@/assets/images/20190106100157.jpg" alt="">
                    </div>
                    <div class="info">
                        <h4>ddd15613232 <span class="fr">13楼</span> </h4>
                         <div class="te">
                             <span class="fl">12-12-12 10:50</span>
                             <span class="fr"><i class="iconfont">&#xe643;</i></span>
                         </div>
                         <p>不卡</p>
                    </div>
                </li>
                <li class="content2">
                    <div class="img">
                        <img src="@/assets/images/20190106100157.jpg" alt="">
                    </div>
                    <div class="info">
                        <h4>ddd15613232 <span class="fr">13楼</span> </h4>
                         <div class="te">
                             <span class="fl">12-12-12 10:50</span>
                             <span class="fr"><i class="iconfont">&#xe643;</i></span>
                         </div>
                         <p>不卡</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <input type="text" placeholder="我也想说一句...">
            <div class="in">
                <span class="fr">发送</span>
            </div>
        </div>
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
.item{
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    padding: 0 10/50rem;
    .content1{
        >.img{
            display: flex;
            >img{
                width: 1rem;
                border-radius: 50%;
                height: 1rem;
            }
            >.text{
                padding-left: 5/50rem;
                flex: 1;
                line-height: 1rem;
            }
            >.add{
                >span{
                    display: inline-block;
                    width: 1rem;
                    line-height: 25/50rem;
                    border: .01em solid #000;
                    margin: 15/50rem;
                    border-radius: 15/50rem;
                    text-align: center;
                }
            }
        }
        >p{
            line-height: 25/50rem;
            font-size: 16/50rem;
        }
        >.time{
            width: 100%;
            height: 25/50rem;
            margin: 10/50rem 0;
            color:#ccc;
        }
    }
}
// 回复
h3{
    line-height: 30/50rem;
    font-size: 18/50rem;
}
.content2{
        display: flex;
        padding: 0 10/50rem;
        margin: 20/50rem 0;
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
            >p{
                line-height: 30/50rem;
            }
        }
}
// 底部
.footer{
    line-height: 1.4rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    >input{
        width: 90%;
        display: block;
        height: 30/50rem;
        padding-left: 10/50rem;
        margin: 5/50rem auto;
        background-color: #F7F7F7;
        border-radius: 15/50rem;
    }
    >.in{
        padding: 0 10/50rem;
        height: 40/50rem;
        >span{
            display: inline-block;
            width: 1rem;
            line-height: 30/50rem;
            color:#fff;
            background-color: #FE4C86;;
            text-align: center;
            border-radius: 15/50rem;
        }
    }
}
</style>

