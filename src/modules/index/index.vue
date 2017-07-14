<template>
    <div id="main" class="main pure-g">
        <!--  <transition name="fade" mode="out-in">
            <navHead />
        </transition> -->
        <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <router-view class="router sub-page" :key="key"></router-view>
        </transition>
        <!-- <transition name="fade" mode="out-in">
            <foot :current="1" />
        </transition> -->
        <!-- <gotop></gotop> -->
    </div>
</template>
<script lang="babel">
    import {
        mapGetters
    } from 'vuex';
    // import navHead from './components/head.vue';
    // import foot from './components/foot.vue';
    // import gotop from './components/gotop.vue';
    export default {
        data() {
                return {
                    "pageName": "",
                    "routerAnimate": false,
                    "enterAnimate": "", //页面进入动效
                    "leaveAnimate": "" //页面离开动效
                };
            },
            watch: {
                // 监听 $route 为店内页设置不同的过渡效果
                "$route" (to, from) {
                    const toDepth = to.path.split('/').length;
                    const fromDepth = from.path.split('/').length;
                    if (toDepth === 2) {
                        // this.$store.commit("setPageName", to.name);
                    }
                    //同一级页面无需设置过渡效果
                    if (toDepth === fromDepth) {
                        return;
                    }
                    this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
                    this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";
                    // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
                    if (toDepth === 3) {
                        this.leaveAnimate = "animated fadeOutRight";
                    }
                }
            },
            components: {},
            computed: {
                ...mapGetters({
                    // cartList: 'Cart/getCartList',
                    // cartInfos: 'Cart/getInfos'
                }),
                key() {
                    return this.$route.path.replace(/\//g, '_');
                },
            }
    };
</script>
