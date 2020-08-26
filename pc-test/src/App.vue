<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="isRouterAlive"/>
        </keep-alive>
    </div>
</template>

<script>

//@group App
//App.vue组件
export default {
    name: 'App',
    computed: {
        // 是否缓存组件
        isRouterAlive() {
            return this.$route.meta.keepAlive
        }
    }
}
</script>

<style lang="scss">
    #app {
        height: 100%;
    }
</style>
