<template>
    <div class="search">
        <form action="/">
            <van-search
              v-model="value"
              placeholder="帖子标签、关键词"
              show-action
              @cancel="onCancel"
             />
        </form>
        <div class="main">
            <h3>热门搜索
                <span class="fr iconfont">&#xe600;</span>
            </h3>
            <div class="content">
                <router-link tag="span" to="/serachResult">日剧</router-link>
                <span>漫画</span>
                <span>美剧</span>
                <span>QQ美化</span>
                <span>火之迷恋</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:''
        }
    },
    methods:{
        onCancel(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
.main{
    margin-top: 44/50rem;
    >h3{
        padding: 0 10/50rem;
        font-size: 18/50rem;
        >span{
            color: #FD56A6;
        }
    }
    >.content{
        padding: 10/50rem;
        >span{
            display: inline-block;
            padding: 10/50rem 15/50rem;
            background: rgb(242, 242, 242);
            border-radius: 15/50rem;
            margin-bottom: 8/50rem;
        }
    }
    >.Ranking{
        padding: 0 10/50rem;
        line-height: 1rem;
        background: rgb(242, 242, 242);
        font-size: 16/50rem;
        i{
          font-size: 20/50rem; 
           color:#000;
        }
        >span{
            font-size: 20/50rem;
            color:yellow;
        }
    }
}
</style>

