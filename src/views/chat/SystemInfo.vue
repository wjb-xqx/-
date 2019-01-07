<template>
    <div class="system">
        <!-- 顶部 -->
        <div class="return clearfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
             系统通知
        </div>
        <ul class="InfoList">
            <li class="clearfix" v-for="(item,index) in list" :key="index">
                <h3>{{item.name}}</h3>
                <span>{{item.title}}</span>
                <i class="time fr">{{item.time}}分钟前</i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{
                   id:1,
                   name:'你获得了新的勋章',
                   title:'恭喜你获得了地界清月勋章，快来看看吧',
                   time:'1'
               },{
                   id:1,
                   name:'你获得了新的勋章',
                   title:'恭喜你获得了地界清月勋章，快来看看吧',
                   time:'2'
               },{
                   id:1,
                   name:'你获得了新的勋章',
                   title:'恭喜你获得了地界清月勋章，快来看看吧',
                   time:'3'
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
.system{
    width: 100%;
    height: 100%;
}
// 顶部
.return{
        width: 100%;
        height: 48/50rem;
        font-size: 20/50rem;
        line-height: 48/50rem;
        color:#000;
        border-bottom: .03rem solid #F2F2F2;
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
             color:#F16391;
        }
        >.post{
            padding-right: 10/50rem;
            >i{
               font-size: 20/50rem;

            }
        }
}
.InfoList{
    margin-top: 1rem;
    padding: 0 10/50rem;
    >li{
        font-size: 18/50rem;
        padding: 3/50rem 0;
        border-bottom: .03rem solid #F2F2F2;
        >h3{
            font-family: KaiTi;
            line-height: 30/50rem;
            color:#000;
        }
        >span{
            display: inline-block;
            width: 80%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            color:#8D8D8D;
            font-size: 16/50rem;
            line-height: 25/50rem;
        }
        >.time{
            font-size: 14/50rem;
            color:#9A9A9A;
        }
    }
    
}
</style>

