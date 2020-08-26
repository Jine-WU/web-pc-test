<template>
  <div class="wrapper">
      <div class="right-content">
            <div class="my-loading" v-if="loadingMulSub">
                <my-loading></my-loading>
            </div>
            <div class="content-title">配置多个网点城市列表</div>
            <div class="select-city">
                <el-table
                    :data="mulSubData"
                    style="width: 100%;margin-bottom: 20px;"
                    row-key="id"
                    border
                    default-expand-all
                    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
                    <el-table-column
                    label="城市"
                    align="center"
                    width="90">
                        <template slot-scope="scope">
                            {{scope.row.citys.cityName}}
                        </template>
                    </el-table-column>
                    <el-table-column
                    label="网点信息">
                        <template slot-scope="scope">
                            <el-tag
                                v-for="(tag, index) in scope.row.subPartnerList"
                                :key="'tag' + index"
                                closable
                                type="info"
                                style="margin: 5px;"
                                @close="removeNetworkTag(scope.row.citys, tag)">
                                {{tag.subPartnerName}}
                            </el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
  </div>
</template>

<script>
import api from '@/api/api.js'
import MyLoading from '@/components/loading/loading.vue'
//@group 公共组件
//配置多个网点城市列表
export default {
    name: "MulSubConfig",
    components: {
        MyLoading
    },
    props: {
        // 营业部ID
        partnerId: {
            type: '',
            require: true
        },
        // 协议ID
        protocolId: {
            type: '',
            require: true
        }
    },
    data() {
        return {
            mulSubData: [],
            loadingMulSub: false
        }
    },
    watch: {},
    computed: {},
    methods: {
        /**
         * @vuese
         * getMultSubPartnerCityConfigs
         * @arg
         * */
        getMultSubPartnerCityConfigs() {
            this.loadingMulSub = true
            this.mulSubData = []
            const params = {
                partnerId: this.partnerId,
                protocolId: this.protocolId
            }
            api.queryMultSubPartnerCityConfigs(params).then(res => {
                this.loadingMulSub = false
                for (const key in res.returnCityMults) {
                    res.returnCityMults[key].forEach(item => {
                        this.mulSubData.push(item)
                    })
                }
            }).catch(err => {
                this.loadingMulSub = false
                this.$message({
                    type: 'error',
                    message: err.message
                })
            })
        },
        removeNetworkTag(row, tag) {
            const params = {
                id: tag.subPartnerAreaConfigId
            }
            api.delSubPartnerAreaConfigByKey(params).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功'
                })
                this.getMultSubPartnerCityConfigs()
            })
        }
    },
    created() {
        this.getMultSubPartnerCityConfigs()
    },
    mounted() {}
};
</script>
<style lang="scss" scoped>

        .left-content,
        .right-content {
            // border-radius: 20px;
            position: relative;
            // flex: 1;
            // width: 50%;
            // width: 600px;
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

        }
        .right-content {
            margin-left: 10px;
        }

            .my-loading {
                position: absolute;
                top: 200px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 999;
            }

::-webkit-scrollbar {
    width: 0;
}
</style>
