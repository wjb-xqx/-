<template>
    <van-nav-bar
         :title="title"
         left-arrow
         :right-text="rightText"
         @click-left="onClickLeft"
         fixed
    >
    </van-nav-bar>
</template>

<script>
export default {
  data(){
    return{
     
    }
  },
  props: {
      title: String,
      rightText:String
  },
  methods: {
    onClickLeft() {
        this.$router.go(-1);
    }
  }
}
</script>
<style lang="less" scoped>
   /deep/.van-icon-arrow-left,.van-icon-ellipsis{
       color:#F44F87;
       font-size: 28/50rem;
   }
   /deep/.van-nav-bar__title{
       font-size: 20/50rem;
        color:#000;
   }

   /deep/.van-nav-bar__text{
    font-size: 14/50rem;
    color:#7D7D7D;
}
</style>
