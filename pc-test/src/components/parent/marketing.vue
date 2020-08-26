<template>
    <div class="message">
        <router-view />
    </div>
</template>

<script>
//@group 容器组件
//Message
export default {
    name: 'Message'
}
</script>

<style scoped lang="scss">
    .message {
        height: 100%;
    }
</style>
