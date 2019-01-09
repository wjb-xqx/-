<template>
    <div class="chatpage">
        <!-- 返回 -->
        <div class="return clearfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
            毕SAPAH
            <span tag="span" class="fr post">
                <i class="iconfont">&#xe637;</i>
            </span>
        </div>
        <div class="main">
            <div class="time">
                4天前
            </div>
            <div class="other clearfix">
                <div class="img">
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                </div>
                <div class="content">
                    <p>亲。你说的怒is底部哈斯U盾hiuaefbhwuilb就差你多少遍粉丝哦放假藕粉色烦恼还是得</p>
                </div>
            </div>
            <div class="other my clearfix">
                 <div class="img">
                    <img src="@/assets/images/20190106100157.jpg" alt="">
                </div>
                <div class="content1">
                    <p>亲。你说的怒is底部哈斯U盾hiuaefbhwuilb就差你多少遍粉丝哦放假藕粉色烦恼还是得</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <input type="text" placeholder="打个招呼吧...">
            <div class="content">
                <span><i class="iconfont">&#xe62b;</i></span>
                <span><i class="iconfont">&#xe62b;</i></span>
                <span><i class="iconfont">&#xe62b;</i></span>
                <span><i class="iconfont">&#xe62b;</i></span>
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
.main{
    position: absolute;
    top: 1rem;
    left: 10/50rem;
    right:  10/50rem;
    bottom: 2rem;
    background-color: #FAFAFA;
    >.time{
        text-align: center;
        line-height: 20/50rem;
    }
    >.other{
        margin: 10/50rem 0 20/50rem;
        >.img{
            width: 1rem;
            height: 1rem;
            float: left;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        >.content{
            width: 60%;
            float: left;
            font-size: 18/50rem;
            line-height: 25/50rem;
            padding: 10/50rem;
            margin-left: 15/50rem;
            background-color: #5C86F2;
             position: relative;
             color:#fff;
             &::before{
                content: '';
                width: 0;
                height: 0;
                z-index: 1;
                top: 15.5px;
                left: -10px;
                position: absolute;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-right: 10px solid #5298ff;
            }
        }
    }
    >.my{
        .img{
            float: right;
        }
        .content1{
            width: 60%;
            font-size: 18/50rem;
            line-height: 25/50rem;
            padding: 10/50rem;
            background-color: #5C86F2;
            float: right;
            margin-right: 10/50rem;
            position: relative;
             color:#fff;
            &::after{
                content: '';
                width: 0;
                height: 0;
                z-index: 1;
                top: 15.5px;
                right: -10px;
                position: absolute;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-left: 10px solid #5298ff;
            }
        }

    }
}
// 底部
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2rem;
    >input{
        width: 100%;
        background-color: #fff;
        font-size: 16/50rem;
        padding-left: 5/50rem;
        line-height: 1rem;
    }
    input::-webkit-input-placeholder {
        color: #ccc;
         font-size: 16/50rem;      
    }
    >.content{
        height: 1rem;
        padding:  0 10/50rem;
        >span{
            display: inline-block;
            width: 25%;
            height: 1rem;
            text-align: center;
            box-sizing: border-box;
            float: left;
            >i{
                font-size: 25/50rem;
                line-height: 1rem;
            }
        }
    }
}
</style>
