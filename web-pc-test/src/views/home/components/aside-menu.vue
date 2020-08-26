<template>
    <el-menu
        default-active="2"
        class="menu">
        <el-menu-item index="2">
            <span slot="title">会员信息查询</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'aside-menu',
        components: {},
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
    .menu {
      height: 100%;
    }
</style>
