<template>
    <div class="wy-header">
        <div v-if="IsMultiple">
            <div class="wy-header-more">
                <div class="wy-header-span" v-for="item in smallList" :key="item.key">
                    <label>{{item.label}}</label>
                    <slot :name="item.key"></slot>
                </div>
            </div>
            <el-row :gutter="20" class="wy-head-top">
                <el-col :span="24" style="text-align: right">
                    <el-button type="primary" size="mini" @click="search">
                        <i class="iconfont iconsearch1" style="font-size: 12px;margin-right: 3px"></i>
                        查询</el-button>
                    <el-button icon="el-icon-refresh" size="mini" @click="reset">重置</el-button>
                    <span @click="IsMultiple = false" class="wy-word" v-if="list.length > 3">
                            展开 <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                </el-col>
            </el-row>
        </div>
        <div v-else>
            <div class="wy-header-more">
                <div class="wy-header-span" v-for="item in list" :key="item.key">
                    <label>{{item.label}}</label>
                    <slot :name="item.key"></slot>
                </div>
            </div>
            <el-row class="wy-head-top" :gutter="20" style="text-align: right">
                <el-col :span="24">
                    <el-button type="primary" size="mini" @click="search">
                        <i class="iconfont iconsearch1" style="font-size: 12px;margin-right: 3px"></i>
                        查询</el-button>
                    <el-button size="mini" icon="el-icon-refresh" @click="reset">重置</el-button>
                    <span class="wy-word" @click="IsMultiple = true">
							收起 <i class="el-icon-arrow-up el-icon--right"></i>
						</span>
                </el-col>
            </el-row>
        </div>
        <el-divider></el-divider>
        <el-row :gutter="20" v-if="buttonList.length > 0">
            <el-col :span="24" style="text-align: right">
                <slot :name="item.key" v-for="item in buttonList"></slot>
            </el-col>
        </el-row>
    </div>
</template>

<script>
//@group 公共组件
//搜索组件-SearchComponents
export default {
    name: 'SearchComponents',
    props: {
        // 搜索项列表
        list: {
            type: Array,
            default: () => {
                return []
            }
        },
        // 按钮列表
        buttonList: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            IsMultiple: true
        }
    },
    computed: {
        smallList() {
            if (this.list.length < 4) {
                return this.list
            }
            else {
                const list = []
                for (let i = 0; i < 3; i++) {
                    list.push(this.list[i])
                }
                return list
            }
        }
    },
    methods: {
        /**
         * @vuese
         * 搜索
         * @arg
         * */
        search() {
            this.$emit('search')
        },
        reset() {
            this.$emit('reset')
        }
    }
}
</script>

<style scoped>

</style>
