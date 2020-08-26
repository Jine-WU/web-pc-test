<template>
    <div class="index">
        <el-container style="height: 100%">
            <el-aside width="200px" style="height: 100%">
                <aside-menu/>
            </el-aside>
            <el-main>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import AsideMenu from './components/aside-menu'
    export default {
        name: 'index',
        components: {
            AsideMenu
        },
        props: {},
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
  .index {
    height: 100%;
  }
</style>
