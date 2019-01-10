<template>
    <div class="topic">
        <nav-bar title="我的话题"></nav-bar>
        <div class="main">
            暂无话题
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
}
</style>

