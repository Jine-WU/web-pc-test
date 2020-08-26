<template>
    <div class="page-header">
        <el-button @click="goBack">
            <i class="el-icon-back"></i>
            <!-- {{backTitle}} -->
        </el-button>
        <el-button style="margin-left: -1px" @click="refreshData">
            <i class="el-icon-refresh"></i>
            <!-- {{refreshTitle}} -->
        </el-button>
        <span class="page-title">
            {{title}}
        </span>
    </div>
</template>
<script>
//@group 公共组件
//头部组件
export default {
    name: 'PageHeader',
    inject: ['refurbish'], // 刷新页面
    props: {
        // 返回文字
        backTitle: {
            type: String,
            default: '返回'
        },
        // 刷新文字
        refreshTitle: {
            type: String,
            default: '刷新'
        },
        // 标题
        title: {
            type: String,
            default: '详情'
        },
        // 是否自己刷新
        refreshBySelf: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        /**
         * @vuese
         * 返回
         * @arg
         * */
        goBack() {
            const iframeName = this.$root.iframeName ? this.$root.iframeName : ''
            const removeIframe = () => {
                const data = {
                    removeTabFlag: true,
                    iframeName: this.$root.iframeName,
                    message: '关闭消息tab'
                }
                console.log('传输数据', data)
                window.top.postMessage(data, '*')
            }
            iframeName ? removeIframe() : this.$router.back(-1)
        },
        refreshData() {
            // this.refurbish()
            this.refreshBySelf ? this.$emit('refresh') : this.refurbish()
            // this.$route.meta.vue.refresh()
        }
    }
}
</script>
<style lang="scss" scoped>
    .page-header {
        box-sizing: border-box;
        height: 59px;
        margin: 0 15px 0;
        padding: 15px 10px 10px 0;
        /*margin-bottom: 15px;*/
        border-bottom: 1px solid $line-color;

        .page-title {
            box-sizing: border-box;
            display: inline-block;
            margin-left: 15px;
            font-size: 14px;
            border-left: 1px solid #ccc;
            padding: 5px 15px;
        }
    }

</style>
