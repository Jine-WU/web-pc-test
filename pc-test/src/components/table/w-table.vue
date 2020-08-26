<!--公共表格 Created by LWJ on 2020/04/03-->
<template>
    <el-table
            stripe
            :data="tableData"
            @selection-change="handleSelectionChange"
            header-row-class-name="wy-table-head-class"
            row-class-name="wy-table-row-class"
            style="width: 100%;">
        <el-table-column
                v-if="idEdit"
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                type="index"
                label="序号"
                fixed="left"
                align="center"
                width="50">
        </el-table-column>
        <template v-for="item in column">
            <el-table-column
                    v-if="item.type === 'date'"
                    min-width="100"
                    :key="item.key"
                    :prop="item.key"
                    :label="item.label">
                <template slot-scope="scope">
                    <el-tooltip
                            class="item"
                            effect="dark"
                            :content="scope.row[item.key]"
                            placement="top-start">
                            <span class="one-row">
                                <i v-if="scope.row[item.key]" class="el-icon-time"></i> {{ scope.row[item.key] | formatDate}}
                            </span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column
                    v-else-if="item.type === 'time'"
                    min-width="100"
                    :key="item.key"
                    :prop="item.key"
                    :label="item.label">
                <template slot-scope="scope">
                    <el-tooltip
                            class="item"
                            effect="dark"
                            :content="scope.row[item.key]"
                            placement="top-start">
                            <span class="one-row">
                                <i v-if="scope.row[item.key]" class="el-icon-time"></i> {{ scope.row[item.key] | formatTime}}
                            </span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column
                    v-else-if="item.type === 'number'"
                    :key="item.key"
                    align="right"
                    :width="item.width"
                    :min-width="item.minWidth"
                    :prop="item.key"
                    :label="item.label">
                <template slot-scope="scope">
                    <span class="wy-table-number">
                        {{scope.row[item.key]}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column
                    v-else-if="item.type === 'price'"
                    :key="item.key"
                    align="right"
                    :width="item.width"
                    :min-width="item.minWidth"
                    :prop="item.key"
                    :label="item.label">
                <template slot-scope="scope">
                    <span class="price-red-bold">
                        {{scope.row[item.key]}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column
                    v-else-if="item.type === 'state'"
                    :key="item.key"
                    :fixed="item.fixed"
                    :prop="item.key"
                    :width="item.width"
                    :min-width="item.minWidth"
                    :label="item.label">
                <template slot-scope="scope">
                    <span>
                        <span :class="stateClass[item.state[scope.row[item.key]].class]"></span>
                       {{item.state[scope.row[item.key]].label}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column
                    v-else-if="item.type === 'copy'"
                    :key="item.key"
                    :fixed="item.fixed"
                    :prop="item.key"
                    :width="item.width"
                    :min-width="item.minWidth"
                    :label="item.label">
                <template slot-scope="scope">
                    <el-tooltip
                            class="item"
                            effect="dark"
                            :content="scope.row[item.key]"
                            placement="top-start">
                            <span class="one-row">
                                <i v-if="scope.row[item.key]" class="iconfont iconcopy" @click="copyText(scope.row[item.key])"></i> <span>{{scope.row[item.key]}}</span>
                            </span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column
                    v-else
                    :key="item.key"
                    :prop="item.key"
                    :fixed="item.fixed"
                    :width="item.width"
                    :min-width="item.minWidth"
                    :label="item.label">
                <template slot-scope="scope">
                    <el-tooltip
                            v-if="item.type !== 'slot'"
                            class="item"
                            effect="dark"
                            :content="scope.row[item.key]"
                            placement="top-start">
                            <span class="one-row">
                                {{scope.row[item.key]}}
                            </span>
                    </el-tooltip>
                    <slot v-else :name="item.key" :scope="{ row: scope.row, index: scope.$index }"></slot>
                </template>
            </el-table-column>
        </template>
        <el-table-column
                prop="fun"
                fixed="right"
                :width="funWidth"
                label="操作">
            <template slot-scope="scope">
                <slot name="fun" :scope="{ row: scope.row, index: scope.$index }"></slot>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { formatDate, formatTime } from 'woyun-base'

export default {
    name: 'WTable',
    props: {
        tableData: {},
        idEdit: {
            type: Boolean,
            default: false
        },
        column: {
            type: Array,
            default: () => {
                return []
            }
        },
        funWidth: {
            type: String,
            default: '100'
        }
    },
    data() {
        return {
            stateClass: ['wy-state-error', 'wy-state-success', 'wy-state-warning', 'wy-state-finish', 'wy-state-info', 'wy-state-other-1', 'wy-state-other-2', 'wy-state-other-3', 'wy-state-other-4']
        }
    },
    methods: {
        handleSelectionChange(e) {
            this.$emit('handleSelectionChange', e)
        },
        copyText(text) {
            let oInput = ''
            if (document.getElementById('copyInput')) {
                oInput = document.getElementById('copyInput')
            }
            else {
                oInput = document.createElement('input')
            }
            oInput.value = text
            oInput.id = 'copyInput'
            oInput.className = 'copy-input'
            document.body.appendChild(oInput)
            oInput.select() // 选择对象;
            document.execCommand('Copy') // 执行浏览器复制命令
            this.$message.success('复制成功')
        }
    },
    filters: {
        formatTime(time) {
            if (time) {
                return formatTime(time)
            }
            return ''
        },
        formatDate(time) {
            if (time) {
                return formatDate(time)
            }
            return ''
        }
    }
}
</script>

<style scoped lang="scss">
    .wy-table-number {
        font-weight: bold;
    }

    .iconcopy {
        cursor: pointer;
    }
</style>
