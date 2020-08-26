<template>
    <div class="info">
        <div class="info-title">{{title}}</div>
        <div class="info-center">
            <ul v-for="item in list" :key="item">
                <li v-for="value in item" :key="value.key">
                    <span :title="value.value" class="info-center-box" v-if="value.key">{{value.title}}：<span
                            class="info-center-value">{{value.value || '-'}}</span></span>
                    <span v-else>&nbsp;</span>
                </li>
            </ul>
            <div v-for="value in lineList" :key="value.key" class="info-center-line">
                 <span :title="value.value" class="info-center-box" v-if="value.key">{{value.title}}：<span
                         class="info-center-value">{{value.value || '-'}}</span></span>
            </div>
        </div>
    </div>
</template>

<script>
//@group 公共组件
//MemberInfo组件
export default {
    name: 'MemberInfo',
    props: {
        // 信息
        info: {
            type: Array,
            default: () => {
                return []
            }
        },
        // 标题
        title: {}
    },
    computed: {
        list() {
            const copyList = []
            this.info.forEach(item => {
                if (!item.line) {
                    copyList.push(item)
                }
            })
            const result = []
            for (let i = 0; i < copyList.length; i += 3) {
                result.push(copyList.slice(i, i + 3))
            }
            return result
        },
        lineList() {
            const copyList = []
            this.info.forEach(item => {
                if (item.line) {
                    copyList.push(item)
                }
            })
            return copyList
        }
    }
}
</script>

<style scoped lang="scss">
    .info {
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(220, 222, 227, 1);
        margin-top: 16px;

        .info-title {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            height: 52px;
            line-height: 52px;
            padding-left: 24px;
            border-bottom: 1px solid rgba(220, 222, 227, 1);
        }

        .info-center {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            padding: 8px 0;

            .info-center-line {
                margin-top: 16px;
                padding: 0 24px;
            }

            ul {
                display: flex;
                align-items: center;
                margin-top: 16px;
                padding: 0 24px;

                li {
                    flex: 1;
                    margin-right: 15px;

                    .info-center-box {
                        display: flex;
                        align-items: center;
                        width: 100%;
                    }

                    .info-center-value {
                        flex: 1;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
</style>
