<style lang="stylus">
    .footCart
        width:100%
        position:fixed
        bottom:0
        height:50px
        display:flex
        z-index: 1
        .cart_logo_wrap
            flex:3
            background:rgb(61, 61, 63)
            position: relative
            .logo
                position:absolute
                width:60px
                height:60px
                border-radius:50%
                bottom:5px
                left:15px
                background:rgb(61, 61, 63)
                .active_logo
                    background:rgb(49, 144, 232)
                div
                    width: 50px
                    height: 50px
                    background: rgb(83, 83, 86)
                    color:#fff
                    border-radius: 50%
                    position: absolute
                    left: 5px
                    top: 5px
                    text-align: center
                    line-height: 50px
                    font-size: 2em
            .desc
                width:65%
                float:right
                color:#fff
                &>p:first-child
                    font-size:1.5em
        .min_price
            flex:1.5
            background:rgb(83, 83, 86)
            color:#fff
            text-align: center
            line-height: 50px
        .go_pay
            background:rgb(76, 217, 100)
            flex:1.5
            color:#fff
            text-align: center
            line-height: 50px
            letter-spacing: 1px
            font-size:1.2em
        .cart_list
            width: 100%
            position: absolute
            top: 0
            left: 0
            height: 100%
    .cart_list
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        background: rgba(0,0,0,.6)
        .content_wrap
            background: #fff
            max-height: 40%
            bottom: 50px
            position: absolute
            width: 100%
            overflow: scroll
            .cart_list_head
                background:rgb(236, 239, 241)
                line-height: 40px
                font-size: 1.2em
                font-weight: 600
                padding: 0 5%
                color:#888
                &>span:nth-child(2)
                    float:right
            .list-content
                &>ul>li
                    display:flex
                    border-bottom: 1px solid #eee
                    line-height: 45px
                    padding: 0 5%
                    font-size: 1.2em
                    &>div:nth-child(1)
                        flex:3
                        &>span:last-child
                            float: right
                            color:rgb(255, 102, 0)
                            font-weight: 600
                    &>div:nth-child(2)
                        flex:1
                        text-align: right
</style>
<template>
    <div>
        <div class="footCart">
            <!-- 左侧购物车logo部分，点击可以出现购物车列表 -->
            <div class="cart_logo_wrap" @click="toggleCartList">
                <div class="logo ">
                    <div><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                </div>
                <div class="desc">
                    <p>￥20.00</p>
                    <p>配送费￥5.00</p>
                </div>
            </div>
            <!-- 右侧满足金额就出现去结算，不满则显示还差多少起送 -->
            <div class="go_pay" v-if="totalPrice > minPrice">去结算</div>
            <div class="min_price" v-else>还差￥20.00元起送</div>
        </div>
        <!-- 购物车列表，从下往上滑出 -->
            <div class="cart_list" v-show="listShow">
                <div class="content_wrap">
                    <div class="cart_list_head">
                        <span>购物车</span>
                        <span><i class="fa fa-trash-o" aria-hidden="true"></i> 清除</span>
                    </div>
                    <div class="list-content">
                        <ul>
                            <li>
                                <div>
                                    <span class="food_name">超级至尊披萨</span>
                                    <span class="food_pric">￥20.00</span>
                                </div>
                                <div><cartcontrol></cartcontrol></div>
                            </li>
                            <li>
                                <div>
                                    <span class="food_name">超级至尊披萨</span>
                                    <span class="food_pric">￥20.00</span>
                                </div>
                                <div><cartcontrol></cartcontrol></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>
<script type="text/javascript">
import cartcontrol from './cartcontrol.vue';
    export default{
        data() {
            return{
                listShow: false
            };
        },
        methods: {
            toggleCartList() {
                  this.listShow = !this.listShow;
            }
        },
        components: {
            cartcontrol,
        },
    }
</script>