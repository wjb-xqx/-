<template>
    <div class="search clearfix">
        <div class="return clearfix">
            <i class="iconfont" @click='prev'>&#xe602;</i>
            专区
            <router-link tag="span" to="/createEdition" class="fr post">创建专区</router-link>
        </div>
        <div class="main">
             <div class="searchBox">
                <van-search placeholder="请输入搜索关键词" v-model="value" />
             </div>
             <ul class="content clearfix">
                <li class="clearfix">
                    <h3>B</h3>
                    <div class="text clearfix">
                        <div class="box">
                            <img src="@/assets/images/dongman.jpg" alt="">
                            <h4>表情图</h4>
                            <div class="add fr">
                                 <span>+加入</span>
                            </div>
                        </div>
                         <div class="box">
                            <img src="@/assets/images/dongman.jpg" alt="">
                            <h4>表情图</h4>
                            <div class="add fr">
                                 <span>+加入</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="clearfix">
                    <h3>B</h3>
                    <div class="text">
                        <div class="box">
                            <img src="@/assets/images/dongman.jpg" alt="">
                            <h4>表情图</h4>
                            <div class="add fr">
                                 <span>+加入</span>
                            </div>
                        </div>
                         <div class="box">
                            <img src="@/assets/images/dongman.jpg" alt="">
                            <h4>表情图</h4>
                            <div class="add fr">
                                 <span>+加入</span>
                            </div>
                        </div>
                    </div>
                </li>
             </ul>
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
        >.post{
            padding-right: 14/50rem;
            font-size: 14/50rem;
            color: #7D7D7D;
        }
}
.main{
    margin-top: 1rem;
    background: #EFF3F6;
    >.content{
        >li{
            padding: 0 10/50rem;
            >h3{
                line-height: 30/50rem;
                color:#84878E;
                font-size: 16/50rem;
            }
            >.text{
                background-color: #fff;
                >.box{
                    line-height: 1.2rem;
                    display: flex;
                    margin: 10/50rem 0;
                    >img{
                        width: 1.2rem;
                        height: 1.2rem;
                    }
                    >h4{
                        flex: 1;
                        padding-left: 8/50rem;
                        color:#232323;
                        font-size: 16/50rem;
                    }
                    >.add{
                        width: 1.2rem;
                        >span{
                            display: block;
                            width: 1.1rem;
                            height: 30/50rem;
                            text-align: center;
                            margin-top: 15/50rem;
                            line-height: 30/50rem;
                            border: .001rem solid #252525;
                            border-radius: 15/50rem;
                        }
                    }
                }

            }
        }
    }
}
</style>

