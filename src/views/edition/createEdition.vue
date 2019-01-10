<template>
    <div class="cre clearfix">
        <nav-bar title="申请创建版区"></nav-bar> 
        <div class="main clearfix">
            <div class="text clearfix">
                <h3>庆认真略读一下规则</h3>
                <p>1.时刻才半年的私聊发那艘；vnisk;v聊发那艘；vnisk;nao;sivn</p>
                <p>2.时刻才半年的私聊发那艘；vnis聊发那艘；vnisk;k;vnao;sivn</p>
                <p>3.时刻才半年的私聊发那艘；vni聊发那艘；vnisk;sk;vnao;sivn</p>
                <p>4.时刻才半年的私聊发那艘；v聊发那艘；vnisk;nisk;vnao;sivn</p>
                <p>5.时刻才半年的私聊发那艘；聊发那艘；vnisk;vnisk;vnao;sivn</p>
            </div>
            <form class="content">
                <input type="text" placeholder="填写版区名称">
                <textarea placeholder="请填写申请理由" name="" id="" cols="16" rows="3"></textarea>
                <p>是哦的你哦皮肤hi安排发货奶瓶苏菲娜his发货呢欧式带你飞内外</p>
                <button>提交申请</button>
            </form>
        </div>
    </div>
</template>

<script>
import navBar from '@/components/navBar/navBar'
export default {
    name:'createEdition',
    components:{
        navBar
    }
}
</script>

<style lang="less" scoped>
.cre{
    background-color: #EFEFF1;
}
.main{
    margin-top: 1.2rem;
    >.text{
        padding: 10/20rem 20/50rem;
        background-color: #fff;
        h3{
            line-height: 40/50rem;
            font-size: 18/50rem;
        }
        p{
            font-size: 16/50rem;
            color:#D0D0D0;
            line-height: 20/50rem;
        }
    }
    >.content{
        background-color: #fff;
        margin-top: 10/50rem;
        font-size: 16/50rem;
        >input{
            line-height: 1rem;
            padding-left: 5/50rem;
            display: block;
            width: 96%;
            margin: 0 auto;
            border-bottom: .001rem solid #ccc;
        }
        >textarea{
            width: 100%;
            padding: 10/50rem;

        }
        >p{
            background-color: #EFEFF1;
            padding: 10/50rem 30/50rem;
            line-height: 20/50rem;
            color:#ABABAD;
        }
        >button{
            width: 80%;
            height: 50/50rem;
            color:#fff;
            display: block;
            margin: 30/50rem auto;
            font-size: 18/50rem;
            border-radius: 10/50rem;
            background-color: #FE4C86;
        }
    }
}
</style>

