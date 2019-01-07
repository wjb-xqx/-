<template>
    <div class="add">
        <div class="return clearfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
            我的弹友
        </div>
        <div class="content">
            <!-- 搜索框 -->
            <div class="se clearfix">
                <div class="search">
                    <i class="iconfont">&#xe6a8;</i>
                    <input type="text" placeholder="搜索关键字">
                </div>
            </div>
            <ul class="list_two">
                <li v-for="(item,index) in list" :key="index">
                    {{item.name}}
                    <span class="fr">
                        <van-icon name="arrow" />
                    </span>
                </li>
            </ul>
            <h3>最近聊天</h3>
            <ul class="list_two list">
                <li v-for="(item,index) in list" :key="index">
                    <img src="@/assets/images/tup.jpg" alt="">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{
                  id:1,
                  name:'我的关注'
              },{
                  id:2,
                  name:'我的粉丝'
            }]
        }
    },
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
.content{
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    // 搜索框
    .se{
        background-color: #FAFAFA;
        margin: 10/50rem 0;
    }
    .search{
        width: 90%;
        height: 1rem;
        background-color: #fff;
        border-radius: 25/50rem;
        margin: 0 auto;
        position: relative;
        >input{
            width:90%;
            display: block;
            margin: 0 auto;
            height: 100%;
            background-color: #F3F5F4;
            border-radius: 25/50rem;
            text-align: center;
            font-size: 0.35rem;
        }
        >i{
            position: absolute;
            top: 15/50rem;
            left: 25/50rem;
            font-size: 22/50rem;
        }
    }
    // 我的关注我的粉丝
    .list_two{
        padding: 0 10/50rem;
        font-size: 17/50rem;
        margin-bottom: 10/50rem ,jjk;
        >li{
            line-height: 1.2rem;
            border-bottom: .001rem solid #ccc;
            >img{
                width: 1rem;
                border-radius: 50%;
            }
        }
        /deep/.van-icon-arrow{
            font-size:20/50rem;
        }
    }
    .list{
        >li{
            border-bottom: none;
            font-size: 18/50rem;
            margin-bottom: 5/50rem;
            
        }
    }
    >h3{
        line-height: 45/50rem;
        background-color: #FAFAFA;
        padding: 0 10/50rem;
    }
}

</style>

