<style lang="stylus">
    .wrapper
       width:100%
      .banner
         width:100%
         display: flex
         margin: 5% 0
         flex-wrap: wrap
        .banner_item
            width:25%
            text-align: center
            .banner_item_text
                color:#888
                margin-bottom: 8px
      .merchant
          padding:2% 3%
          border-top:8px solid #eee
        .merchant_title
            border-bottom:1px solid #eee
            line-height: 2.5em
            color:#888
            span
                margin-right:5px
         .merchant>ul .merchant_list
             display: flex
             padding:2% 0
             border-bottom:1px solid #eee
             .merchant_list_img
                 flex:1
             .merchant_desc
                 flex:3
                 padding: 0 2%
                 .merchant_name
                     font-weight: 600
                     margin-bottom: 3%
                     .feature_tag
                         float: right
                         color: #ccc
                         border: 1px solid
                         border-radius: 2px
                         padding: 0 .2em
                     .brand
                         background:rgb(255, 212, 19)
                         padding: .2em
                         border-radius: 2px
                         margin-right: 2px;
                .star_graded
                    margin-bottom: 3%
                    position: relative
                    .sell
                        color:#888
                    .delivery_tag
                        color:rgb(43, 141, 232)
                        border:1px solid rgb(43, 141, 232)
                        border-radius: 2px
                        float: right
                        position: absolute
                        right: 0
                .delivery
                    position: relative
                    .delivery_fee
                        color:rgb(51, 51, 51)
                    .delivery_detail
                        color:#888
                        position:absolute
                        right:0
                        .delivery_time
                          color:rgb(43, 141, 232)
</style>
<template>
    <div  class="wrapper">
    <!-- banner滑动区域 -->
        <div class="banner" >
            <div class="banner_item" v-for="item in Index.banner">
                <div class="banner_item_img"><img :src="item.img" alt=""></div>
                <div class="banner_item_text">{{item.title}}</div>
            </div>
        </div>
        <!-- 附近的商家列表 -->
        <div class="merchant" @click="goTo('/shop')">
            <div class="merchant_title"><span><i class="fa fa-shopping-basket" aria-hidden="true"></i></span>附近商家</div>
            <ul>
                <li class="merchant_list">
                    <div class="merchant_list_img"><img src="../../../assets/img/preloader.png"></div>
                    <div class="merchant_desc">
                        <div class="merchant_name">
                            <span class="brand">品牌</span>
                            bigbang韩国炸鸡
                            <span class="feature_tag">票</span>
                        </div>
                        <div class="star_graded">
                            <span style="display: inline-block;"><star :score="grade"></star></span>
                            <span class="sell">月销售669单</span>
                            <span class="delivery_tag">蜂鸟专送</span>
                        </div>
                        <div class="delivery">
                            <span class="delivery_fee">￥0 起送 / 配送费￥8</span>
                            <span class="delivery_detail">1.87km / <span class="delivery_time">59分钟</span></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex';
    import api from '../api';
    import star from '../components/star.vue';
    export default{
        data() {
            return{
              grade:4.5,
            };
        },
        computed: {
            ...mapGetters({
                Index:'Index/Index'
            })
        },
        components: {
            star,
        },
        methods: {
            goTo(path, query) {
                this.$router.push({path: path, query });
            }
        },
        async mounted() {
            await this.$store.dispatch('Index/Index');
            await this.$nextTick();
            const path = this.$route.path;
            const scrollTop = ls.get(path) || 0;
            ls.remove(path);
            window.scrollTo(0, scrollTop);
        },
        beforeRouteLeave(to, from, next) {
            const scrollTop = document.body.scrollTop;
            const path = from.path;
            if (scrollTop) ls.set(path, scrollTop);
            else ls.remove(path);
            next();
            this._setDefault(this);
        },
        metaInfo() {
            var title = this.$store.state.title;
            if (title != ProjectConfig.app)
                title = ProjectConfig.app + '-' + title;
            return {
                title: title,
            };
        }
    }
</script>
