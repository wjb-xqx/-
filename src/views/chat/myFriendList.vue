<template>
    <div class="my">
        <div class="return clearfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
            我的弹友
        </div>
        <ul class="main clearfix">
            <li class="clearfix">
                <h3>L</h3>
                <ul class="content clearfix">
                    <li>
                        <img src="@/assets/images/tup.jpg" alt="">
                        <span>sjiowdncdnil</span>
                    </li>
                    <li>
                        <img src="@/assets/images/tup.jpg" alt="">
                        <span>sjiowdncdnil</span>
                    </li>
                    <li>
                        <img src="@/assets/images/tup.jpg" alt="">
                        <span>sjiowdncdnil</span>
                    </li>
                </ul>
            </li>
            <li class="clearfix">
                <h3>L</h3>
                <ul class="content clearfix">
                     <li>
                        <img src="@/assets/images/tup.jpg" alt="">
                        <span>sjiowdncdnil</span>
                    </li>
                </ul>
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
}
.main{
    position: absolute;
    top: 1rem;
    left: 10/50rem;
    right: 10/50rem;
    >li{
        h3{
            line-height: 1rem;
            font-size: 18/50rem;
        }
        >.content{
           >li{
                display: block;
                margin: 10/50rem 0;
                >img{
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 50%;
                }
                >span{
                    padding-left: 10/50rem;
                    font-size: 18/50rem;
                }
           }
        }
    }
}
</style>

