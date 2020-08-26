<template>
    <div class="page-header">
        <div class="btn-back" @click="goBack">
            <slot name="back">
                <svg class="icon icon-back" aria-hidden="true">
                    <use xlink:href="#iconleft_Icon"></use>
                </svg>
                <span>返回</span>
            </slot>
        </div>
        <div class="btn-reload" @click="reload" v-if="!isNonReload">
            <svg class="icon icon-reload" aria-hidden="true">
                <use xlink:href="#iconreload"></use>
            </svg>
        </div>
        <div class="title">{{ type === 'self' ? selfTitle : title }}</div>
    </div>
</template>

<script>
export default {
    name: 'HeaderTitle',
    props: {
        // 组件类型，public表示项目公共组件，self表示页面内私有使用组件
        type: {
            type: String,
            default: 'public'
        },
        // 标题，当type设置为self时有效
        selfTitle: {
            type: String,
            default: '详情'
        },
        // 是否显示刷新按钮(默认显示)，当type设置为self时有效
        isReload: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        // 标题
        title() {
            let title = '详情'
            if (typeof this.$route.meta.title === 'string') {
                title = this.$route.meta.title
            }
            if (typeof this.$route.meta.title === 'object') {
                title = this.$route.meta.title[this.$route.query.pageType]
            }
            return title
        },
        // 是否执行组件自身返回方法
        isBackBySelf() {
            return  this.$route.meta.isBackBySelf
        },
        // 是否不需要刷新方法
        isNonReload() {
            return this.$route.meta.isNonReload
        }
    },
    methods: {
        // 返回
        goBack() {
            if (this.isBackBySelf || this.type === 'self') { // 组件自定义回退、组件自定义使用
                this.$bus.emit('back', this.$route.name)
            }
            else {
                if (window.self.frameElement) { // 判断当前窗口层级是否iframe节点
                    const list = window.self.backRouterList || []
                    this.$router.replace({
                        name: list[list.length - 1].name,
                        query: list[list.length - 1].query,
                        params: list[list.length - 1].params
                    })
                }
                else {
                    this.$router.back(-1)
                }
            }
        },
        // 刷新
        reload() {
            // 刷新页面方法，传输值：当前路由name值
            this.$bus.emit('reload', this.$route.name)
        }
    }
}
</script>

<style scoped lang="scss">
    .page-header {
        height: 40px;
        line-height: 40px;
        width: 100vw;
        box-sizing: border-box;
        padding-left: 24px;
        display: flex;
        align-items: center;
        /*position: fixed;*/
        /*top: 0;*/
        z-index: 300;
        background: #FFFFFF;
        .btn-back {
            background: #F2F3F7;
            height: 24px;
            line-height: 24px;
            border-radius:4px;
            padding: 0 8px;
            font-size: 12px;
            margin-right: 12px;
            font-weight: 500;
            cursor: pointer;
            .icon-back {
                width: 9px;
                height: 12.5px;
                vertical-align: -8%;
                margin-right: 3px;
                font-weight: 500;
            }
        }
        .btn-back:hover {
            background: #E2E4E8;
        }
        .btn-reload {
            background: #F2F3F7;
            height: 24px;
            line-height: 24px;
            border-radius:4px;
            padding: 0 6px;
            margin-right: 12px;
            cursor: pointer;
            .icon-reload {
                width: 11px;
                height: 12px;
            }
        }
        .btn-reload:hover {
            background: #E2E4E8;
        }
        .title {
            margin-left: 4px;
            font-size: 12px;
            font-weight: 500;
            color: #333333;
        }
    }
</style>
