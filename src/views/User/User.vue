<template>
    <div class="use">
       <com-user-page></com-user-page>
        <com-footer></com-footer>
    </div>
</template>

<script>
import comFooter from '@/components/footer';
import comUserPage from '@/components/userPage/userPage';
export default {
    
     components:{
         comFooter,
         comUserPage
     }
}
</script>

<style>

</style>

