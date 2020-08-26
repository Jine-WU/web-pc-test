<template>
    <div class="customer">
        <router-view />
    </div>
</template>

<script>
//@group 容器组件
//External
export default {
    name: 'Customer'
}
</script>

<style scoped lang="scss">
    .customer {
        height: 100%;
    }
</style>
