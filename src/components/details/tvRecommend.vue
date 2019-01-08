<template>
    <div class="recommend">
         <ul class="lists">
                <router-link tag="li" to="/TvDetails">
                    <img src="@/assets/images/rrr.jpg" alt="">
                    <div class="text">
                        <h3>符合iOShiU盾拉奶酪等你拉大手大脚偶的呢</h3>
                        <p><span>楼主</span>傻大个呀</p>
                        <span>日剧</span>
                    </div>
                </router-link>
                <router-link router-link tag="li" to="/TvDetails">
                    <img src="@/assets/images/rrr.jpg" alt="">
                    <div class="text">
                        <h3>符合iOShiU盾拉奶酪等你拉大手大脚偶的呢</h3>
                        <p><span>楼主</span>傻大个呀</p>
                        <span>日剧</span>
                    </div>
                </router-link>
                <router-link router-link tag="li" to="/TvDetails">
                    <img src="@/assets/images/rrr.jpg" alt="">
                    <div class="text">
                        <h3>符合iOShiU盾拉奶酪等你拉大手大脚偶的呢</h3>
                        <p><span>楼主</span>傻大个呀</p>
                        <span>日剧</span>
                    </div>
                </router-link>
            </ul>
    </div>
</template>

<script>
export default {

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

