<template>
    <div class="topic">
        <navbar title="我的下载"></navbar>
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
import navbar from '../../navbar/navbar'
export default {
    components:{
        navbar
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

