<style lang="stylus">
    .shop_wrapper
        width:100%
        .shop_header
            width:100%
            background: rgba(0,0,0,.7)
            color: #fff
            padding:3%
            box-sizing: border-box;
            .shop_detail
                display:flex
                margin-bottom:5px
                .shop_img
                    flex:1
                .shop_content
                    flex:3
                    padding-left:5px
                    &>p:nth-child(1)
                        font-size:1.2em
                        font-weight: 600
                        margin-bottom:2%
                    &>p:nth-child(2)
                         margin-bottom:2%
                    &>p:nth-child(3)
                        span
                            float:right
            .activity
                .notice
                    background:rgb(76, 217, 100)
                    padding:2px
                    border-radius:3px
        .change_show_type
            display:flex
            line-height: 45px
            border-bottom:1px solid #eee
            div
                flex:1
                text-align:center
                color:rgb(76, 76, 76)
                font-weight:600
            .activity_show
                color: #3190e8
                border-bottom: 2px solid #2196F3
                span
                    position: relative
        .foodWrap
            display:flex
            margin-bottom: 60px
            .food_menu
                flex:0 0 80px
                width:80px
                background: rgb(248, 248, 248)
                &>ul>li
                    line-height: 45px
                    border-bottom: 1px solid #eee
                    text-align: center
                    color:rgb(98, 98, 98)
                &>ul .menu_active
                    background: #fff;
                    border-left: 3px solid rgb(49, 144, 232)
                    font-weight: 600
            .food_list
                flex:1
                .food_list_title
                    line-height:45px
                    background: rgb(248, 248, 248)
                    font-size:1.5em
                    padding-left:10px
                &>ul>li
                    display:flex
                    padding: 3%
                    border-bottom: 1px solid #eee
                    .food_img
                        flex:1
                    .food_content
                        flex:3
                        padding-left: 8px
                        .food_name
                            font-weight:600
                            font-size:1.2em
                            padding-bottom:4px
                        .food_describe
                            color:#ccc
                            font-size:.8em
                        &>div:nth-child(3)
                            color:#888
                            letter-spacing: 1px;
                            padding: 4px 0
                        &>div:last-child
                            display:flex
                            position: relative;
                            p
                                color:#888
                                span
                                    color:rgb(255, 67, 26)
                            .cartcontrol_wrap
                                position: absolute
                                right: 0

</style>
<template>
    <div class="shop_wrapper">
        <!-- 商店头部区域开始 -->
        <header class="shop_header">
            <!-- shop_detail start -->
            <div class="shop_detail">
                <div class="shop_img"><img src="../../../assets/img/BSK.png"></div>
                <div class="shop_content">
                    <p>必胜客（新世界店）</p>
                    <p>商家配送 / 40分钟送达 / 配送费￥5</p>
                    <p>公告：欢迎光临，用餐高峰期请提前下单<span><i class="fa fa-angle-right" aria-hidden="true"></i></span></p>
                </div>
            </div>
            <!-- shop_detail End -->
            <!-- 活动详情 -->
            <div class="activity">
                <span class="notice">新</span>
                新用户下单立减20.0元(不与其他活动同享，APP专享) 6个活动
            </div>
            <!-- 活动详情 End -->
        </header>
        <!-- 商家头部区域结束 -->
        <!-- 商品和评价切换 -->
        <div class="change_show_type">
            <div :class='{activity_show: changeShowType =="food"}' @click="changeShowType='food'">
                <span>商品</span>
            </div>
            <div :class='{activity_show: changeShowType =="rating"}' @click="changeShowType='rating'">
                <span>评价</span>
            </div>
        </div>
        <!-- 商品：food滚动菜单选择列表开始-->
        <div class="foodWrap" v-show="changeShowType =='food'">
            <!-- 左侧菜单 -->
            <div class="food_menu">
                <ul>
                    <li class="menu_active">热销榜</li>
                    <li>优惠</li>
                    <li>尝鲜</li>
                    <li>意面</li>
                    <li>披萨</li>
                    <li>饭类</li>
                </ul>
            </div>
            <!-- 右侧食物列表 -->
            <div class="food_list">
                <div class="food_list_title">热销榜</div>
                <ul>
                    <li>
                        <div class="food_img"><img src="../../../assets/img/pizza.png" width="100%"></div>
                        <div class="food_content">
                            <div class="food_name">超级至尊披萨</div>
                            <div class="food_describe">腊肉香肠，火腿，牛肉配菠萝、蘑菇、洋葱、青椒等蔬菜水果，口口满足好滋味。</div>
                            <div>
                                <span>月销量94份</span>
                                <span>好评率85%</span>
                             </div>
                             <div>
                                 <p><span><span>￥</span>49</span> 起</p>
                                 <!-- 控制数量组件 -->
                                 <div class="cartcontrol_wrap"><cartcontrol></cartcontrol></div>
                             </div>
                        </div>
                    </li>
                    <li>
                        <div class="food_img"><img src="../../../assets/img/pizza.png" width="100%"></div>
                        <div class="food_content">
                            <div class="food_name">超级至尊披萨</div>
                            <div class="food_describe">腊肉香肠，火腿，牛肉配菠萝、蘑菇、洋葱、青椒等蔬菜水果，口口满足好滋味。</div>
                            <div>
                                <span>月销量94份</span>
                                <span>好评率85%</span>
                             </div>
                             <div>
                                 <p><span><span>￥</span>49</span>  起</p>
                                 <!-- 控制数量组件 -->
                                 <div class="cartcontrol_wrap"><cartcontrol></cartcontrol></div>
                             </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 评价：rating -->
        <div class="rating_container" v-show="changeShowType =='rating'">
            <!-- 综合评分情况 -->
            <div class="rating_case">
            </div>
            <!-- 评价内容分类 -->
            <div class="rating_classify"></div>
            <!-- 用户评价列表 -->
        </div>
        <!-- 头部公告提示弹框部分 -->
        <div class="notice"></div>
        <!-- 脚部购物车部分，只有在商品侧才会显示 -->
        <cart v-show="changeShowType =='food'"></cart>
        <!--  -->
    </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex';
    import api from '../api';
    import cartcontrol from '../components/cartcontrol.vue';
    import cart from '../components/footCart.vue';
    export default {
        data() {
            return {
                  changeShowType: 'food',
            };
        },
         computed: {
            ...mapGetters({
                // Index:'Index/Index'
            })
        },
        components: {
            cartcontrol,
            cart,
        }
    }

</script>
