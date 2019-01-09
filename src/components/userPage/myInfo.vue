<template>
    <div class="info">
        <ul>
            <li>
                DD号：<span>6666666666</span>
            </li>
             <li>
               性别<span>你猜</span>
            </li>
             <li>
                年龄：<span>17</span>
            </li>
             <li>
                勋章<span></span>
            </li>
        </ul>
        <p>
            <span>分享个性名片</span>
            <span>查看勋章墙</span>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.info{
    padding: 10/50rem 30/50rem;
    >ul{
        li{
            line-height: 1.2rem;
            font-size: 18/50rem;
                border-bottom: 0.001rem solid #ccc;
            >span{
                color:#ccc;
            }
        }
    }
    >p{
        width: 100%;
        margin: 10/50rem 0;
        >span{
            display: block;
            float: left;
            width: 50%;
            height: 40/50rem;
            padding: 0 10/50rem;
            box-sizing: border-box;
            color:#fff;
            background: -webkit-linear-gradient(left, #BBB9F8 , #ED72CD);
            background: -o-linear-gradient(left, #BBB9F8, #ED72CD); 
            background: -moz-linear-gradient(left, #BBB9F8, #ED72CD); 
            background: linear-gradient(to left, #BBB9F8 , #ED72CD); 
            text-align: center;
            line-height: 40/50rem;
            font-size: 18/50rem;
            border-radius: 20/50rem;
            &:nth-child(2){
                background: #ED72CD;
            }
        }
    }
}
</style>

