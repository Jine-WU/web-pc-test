<template>
    <div class="wy-search">
        <!--    3个以及3个以下    -->
        <div v-if="isMultiple">
            <div class="wy-search-row">
                <div v-for="item in colList" :key="item" class="wy-search-col">
                    <slot :name="item.key"></slot>
                </div>
                <div v-for="item in sNullList" :key="item"
                     :class="index === (sNullList.length - 1 ) ? 'wy-search-col-s' : 'wy-search-col'">
                    &nbsp;
                </div>
                <div :span="6" style="text-align: right" class="wy-search-col-s">
                    <slot name="btn"></slot>
                    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                    <el-button @click="reset">重置</el-button>
                    <span v-if="column.length > 3" @click="isMultiple = false" class="wy-word">
						展开 <i class="el-icon-arrow-down el-icon--right"></i>
					</span>
                </div>
            </div>
        </div>

        <!--    4个以及4个以上    -->
        <div v-else>
            <div v-for="row in rowList" :key="row" class="wy-search-row">
                <div v-for="(item, index) in row" :key="item"
                     :class="index === 3 ? 'wy-search-col-s' : 'wy-search-col'">
                    <slot :name="item.key"></slot>
                </div>
                <div v-if="row.length < 4">
                    <div v-for="(item, index) in mNullList"
                        :key="item"
                        :class="index === (mNullList.length - 1 ) ? 'wy-search-col-s' : 'wy-search-col'">
                        &nbsp;
                    </div>
                </div>
            </div>
            <el-row :gutter="20" class="wy-search-row">
                <el-col :span="24" style="text-align: right">
                    <slot name="btn"></slot>
                    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                    <el-button @click="reset">重置</el-button>
                    <span @click="isMultiple = true" class="wy-word">
					收起 <i class="el-icon-arrow-up el-icon--right"></i>
					</span>
                </el-col>
            </el-row>
        </div>
        <el-divider></el-divider>
    </div>
</template>

<script>
//@group 公共组件
//搜索组件
export default {
    name: 'SearchComponent',
    data() {
        return {
            isMultiple: true
        }
    },
    props: {
        // 搜索项
        column: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
        /**
         * @vuese
         * search
         * @arg
         * */
        search() {
            this.$emit('search')
        },
        reset() {
            this.$emit('reset')
        }
    },
    computed: {
        // 少于4个填空数组
        sNullList() {
            const list = []
            if (this.column.length < 4) {
                const num = 3 - this.column.length
                for (let i = 0; i < num; i++) {
                    list.push(i)
                }
            }
            return list
        },
        // 多于4个填空数组
        mNullList() {
            const list = []
            if (this.column.length >= 4) {
                let columnNum = this.column.length % 4
                columnNum = columnNum === 0 ? 4 : columnNum
                const num = 4 - columnNum
                for (let i = 0; i < num; i++) {
                    list.push(i)
                }
            }
            return list
        },
        colList() {
            let list = []
            if (this.column.length >= 4) {
                for (let i = 0; i < 3; i++) {
                    list.push(this.column[i])
                }
            }
            else {
                list = this.column
            }
            return list
        },
        rowList() {
            const list = []
            if (this.column.length >= 4) {
                for (let i = 0; i < this.column.length; i += 4) {
                    list.push(this.column.slice(i, i + 4))
                }
            }
            return list
        }
    }
}
</script>

<style scoped>
    .wy-search-row {
        margin-bottom: 26px;
        display: flex;
        align-items: center;
    }

    .wy-search-col {
        width: 198px;
        margin-right: 25px;
    }

    .wy-search-col-s {
        flex: 1;
    }
</style>
