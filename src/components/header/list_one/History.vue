<template>
    <div class="topic">
        <nav-bar title="浏览记录" rightText="清空"></nav-bar>
        <div class="main">
           <ul>
               <li>
                    <van-swipe-cell :right-width="100" >
                        <van-cell-group>
                            <h3><span>原创</span> 发现漏发了一个视频</h3>
                            <p>
                                <span>新人如果说话不大苏空话不大苏空话不大苏空的凤凰男法搜一才能</span>
                                <i class="fr">12分钟前</i>
                            </p>
                            <b>我有毒</b>
                        </van-cell-group>
                        <span slot="right">删除</span>
                    </van-swipe-cell>
               </li>
               <li>
                    <van-swipe-cell :right-width="100" >
                        <van-cell-group>
                            <h3><span>原创</span> 发现漏发了一个视频</h3>
                            <p>
                                <span>新人如果说话不大苏空话不大苏空话不大苏空的凤凰男法搜一才能</span>
                                <i class="fr">12分钟前</i>
                            </p>
                            <b>我有毒</b>
                        </van-cell-group>
                        <span slot="right">删除</span>
                    </van-swipe-cell>
               </li>
               <li>
                    <van-swipe-cell :right-width="100" >
                        <van-cell-group>
                            <h3><span>原创</span> 发现漏发了一个视频</h3>
                            <p>
                                <span>新人如果说话不大苏空话不大苏空话不大苏空的凤凰男法搜一才能</span>
                                <i class="fr">12分钟前</i>
                            </p>
                            <b>我有毒</b>
                        </van-cell-group>
                        <span slot="right">删除</span>
                    </van-swipe-cell>
               </li>
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
    margin-top: 1rem;
   >ul{
       >li{
           padding: 10/50rem 10/50rem;
           border-bottom: .001rem solid #ccc;
            h3{
               line-height: 30/50rem;
               color:#000;
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
            p{
                line-height: 30/50rem;
                color:#999;
                display: flex;
                >span{
                    flex: 1;
                    display: inline-block;
                    height: 30/50rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    padding-right: 15/50rem;
                }
                >span{
                    display: inline-block;
                    width: 1.5rem;
                }
            }
            b{
                line-height: 30/50rem;
                color:#999;
            }
       }
   }
}
</style>

