<template>
    <div class="topic">
        <navbar title="我的话题"></navbar>
        <div class="main">
            暂无话题
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
}
</style>

