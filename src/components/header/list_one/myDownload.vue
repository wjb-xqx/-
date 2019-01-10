<template>
    <div class="topic">
        <nav-bar title="我的下载"></nav-bar>
        <div class="main">
            <ul>
                <li>
                    长视频<span class="fr"><van-icon name="arrow" /></span>
                </li>
                <li>
                    短视频<span class="fr"><van-icon name="arrow" /></span>
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
    padding:  0 10/50rem;
    >ul{
        >li{
            line-height: 1rem;
            font-size: 16/50rem;
            border-bottom: .001rem solid #ccc;
        }
    }
}
</style>

