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

</style>
<template>
    <div class="shop_wrapper">
        <!-- 商店头部区域开始 -->
        <header class="shop_header">
            <!-- shop_detail start -->
            <div class="shop_detail">
                <div class="shop_img"><img src="../../../assets/img/preloader.png"></div>
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
        <!-- 滚动菜单选择列表开始-->
        <div class="foodWrap">
            <!-- 左侧菜单 -->
            <div class="menu">
                <ul>
                    <li>热销榜</li>
                </ul>
            </div>
            <!-- 右侧食物列表 -->
            <div class="foodList">
                <ul>
                    <li>
                        <div class="food_img"><img src="../../../assets/img/preloader.png" ></div>
                        <div class="food_content">
                            <div>浓情香鸡翼</div>
                            <div class="describe">以特选鸡翼经美味香料腌制烘烤而成，鲜嫩香滑，汁多入味。</div>
                            <div>
                                <span>月销量94份</span>
                                <span>好评率85%</span>
                             </div>
                             <div>
                                 <p><span><span>￥</span>49</span> 起</p>
                                 <!-- 控制数量组件 -->
                                 <div class="cartWrap"><cartcontrol></cartcontrol></div>
                             </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex';
    import api from '../api';
    import cartcontrol from '../components/cartcontrol.vue';
    export default {
        data() {
            return {};
        },
        components: {
            cartcontrol,
        }
    }

</script>
