<template>
  <div class="wrapper">
      <div class="left-content">
        <div class="content-title">未配置网点城市列表</div>
        <div class="select-city">
            <div v-if="loadingNoSub" class="my-loading">
                <my-loading></my-loading>
            </div>
            <el-table
                :data="noSubData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="cityCode"
                border
                default-expand-all
                :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
                <el-table-column
                label="省份和城市"
                width="150">
                    <template slot-scope="scope">
                        {{scope.row.cityName}}
                    </template>
                </el-table-column>
                <el-table-column
                label="网点配置"
                align="center" >
                    <template slot-scope="scope">
                        <el-select
                        v-model="scope.row.subPartnerId"
                        placeholder="请选择"
                        @change="changeNetwork(scope.row, scope.row.subPartnerId)"
                        clearable
                        filterable>
                            <el-option
                                v-for="item in subPartnerList"
                                :key="item.subPartnerId"
                                :label="item.subPartnerName"
                                :value="item.subPartnerId">
                            </el-option>
                        </el-select>
                    </template>

                </el-table-column>
                <el-table-column
                align="center"
                    label="操作"
                    width="80">
                    <template slot-scope="scope">
                        <el-button v-if="!scope.row.children" type="primary" @click.native.prevent="saveConfig(scope.$index, scope.row)" size="mini">保存</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

    </div>
  </div>
</template>

<script>
import MyLoading from '@/components/loading/loading.vue'
import api from '@/api/api'
import { addressListForSelect } from '@l/publicData.js'
//@group 公共组件
//未配置网点城市列表
export default {
    name: "NonSubConfig",
    components: {
        MyLoading
    },
    props: {
        // 营业部id
        partnerId: {
            type: '',
            require: true
        },
        // 协议id
        protocolId: {
            type: '',
            require: true
        }
    },
    data() {
        return {
            noSubData: [],
            subPartnerList: [],
            cityList: [],
            loadingNoSub: false
        }
    },
    watch: {},
    computed: {},
    methods: {
        /**
         * @vuese
         * 获取城市列表
         * @arg
         * */
        getCity() {
            addressListForSelect(0, list => {
                this.cityList = list
            })
        },

        getNoSubPartnerCityConfigs() {
            this.noSubData = []
            this.loadingNoSub = true
            const params = {
                partnerId: this.partnerId ||  "12081342544093184",
                protocolId: this.protocolId ||  "78415857448923136"
            }
            api.queryNoSubPartnerCityConfigs(params).then(res => {

                let cityName = ''
                for (const key in res.cityList) {
                    this.cityList.find(item => {
                        if (key + '0000' == item.code) {
                            cityName = item.name
                        }
                    })
                    this.noSubData.push({ cityCode: key + '0000', cityName: cityName, children: res.cityList[key], subPartnerList: res.subPartnerList })
                }
                this.subPartnerList = res.subPartnerList
                this.loadingNoSub = false
            })
        },
        close() {
            window.history.back(-1)
        },
        saveConfig(index, row) {
            // if(row.children) {
            //     row.children.forEach(item => {
            //         if(!item.cityCode || !item.subPartnerId) {
            //             return
            //         }
            //         this.save(item)
            //     })
            // } else {
            //     if(!row.subPartnerId) {
            //         this.$message({
            //             type:'info',
            //             message: '请选择对应网点'
            //         })
            //         return
            //     }
            //     this.save(row)

            // }
            // this.getNoSubPartnerCityConfigs()
            if (!row.subPartnerId) {
                this.$message({
                    type: 'info',
                    message: '请选择对应网点'
                })
                return
            }
            this.noSubData.forEach(item => {
                item.children.forEach((val, index) => {
                    if (val.cityCode === row.cityCode) {
                        item.children.splice(index, 1)
                    }
                })
            })
            this.save(row)
        },
        save(row) {
            const params = {
                partnerId: this.partnerId || "12081342544093184",
                subPartnerId: row.subPartnerId,
                cityCode: row.cityCode
            }
            api.saveSinglePartnerAreaConfig(params).then(() => {
                this.$message({
                    type: 'success',
                    message: '保存成功'
                })

            })
        },
        changeNetwork(row, value) {
            if (row.children && row.children.length > 0) {
                row.children.forEach(item => {
                    item.subPartnerId = value
                })
            }
            else {
                this.noSubData.forEach(item => {
                    item.children.forEach(val => {
                        if (val.cityCode === row.cityCode) {
                            item.subPartnerId = '312313'
                            item.subPartnerId = ''
                            val.subPartnerId = value
                        }
                    })
                })
                // row.subPartnerId = value
            }
        }
    },
    created() {
        this.getNoSubPartnerCityConfigs()
        this.getCity()
    }
};
</script>
<style lang="scss" scoped>
.wrapper{
    .left-content {
        // border-radius: 20px;
        position: relative;
        // width: 600px;
        // flex: 1;
        // width: 50%;
        // margin-top: 30px;
        // height: 800px;;
        overflow: scroll;
        // border: 1px solid #ccc;

        .content-title {
            width: 100%;
            text-align: center;
            margin: 10px 0;
        }
        .select-city {
            padding: 20px;
        }
        .confirmBtn {
            display: block;
            margin: 10px auto;
        }
        .my-loading {
            position: absolute;
            top: 200px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 999;
        }
    }
}
</style>
