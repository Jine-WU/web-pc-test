<template>
    <el-dialog id="dialogExport" title="导出确认" custom-class="wy-small-dialog" :visible.sync="dialogVisible" width="480px">
        <div class="wy-dialog-content-no">
            <template v-for="item in objName">
                <el-tag class="wy-tag" :key="item.label" effect="plain" v-if="item.value">{{item.label}}：{{item.value}}</el-tag>
            </template>
            <el-tag class="wy-tag" v-if="allFlag">导出所有</el-tag>
        </div>
        <div slot="footer" class="wy-dialog-footer">
            <div class="wy-dialog-footer-left">
                <span class="wy-word">数据量：共 {{total}} 条</span>
            </div>
            <div class="wy-dialog-footer-right">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="exportData">确 定</el-button>
            </div>
        </div>
    </el-dialog>
</template>

<script>
import api from '@/api/api'
//@group 渠道管理
// 业务员管理上传
export default {
    name: 'dialog-export',
    props: {
        // 查询数据
        queryObj: {
            type: Object,
            required: true
        },
        // 总条数
        total: {
            type: Number,
            default: 0
        },
        // 导出接口名
        apiName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            dialogVisible: false,
            objName: [],
            allFlag: false
        }
    },
    created() {
        this.dialogVisible = this.value
    },
    methods: {
        open(objName, allFlag) {
            this.objName = objName
            this.allFlag = allFlag
            this.dialogVisible = true
        },
        exportData() {
            api[this.apiName](this.queryObj)
            this.dialogVisible = false
        }
    }
}
</script>

<style lang="scss">
    #dialogExport {
        .el-dialog__footer {
            padding: 0;
        }
    }
</style>
