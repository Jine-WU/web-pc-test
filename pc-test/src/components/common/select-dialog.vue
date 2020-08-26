<template>
    <el-dialog :title="'选择' + title" :visible.sync="dialogTableVisible" @close="close" :append-to-body="appendToBody">
        <search-bar class="margin-bottom-15" :btnFlag="false">
            <template v-slot:body>
                <div>
                    <label>{{title}}名称：</label>
                    <el-input v-model="params.data.data.name" class="search-body-item"
                              :placeholder="'请输入' + title + '名称'"></el-input>
                    <el-button type="primary" size="mini" @click="search" style="margin-left: 10px">
                        搜索
                    </el-button>
                </div>
            </template>
        </search-bar>
        <el-table :data="gridData">
            <el-table-column property="name" :label="title + '名称'">
                <template slot-scope="scope">
                    <div class="cell" @click="click(scope.row)">
                        {{ scope.row.name }}
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                class="pager"
                style="margin-bottom: 10px"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="params.data.pageNum"
                :page-size="params.data.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="listTotal">
        </el-pagination>
    </el-dialog>
</template>

<script>
import api from '@/api/api'
import SearchBar from '@/components/search/search-bar'
//@group 公共组件
//选择弹窗组件
export default {
    name: 'SelectDialog',
    components: { SearchBar },
    model: {
        prop: 'dialogTableVisible',
        event: 'change'
    },
    data() {
        return {
            gridData: [],
            params: {
                extra: {
                    loading: false
                },
                data: {
                    pageSize: 10,
                    pageNum: 1,
                    data: {
                        name: ''
                    }
                }
            },
            listTotal: 0
        }
    },
    props: {
        // 是否内部弹窗
        appendToBody: {
            type: Boolean,
            default: false
        },
        // 弹窗是否显示
        dialogTableVisible: {
            type: Boolean,
            default: false
        },
        // 标题
        title: {},
        // 接口名称
        apiName: {}
    },
    created() {
        this.getList()
    },
    methods: {
        /**
         * @vuese
         * 获取列表
         * @arg
         * */
        getList() {
            api[this.apiName](this.params).then(res => {
                this.gridData = res.records
                this.listTotal = Number(res.total)
            }).catch(err => {
                this.$message({
                    message: err.message,
                    type: 'error'
                })
            })
        },

        handleSizeChange(num) {
            this.params.data.pageSize = num
            this.getList()
        },
        handleCurrentChange(num) {
            this.params.data.pageNum = num
            this.getList()
        },
        click(item) {
            this.$emit('sure', JSON.parse(JSON.stringify(item)))
        },
        search() {
            this.params.data.pageNum = 1
            this.params.data.pageSize = 10
            this.getList()
        },
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .cell {
        cursor: pointer;
    }

    .pager {
        margin-top: 10px;
    }
</style>
