<template>
    <ul class="lists">
        <router-link tag="li" to="'/'" v-for="(item,index) in list" :key="index">
            <div class="img">
                <img :src="item.url" alt="">
                <p class="num">{{item.id}}</p>
            </div>
            <div class="text">
                <h3><span>原创</span> {{item.lou}}</h3>
                <p><span>楼主</span>{{item.id}}</p>
                <span>收藏：{{item.shou}}</span>
                <span class="fr">回复：{{item.hui}}</span>
            </div>
        </router-link>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            list:[{
                id:1,
                url:require('../../assets/images/user.png'),
                name:'符合iOShiU盾拉奶酪等你拉大手大脚偶的呢',
                lx:'原创',
                lou:'傻大个呀',
                shou:'1',
                hui:'5'
            },{
                id:2,
                url:require('../../assets/images/user.png'),
                name:'符合iOShiU盾拉奶酪等你拉大手大脚偶的呢',
                lx:'原创',
                lou:'傻大个呀',
                shou:'1',
                hui:'5'
            },{
                id:3,
                url:require('../../assets/images/user.png'),
                name:'符合iOShiU盾拉奶酪等你拉大手大脚偶的呢',
                lx:'原创',
                lou:'傻大个呀',
                shou:'1',
                hui:'5'
            }]
        }
    }
}
</script>

<style lang="less" scoped>
// 列表
.lists{
    margin: 15/50rem 0;
    >li{
        padding: 10/50rem;
        display: flex;
        height: 2rem;
        margin: 20/50rem 0;
        border-bottom: .001rem solid #ccc;
       >.img{
           position: relative;
            img{
                width: 3rem;
                height: 100%;
                border-radius: 5/50rem;
            }   
            >p{
                width: 30/50rem;
                height: 26/50;
                line-height: 26/50rem;
                text-align: center;
                position: absolute;
                top:-5/50rem;
                left: 50%;
                transform: translateX(-50%);
                background-color: #B1B1B1;
                color:#fff;
            }
       }
       &:nth-child(1){
           >.img{
               >p{
                   background-color: #FC4404;
               }
           }
       }
        &:nth-child(2){
           >.img{
               >p{
                   background-color: #FFBF03;
               }
           }
       }
        &:nth-child(3){
           >.img{
               >p{
                   background-color: #7A8EFF;
               }
           }
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
           >p{
               line-height: 40/50rem;
               >span{
                   display: inline-block;
                   width: 40/50rem;
                   height: 25/50rem;
                   line-height: 25/50rem;
                   text-align: center;
                   border-radius: 5/50rem;
                   border: .01rem solid #C3C3C3;
                   color:#C3C3C3;
               }
           }
           >span{
               color:#ccc;
           }
        }
    }    
}
</style>
