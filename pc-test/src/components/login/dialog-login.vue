<template>
    <el-dialog
            id="login"
            title="重新登录"
            :visible.sync="value"
            :show-close="false"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            width="468px">
        <div class="form-body">
            <div class="login-main-form" v-if="playFlag">
                <p class="body-title">重新登录</p>
                <div class="form-item">
                    <el-input
                            id="mobile"
                            :placeholder="!userNameFlag ? '账号' : ''"
                            autofocus
                            size="large"
                            v-model="playUserInfo.mobile"
                            @focus="userNameFlag = true"
                            @blur="mobileBlur"
                            @keyup.enter.native="getPartnerList">
                    </el-input>
                    <span class="tips-span">
                            <transition name="el-zoom-in-bottom">
                                <span v-show="true">账号</span>
                            </transition>
                        </span>
                </div>
                <div class="form-item select-item" v-if="sourceFlag">
                    <el-select v-model="agentPartnerId" placeholder="请选择营业部" @change="changeAgentPartnerId">
                        <el-option
                                v-for="item in agentPartnerList"
                                :key="item.partnerId"
                                :label="item.partnerName"
                                :value="item.partnerId">
                        </el-option>
                    </el-select>
                </div>
                <div class="form-item">
                    <el-input
                            id="playPassword"
                            :placeholder="!passwordFlag ? '密码' : ''"
                            :type="passwordShowFlag ? 'text' : 'password'"
                            size="large"
                            v-model="playUserInfo.password"
                            @focus="passwordFlag = true"
                            @blur="passwordFlag = false"
                            @keyup.enter.native="playLogin">
                        <i slot="suffix"
                           v-if="userInfo.password"
                           class="el-input__icon iconfont"
                           :class="[passwordShowFlag ? 'icon--not-see' : 'icon--can-see']"
                           style="cursor: pointer;font-size: 24px"
                           @click="passwordShowFlag = !passwordShowFlag">
                        </i>
                    </el-input>
                    <span class="tips-span">
                            <transition name="el-zoom-in-bottom">
                                <span v-show="passwordFlag">密码</span>
                            </transition>
                        </span>
                </div>
                <div class="tips-error">{{loginErrorMessage}}</div>
                <div class="btn-login" @click="playLogin">登 录</div>
            </div>
            <div class="login-main-form" v-else>
                <p class="body-title">重新登录</p>
                <div class="form-item">
                    <el-input
                            id="userName"
                            :placeholder="!userNameFlag ? '账号' : ''"
                            autofocus
                            size="large"
                            v-model="userInfo.userName"
                            @focus="userNameFlag = true"
                            @blur="userNameFlag = false"
                            @keyup.enter.native="login">
                    </el-input>
                    <span class="tips-span">
                            <transition name="el-zoom-in-bottom">
                                <span v-show="userNameFlag">账号</span>
                            </transition>
                        </span>
                </div>
                <div class="form-item">
                    <el-input
                            id="password"
                            :placeholder="!passwordFlag ? '密码' : ''"
                            :type="passwordShowFlag ? 'text' : 'password'"
                            size="large"
                            v-model="userInfo.password"
                            @focus="passwordFlag = true"
                            @blur="passwordFlag = false"
                            @keyup.enter.native="login">
                        <i slot="suffix"
                           v-if="userInfo.password"
                           class="el-input__icon iconfont"
                           :class="[passwordShowFlag ? 'icon--not-see' : 'icon--can-see']"
                           style="cursor: pointer;font-size: 24px"
                           @click="passwordShowFlag = !passwordShowFlag">
                        </i>
                    </el-input>
                    <span class="tips-span">
                            <transition name="el-zoom-in-bottom">
                                <span v-show="passwordFlag">密码</span>
                            </transition>
                        </span>
                </div>
                <div class="tips-error">{{loginErrorMessage}}</div>
                <div class="btn-login" @click="login">登 录</div>
            </div>
        </div>
        <vue-element-loading :active="isLoading" spinner="line-scale" color="#5D92C6" size="60"/>
    </el-dialog>
</template>

<script>
import api from '@/api/api'
import { saveUserInfo, saveApplicationInfo, saveRoleInfo, saveDictionaryInfo, getUserInfo } from '@/libs/userStorage'
//@group 公共组件
//弹窗loading组件
export default {
    name: 'DialogLogin',
    props: {
        // 内容
        value: {
            type: Boolean,
            default: false
        },
        // 如需切换报价员登录，default切换到play
        platform: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isLoading: false,
            userInfo: {
                userName: '',
                password: ''
            },
            playUserInfo: {
                mobile: '',
                password: '',
                source: ''
            },
            agentPartnerId: '',
            agentPartnerList: [],
            userNameFlag: false,
            sourceFlag: false,
            passwordFlag: false,
            passwordShowFlag: false,
            loginErrorMessage: '',
            channelCode: ''
        }
    },
    computed: {
        playFlag() { // 是否业务员报价环境
            if (window.top.location.host.indexOf('play') > -1) {
                return true
            }
            if (this.platform === 'play') {
                return true
            }
            return false
        }
    },

    mounted() {
        if (this.playFlag) {
            this.playUserInfo.mobile = getUserInfo().mobile
            this.getPartnerList()
        }
        else {
            this.userInfo.userName = getUserInfo().userName
        }
    },
    methods: {
        /**
         * @vuese
         * mobileBlur
         * @arg
         * */
        mobileBlur() {
            this.userNameFlag = false
            this.getPartnerList()
        },
        playLogin() {
            if (!this.playUserInfo.mobile) {
                this.$message({
                    message: '请输入账号',
                    type: 'warning'
                })
                return
            }
            if (!this.playUserInfo.source) {
                this.$message({
                    message: '请选择营业部',
                    type: 'warning'
                })
                return
            }
            if (!this.playUserInfo.password) {
                this.$message({
                    message: '请输入密码',
                    type: 'warning'
                })
                return
            }
            this.userNameFlag = false
            this.passwordFlag = false
            document.getElementById('mobile').blur()
            document.getElementById('playPassword').blur()
            const params = {
                data: this.playUserInfo,
                headers: { platform: this.channelCode }
            }
            this.isLoading = true
            api.agentLogin(params).then(res => {
                this.loginErrorMessage = ''
                this.savePlayMessage(res).then(() => {
                    this.isLoading = false
                    history.go(0)
                })
                console.log(res)
            }).catch(err => {
                this.isLoading = false
                this.loginErrorMessage = err.message
            })
        },
        login() {
            if (!this.userInfo.userName) {
                this.$message({
                    message: '请输入账号',
                    type: 'warning'
                })
                return
            }
            if (!this.userInfo.password) {
                this.$message({
                    message: '请输入密码',
                    type: 'warning'
                })
                return
            }
            this.userNameFlag = false
            this.passwordFlag = false
            document.getElementById('userName').blur()
            document.getElementById('password').blur()
            this.isLoading = true
            api.login(this.userInfo).then(res => {
                // 判断当前用户是否允许登录
                if (Number(res.USER.state) === 0) {
                    this.$alert('当前用户已被锁定，请联系管理员！', '提示', {
                        confirmButtonText: '确定',
                        type: 'warning'
                    }).then(() => {
                        return false
                    })
                    return
                }
                this.loginErrorMessage = ''
                this.saveMessage(res).then(() => {
                    // 跳转页面
                    this.isLoading = false
                    history.go(0)
                })
            }).catch(err => {
                this.isLoading = false
                this.loginErrorMessage = err.message
            })
        },
        // 选择营业部
        changeAgentPartnerId(val) {
            for (let i = 0, len = this.agentPartnerList.length; i < len; i++) {
                if (this.agentPartnerList[i].partnerId === val) {
                    this.playUserInfo.source = this.agentPartnerList[i].source
                    this.channelCode = this.agentPartnerList[i].channelCode
                }
            }
        },
        // 获取营业部
        getPartnerList() {
            if (!this.playUserInfo.mobile) {
                return
            }
            const params = {
                mobile: this.playUserInfo.mobile
            }
            api.getAgentPartnerByMobile(params).then(res => {
                if (res.length > 1) {
                    this.agentPartnerList = res
                    this.sourceFlag = true
                }
                else if (res.length === 1) {
                    this.playUserInfo.source = res[0].source
                    this.channelCode = res[0].channelCode
                    this.sourceFlag = false
                }

            })
        },
        // 保存登录信息(核心、企业)
        async saveMessage(res) {
            // 保存应用菜单信息
            saveApplicationInfo(res.APPLICATIONLIST)
            // 保存系统信息
            const ROLEObj = {
                id: res.USER.belongPlatform === 'PLATFORM' ? 1 : 2, // 核心平台为1，企业平台为2，报价平台为3
                name: '核心业务系统', // 核心为'核心业务系统'，企业为'营业部系统'
                BELONG_PLATFORM: res.USER.belongPlatform, // 平台类型
                PARTNER_ID: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.id : '', // 营业部id
                PARTNER_NAME: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.partnerName : '', // 营业部名称
                LEVEL: res.ROLE.level,
                token: res.ACCESS_TOKEN,
                applicationList: res.APPLICATIONLIST, // 应用菜单数据
                channelCode: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.channelCode : '',
                channelName: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.channelName : ''
            }
            saveRoleInfo(ROLEObj)
            // 保存用户信息
            const obj = {
                id: res.ROLE.id,
                partnerId: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.id : '',
                partnerName: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.partnerName : '',
                userId: res.USER.id,
                userName: res.USER.userName,
                realName: res.USER.realName,
                province: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.province : '',
                cityCode: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.city : '',
                cityName: '',
                token: res.ACCESS_TOKEN,
                rongToken: res.USER.rongToken,
                isLeader: '',
                mobile: res.USER_PARTNER_PRIVILEGE ? res.USER_PARTNER_PRIVILEGE.mobile : '',
                teamId: "",
                issueAuthoFlag: "",
                customerFlag: res.USER.customerFlag,
                imageUrl: res.imageUrl
            }
            console.log('user', obj)
            saveUserInfo(obj)
            let dictionaryData = {}
            await api.formatByGroupCode().then(res => {
                window.top.XFM_CACHES = res
                dictionaryData = res
            })
            await api.getConfigForName().then(res => {
                Object.assign(dictionaryData, res)
            })
            saveDictionaryInfo(dictionaryData)
        },
        // 业务员信息保存
        async savePlayMessage(res) {
            let applicationList = []

            const ROLEObj = {
                id: 3, // 核心平台为1，企业平台为2，报价平台为3
                name: '业务员系统', // 核心为'核心业务系统'，企业为'营业部系统'，报价员为'业务员系统'
                BELONG_PLATFORM: 'AGENT', // 平台类型
                PARTNER_ID: res.partnerId, // 营业部id
                PARTNER_NAME: res.partnerName, // 营业部名称
                LEVEL: '9',
                token: res.token,
                applicationList: applicationList, // 应用菜单数据
                channelCode: res.channelCode,
                channelName: res.channelName
            }
            saveRoleInfo(ROLEObj)

            const obj = {
                id: res.id,
                partnerId: res.partnerId,
                partnerName: res.partnerName,
                userId: res.mobile,
                userName: res.name,
                realName: res.name,
                province: '',
                cityCode: res.cityCode,
                cityName: res.cityName,
                token: res.ACCESS_TOKEN,
                rongToken: res.rongToken,
                isLeader: res.isLeader,
                isAdmin: res.isAdmin,
                mobile: res.mobile,
                teamId: res.teamId,
                issueAuthoFlag: res.issueAuthoFlag,
                customerFlag: false,
                imageUrl: ''
            }
            saveUserInfo(obj)

            const menuParams = {
                partnerId: res.partnerId,
                role: res.isLeader === 'Y' ? 1 : 0
            }
            await api.getAgentMenu(menuParams).then(res => {
                applicationList = this.sortApplicationList(res)
                saveApplicationInfo(applicationList)
                ROLEObj.applicationList = applicationList
                saveRoleInfo(ROLEObj)
            })
            let dictionaryData = {}
            await api.formatByGroupCode().then(res => {
                window.top.XFM_CACHES = res
                dictionaryData = res
            })
            await api.getConfigForName().then(res => {
                Object.assign(dictionaryData, res)
            })
            saveDictionaryInfo(dictionaryData)
        },
        // 报价员系统菜单信息
        sortApplicationList(list) {
            const sortList = []
            list.forEach(item => {
                const sortItem = {
                    code: '',
                    name: '',
                    menuList: []
                }
                sortItem.code = item.id
                sortItem.name = item.title
                item.children.forEach(element => { // 1
                    const sortItemMenuList = {
                        appCode: '',
                        id: '',
                        showName: '',
                        url: '',
                        childList: []
                    }
                    sortItemMenuList.appCode = sortItem.code
                    sortItemMenuList.id = element.id
                    sortItemMenuList.showName = element.title
                    sortItemMenuList.url = element.url
                    element.children.length > 0 && element.children.forEach(child => { // 2
                        const childItem = {
                            appCode: sortItem.code,
                            id: child.id,
                            showName: child.title,
                            url: child.url,
                            childList: []
                        }
                        child.children.length > 0 && child.children.forEach(son => { // 3
                            const sonItem = {
                                appCode: sortItem.code,
                                id: son.id,
                                showName: son.title,
                                url: son.url,
                                childList: []
                            }
                            childItem.childList.push(sonItem)
                        })
                        sortItemMenuList.childList.push(childItem)
                    })
                    sortItem.menuList.push(sortItemMenuList)
                })
                sortList.push(sortItem)
            })
            console.log('整理后', sortList)
            return sortList
        }
    }
}
</script>

<style scoped lang="scss">
    p {
        padding: 0;
        margin: 0;
    }
    .form-body {
        text-align: center;
        .login-main-form {
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            text-align: center;
            .body-title {
                margin-top: 18px;
                height: 25px;
                line-height: 25px;
                font-size:18px;
                color: #4A4A4A;
            }
            .form-item {
                margin-top: 18px;
                display: flex;
                flex-direction: column-reverse;
                text-align: left;
                width: 422px;
                .tips-span {
                    display: block;
                    line-height: 17px;
                    font-size:12px;
                    height: 17px;
                    color: #3D95FC;
                    opacity: 0.5;
                }
            }
            .select-item {
                margin-top: 35px;
            }
        }
        .tips-error {
            margin: 12px 137px 27px 124px;
            text-align: right;
            color: #F5222D;
            height: 17px;
            line-height: 17px;
            font-size: 12px;
            width: 422px;
        }
        .btn-login {
            width:422px;
            height:48px;
            line-height: 48px;
            font-size: 16px;
            background: #3D95FC;
            border-radius:4px;
            font-weight:bold;
            color: #ffffff;
            cursor: pointer;
            user-select: none;
        }
    }
</style>
<style lang="scss">
    #login .el-dialog {
        text-align: center;
        border-radius: 4px;
        .el-dialog__header {
            display: none;
            padding-bottom: 0;
            .el-dialog__title {
                font-size: 18px;
            }
        }
        .el-dialog__body {
            padding: 0 24px 18px;
        }
        .el-dialog__footer {
            text-align: center;
        }
    }
    #login .el-input__inner {
        border: none;
        border-bottom: 2px solid #E6E6E6;
        border-radius: 0;
        padding: 0;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #9B9B9B;
    }
    #login .el-input__inner:focus {
        border-bottom: 2px solid #3D95FC;
        /*border-image: linear-gradient(#00B2FF, #007AFF) 20 20;*/
    }
    #login .login-error {
        .el-input__inner {
            border-bottom: 2px solid #F5222D;
        }
    }
</style>
