<template>
    <div class="edition">
        <!-- 版区 -->
         <com-header editionTitle="true"></com-header>
         <router-view/>
         <com-footer></com-footer>
    </div>
</template>

<script>
import comHeader from '@/components/header/comHeader'
import comFooter from '@/components/footer';
export default {
    components:{
        comHeader,
        comFooter
    }
}
</script>

<style lang="less" scoped>
.edition{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:60/50rem;
}
</style>
