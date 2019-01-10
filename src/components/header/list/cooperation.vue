<template>
    <div class="info">
         <nav-bar title="商务合作"></nav-bar>
         <form class="main">
             <div class="input">
                 <span>您的姓名</span>
                 <input type="text">
             </div>
             <div class="input">
                 <span>您的公司</span>
                 <input type="text">
             </div>
             <div class="input">
                 <span>合同内容</span>
                 <textarea name="" id="" cols="30" rows="10">

                 </textarea>
             </div>
              <div class="input">
                 <span>联系方式&nbsp;/&nbsp;至少一项</span>
                 <input type="text" placeholder="QQ号">
                  <input type="text" placeholder="手机号">
                   <input type="text" placeholder="邮箱">
             </div>
             <button>
                 提交
             </button>
             
         </form>
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
    background-color: #FAFAFA;
    top: 46/50rem;
    left: 0;
    right: 0;
    bottom: 0;
    >.input{
        margin:  20/50rem 10/50rem 0;
        >span{
            line-height: 30/50rem;
            font-size: 18/50rem;
            color:#000;
        }
        >input{
            width: 100%;
            height: 1rem;
            background-color :#F7F7F7;
            margin-bottom: 10/50rem;
        }
        >textarea{
            width: 100%;
            height: 3rem;
             background-color :#F7F7F7;
        }
    }
    >button{
        display: block;
        background-color: #FE4C86;
        color:#fff;
        width: 60%;
        height: 1rem;
        border-radius: 20/50rem;
        margin: 10/50rem auto;
        font-size: 20/50rem;
    }
}
</style>

