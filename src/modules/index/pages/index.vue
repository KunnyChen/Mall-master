<style lang="stylus">
    .wrapper
       width:100%
      .banner
         width:100%
         display: flex
         margin: 3% 0
        .banner_item
            flex:1
            text-align: center
      .merchant
          padding:2% 3%
        .merchant_title
            border-bottom:1px solid #eee
            line-height: 2.5em
            color:#888
            span
                margin-right:5px
</style>
<template>
    <div  class="wrapper">
    <!-- banner滑动区域 -->
        <div class="banner">
            <div class="banner_item">
                <div class="banner_item_img"><img src="../../../assets/img/food01.png" alt=""></div>
                <div class="banner_item_text">下午茶</div>
            </div>
            <div class="banner_item">
                <div class="banner_item_img"><img src="../../../assets/img/food02.png" alt=""></div>
                <div class="banner_item_text">甜品</div>
            </div>
                <div class="banner_item">
                <div class="banner_item_img"><img src="../../../assets/img/food03.png" alt=""></div>
                <div class="banner_item_text">鲜果</div>
            </div>
                <div class="banner_item">
                <div class="banner_item_img"><img src="../../../assets/img/food04.png" alt=""></div>
                <div class="banner_item_text">外卖</div>
            </div>
        </div>
        <div class="banner">
            <div class="banner_item">
                <div class="banner_item_img"><img src="../../../assets/img/food01.png" alt=""></div>
                <div class="banner_item_text">下午茶</div>
            </div>
            <div class="banner_item">
                <div class="banner_item_img"><img src="../../../assets/img/food02.png" alt=""></div>
                <div class="banner_item_text">甜品</div>
            </div>
                <div class="banner_item">
                <div class="banner_item_img"><img src="../../../assets/img/food03.png" alt=""></div>
                <div class="banner_item_text">鲜果</div>
            </div>
                <div class="banner_item">
                <div class="banner_item_img"><img src="../../../assets/img/food04.png" alt=""></div>
                <div class="banner_item_text">外卖</div>
            </div>
        </div>
        <!-- 附近的商家列表 -->
        <div class="merchant">
            <div class="merchant_title"><span><i class="fa fa-shopping-basket" aria-hidden="true"></i></span>附近商家</div>
            <ul>
                <li class="merchant_list">
                    <div><img src="../../../assets/img/preloader.png"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript"></script>
