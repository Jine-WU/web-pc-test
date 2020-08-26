<template>
    <el-dialog id="insurance" :title="title" custom-class="wy-small-dialog" :visible.sync="dialogFormVisible" :before-close="cancelDialog" width="498px">
        <slot name="search"></slot>

    </el-dialog>
</template>

<script>
export default {
    name: 'dialog-select',
    props: {
        title: {
            type: String,
            default: '选择'
        }
    }
}
</script>

<style scoped>

</style>
