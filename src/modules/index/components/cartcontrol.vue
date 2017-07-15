<style lang="stylus">
    .cartcontrol
        .cart_decrease
            color: rgb(48, 144, 232)
            font-size: 1.2em
        .cart_count
            padding: 0 .3em
            color:#888
        .cart_add
            color: rgb(48, 144, 232)
            font-size: 1.2em
        .specification
            background:rgb(48, 144, 232)
            color:#fff
            padding:.3em .5em
            border-radius:15px
            font-size:.8em

</style>
<template>
    <div class="cartcontrol">
        <!-- 减号 -->
        <span class="cart_decrease"><i class="fa fa-minus-circle" aria-hidden="true"></i></span>
        <!-- 数量 -->
        <span class="cart_count">1</span>
        <!-- 选规格 -->
        <span class="specification" @click="Choose" v-if="isChoose">选规格</span>
        <!-- 加号 -->
        <span class="cart_add" v-else><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
    </div>
</template>
<script type="text/javascript">
    export default{
        data() {
            return{
                isChoose: false
            };
        },
        methods: {
            Choose() {

            },
        },
    }
</script>