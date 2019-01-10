<template>
    <div class="div">
        <nav-bar title="我的收藏"></nav-bar>
        <div class="main">
            <router-link tag="p" to="/CreateCollection">+创建收藏夹</router-link>
            <ul>
                <router-link tag="li" to="/collectionList">
                    <img src="../imgs/r2_c2.jpg" alt="">
                    <div class="text">
                        <b>默认收藏</b>
                        <span>0帖子</span>
                        <span class="fr">公开</span>
                    </div>
                </router-link>
                <router-link tag="li" to="/collectionList">
                    <img src="../imgs/r2_c2.jpg" alt="">
                     <div class="text">
                        <b>默认收藏</b>
                        <span>0帖子</span>
                        <span class="fr">公开</span>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import navBar from '../../navBar/navBar'
export default {
    components:{
        navBar
    }
}
</script>

<style lang="less" scoped>
.main{
    position: absolute;
    top: 46/50rem;
    background-color: #FAFAFA;
    left: 0;
    right: 0;
    bottom: 0;
    >p{
        text-align: center;
        font-size: 18/50rem;
        color:#979797;
        line-height: 1rem;
    }
    >ul{
        >li{
            padding: 0 10/50rem;
            display: flex;
            margin-bottom: 10/50rem;
            height: 2rem;
            >img{
                width: 3rem;
                height: 100%;
            }
            >.text{
                flex: 1;
                >b{
                    display: block;
                    line-height: 1.5rem;
                    font-size: 18/50rem;
                }
                >span{
                    color:#989898;
                    font-size: 16/50rem;
                }
            }
        }
    }
}
</style>

