<template>
    <ul class="all">
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
        <router-link tag="li" to="/comment" class="content1">
            <div class="img">
                <img src="@/assets/images/20190106100157.jpg" alt="">
            </div>
            <div class="info">
                <h4>ddd15613232 <span class="fr">13楼</span> </h4>
                 <p>谁能概述我昼颜的小概念，贴吧也没有看到</p>
                 <div class="te">
                     <span class="fl">12-12-12 10:50</span>
                     <span class="fr"><i class="iconfont">&#xe643;</i></span>
                 </div>
            </div>
        </router-link>
            <router-link tag="li" to="/comment" class="content1">
            <div class="img">
                <img src="@/assets/images/20190106100157.jpg" alt="">
            </div>
            <div class="info">
                <h4>ddd15613232 <span class="fr">13楼</span> </h4>
                 <p>谁能概述我昼颜的小概念，贴吧也没有看到</p>
                 <div class="te">
                     <span class="fl">12-12-12 10:50</span>
                     <span class="fr"><i class="iconfont">&#xe643;</i></span>
                 </div>
            </div>
        </router-link>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.all{
    padding: 10/50rem;
    margin-bottom: 1rem;
}
 .content1{
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
                line-height: 30/50rem;
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
</style>

