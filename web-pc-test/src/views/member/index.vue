<template>
    <div class="page">
        <div class="row-query">
            <el-row :gutter="20">
                <el-col :span="6" class="col">
                    <label class="label">姓名</label>
                    <el-input v-model="queryObj.name" size="mini" clearable placeholder="请输入"/>
                </el-col>
                <el-col :span="6" class="col">
                    <label class="label">电话</label>
                    <el-input v-model="queryObj.phone" size="mini" clearable placeholder="请输入"/>
                </el-col>
                <el-col :span="6" class="col">
                    <label class="label">性别</label>
                    <el-radio-group v-model="queryObj.sex" size="mini" style="margin-top: 5px">
                        <el-radio-button label="">全部</el-radio-button>
                        <el-radio-button label="男"></el-radio-button>
                        <el-radio-button label="女"></el-radio-button>
                    </el-radio-group>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" size="mini" @click="query">查询</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="row-select">
            已选择 {{selectTotal}} 项
            <el-button type="text" @click="selectEmpty">清空</el-button>
        </div>
        <el-table ref="table" :data="tableData" stripe
                  style="width: 100%"
                  @select-all="selectAll"
                  @select="selectSingle">
            <el-table-column fixed type="selection" width="55"></el-table-column>
            <el-table-column fixed prop="id" label="id" min-width="80"></el-table-column>
            <el-table-column fixed prop="name" label="姓名" min-width="120"></el-table-column>
            <el-table-column prop="phone" label="电话" min-width="150"></el-table-column>
            <el-table-column prop="sex" label="性别" width="80"></el-table-column>
            <el-table-column prop="hobby" label="爱好" min-width="150"></el-table-column>
            <el-table-column prop="prov" label="省份" min-width="120"></el-table-column>
            <el-table-column prop="city" label="城市" min-width="120"></el-table-column>
            <el-table-column prop="wechat" label="微信" min-width="120"></el-table-column>
            <el-table-column prop="qq" label="QQ" min-width="120"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="180">
                <template slot-scope="scope">
                    {{ new Date(scope.row.createTime)| dateFormat }}
                </template>
            </el-table-column>
        </el-table>
        <div class="row-pagination">
          <el-pagination class="pager"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageObj.current"
            :page-sizes="pageSizes"
            :page-size="pageObj.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="listTotal">
          </el-pagination>
        </div>
    </div>
</template>

<script>
    import api from '@/libs/api'
    import { pageMixin } from '@/libs/mixin'
    import { dateFormat } from '@/libs/filters'

    export default {
        name: 'index',
        mixins: [pageMixin],
        filters: {
            dateFormat
        },
        data() {
            return {
                queryObj: {
                    name: '',
                    phone: '',
                    sex: ''
                },
                listTotal: 0,
                tableData: [],
                selectTotal: 0
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.query()
            },
            query() {
                this.pageObj.current = 1
                this.getData()
            },
            getData() {
                let params = {}
                for (let key in this.queryObj) {
                    if (this.queryObj[key]) {
                        params[key] = this.queryObj[key]
                    }
                }
                params = Object.assign(params, this.pageObj)
                api.getMemberList(params).then(res => {
                    this.tableData = res.records
                    this.listTotal = Number(res.total)
                }).catch(err => {
                    console.error(err)
                })
            },
            selectAll(selection) {
                this.selectTotal = selection.length
            },
            selectSingle(selection) {
                this.selectTotal = selection.length
            },
            selectEmpty() {
                this.$refs.table.clearSelection()
            }
        }
    }
</script>

<style scoped lang="scss">
    .page {
        height: 100%;
        .row-query {
            margin-bottom: 15px;
            .col {
                line-height: 40px;
                display: flex;
            }
            .label {
                min-width: 45px;
                display: inline-block;
                margin-right: 5px;
            }
        }
        .row-select {
            height: 45px;
            line-height: 45px;
            background: #ecf5ff;
            font-size: 15px;
            font-weight: 500;
            padding: 0 15px;
            box-sizing: border-box;
            margin-bottom: 15px;
            border-radius: 10px;
        }
        .row-pagination {
            margin-top: 15px;
            text-align: right;
        }
    }
</style>
