<template>
    <ul class="vedio clearfix">
        <li>
            <img src="@/assets/images/ai.jpg" alt="">
            <h3>【FirstCs/泰剧】【魅力游戏】【第一集】啦啦啦啦</h3>
            <p>
                <span><i class="iconfont">&#xe697;</i>999.万</span>
                <span><i class="iconfont">&#xe69f;</i>1999</span>
            </p>
        </li>
         <li>
            <img src="@/assets/images/ai.jpg" alt="">
            <h3>【FirstCs/泰剧】【魅力游戏】【第一集】啦啦啦啦</h3>
            <p>
                <span><i class="iconfont">&#xe697;</i>999.万</span>
                <span><i class="iconfont">&#xe69f;</i>1999</span>
            </p>
        </li>
        <li>
            <img src="@/assets/images/ai.jpg" alt="">
            <h3>【FirstCs/泰剧】【魅力游戏】【第一集】啦啦啦啦</h3>
            <p>
                <span><i class="iconfont">&#xe697;</i>999.万</span>
                <span><i class="iconfont">&#xe69f;</i>1999</span>
            </p>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.vedio{
    >li{
        width: 50%;
        padding:10/50rem;
        float: left;
        box-sizing: border-box;
        >img{
            width: 100%;
            height: 2rem;
            border-radius: 15/50rem;
        }
        >h3{
            font-size: 16/50rem;
            line-height: 25/50rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        >p{
            line-height: 26/50rem;
            color:#ccc;
            i{
                padding-right: 8/50rem;
            }
        }

    }
}
</style>

