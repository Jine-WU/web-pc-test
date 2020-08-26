import { isRepeatAPIPath } from 'woyun-base'
export const API = {
    // 保币相关
    // 营业部保币列表
    accountPartners: '/channel/account/pagePartners',
    accountAgents: '/channel/account/pageAgents',
    agentAccountDetails: '/channel/account/agentAccountDetails',
    // 提现审核
    channelOrderPageQuery: '/channel/order/pageQuery',
    // 提现审核详情
    withdrawalDetail: '/channel/order/getByKey',
    // 获取实名账户信息
    getCerInfo: '/channel/certification/getCerInfo',
    // 获取账户卡号信息
    cashAccount: '/channel/cashAccount/query',
    // 导出
    exportUserInfo: '/channel/order/withdrawal/exportUserInfo',
    // 提现审核（通过、打款成功）
    withdrawalThrough: '/channel/order/withdrawal/review',
    withdrawalEditorFlag: '/channel/order/withdrawal/editorFlag',
    // 账户审核相关
    // 账户审核列表（旧）
    accountAuditList: '/channel/cashAccount/pageQuery',
    // 账户审核列表（旧）
    accountList: '/channel/bankCard/pageQuery',
    // 账户审核详情
    getApplyInfo: '/channel/resAudit/getApplyInfo',
    // 更新实名信息列表
    getCertification: '/channel/certification/pageQueryCertification',
    // 更新账户信息
    updateBankCard: '/channel/bankCard/updateNotEmpty',
    // 营业部明细
    partnerCount: '/channel/PartnerWalletCount/pageQuery',
    // 营业部转账给业务员的记录
    channelWalletPartnerRecords: '/channel/wallet/partner/records',
    // 钱包相关
    // 营业部充值
    partnrRecharge: '/channel/wallet/recharge',
    // 营业部信息
    getPartnerWallet: '/channel/wallet/getPartnerWallet',
    // 获取业务员流水
    getWalletAgent: '/channel/agentWalletCount/pageQuery',
    // 获取业务员流水
    countTeamMoney: '/channel/agentWalletCount/countTeamMoney',
    // 获取业务员流水
    channelWalletIndex: '/channel/wallet/index',
    // 钱包业务员详情业务员账户信息
    walletRecycle: '/channel/agentWalletCount/getByKey',
    recycle: '/channel/wallet/recycle',
    refund: '/channel/wallet/refund',
    // 业务员详情业务员明细列表
    walletAgentDetailList: '/channel/wallet/logs',
    // 给业务员转账
    transferToAgent: '/channel/wallet/transfer',
    // 获取短信账户余额
    smsAccountOver: '/channel/sms',
    // 给营业部转账
    transferToPartner: '/channel/sms/rechargeBySys',
    // 充值短信账户余额接口，获取扫码链接
    rechargeCode: '/channel/sms/recharge',
    //给业务员转账
    smsTransferToAgent: '/channel/sms/transfer',
    //业务员模糊查询
    getAgentList: '/channel/agent/pageQueryForSimple',
    // 核心获取营业部给业务员转账记录
    parnerMainToAgentLog: '/channel/wallet/sys/record',
    // 短信账户明细
    log: '/channel/sms/logs',
    // 获取转账业务员列表
    pageQueryWallet: '/channel/wallett/pageQueryWallet',
    // 获取短信消费记录,群发短信记录
    expendLog: '/sysmanage/smsMessageLog/pageQuery',
    //上传图片
    uploadImgURL: '/dec-common/upload',
    // 获取摄像头列表
    clientPageQuery: '/client/eagleEyeInfo/pageQuery',
    // 新增、编辑
    clientSave: '/client/eagleEyeInfo/save',
    // 获取省市区
    addressQuery: '/sysmanage/address/query',
    //删除摄像头
    clientDeleteByKey: '/client/eagleEyeInfo/deleteByKey',
    getCityList: '/sysmanage/address/getProvinceAndCity', // 获取城市列表
    saveSelectedCity: '/channel/subPartnerAreaConfig/save', // 保存已选城市
    querySelectedCity: '/channel/subPartnerAreaConfig/query', // 获取已选城市
    queryNoSubPartnerCityConfigs: '/policy/insuredCityConfig/queryNoSubPartnerCityConfigs', // 获取未配置网点城市列表
    queryMultSubPartnerCityConfigs: '/policy/insuredCityConfig/queryMultSubPartnerCityConfigs', // 获取配置多个网点的城市列表
    saveSinglePartnerAreaConfig: '/channel/subPartnerAreaConfig/saveSingle', // 保存单个网点信息
    deletePartnerAreaConfig: '/channel/subPartnerAreaConfig/deleteByParams', // 删除网点信息
    delSubPartnerAreaConfigByKey: '/channel/subPartnerAreaConfig/deleteByKey', //根据id删除网点信息
    getNetWorkByPartner: '/channel/partner/getPartnerList', // 根据营业部选择网点
    getTeamListForDefinition: '/channel/team/pageQuery', // 团队定义列表
    addTeam: '/channel/team/save', // 新增团队
    getTeamDetail: '/channel/team/getByKey', // 获取团队详情
    deleteTeam: '/channel/team/deleteByKey', // 删除团队
    updateTeam: '/channel/team/update', // 修改团队信息
    getTeamListForBusiness: '/policy/policyReport/agentDetail/teamSummary', // 团队业务列表
    queryAgentCount: '/policy/policyReport/agent/queryAgentCount', // 团队下人数数据
    getAgentListForTeam: '/policy/policyReport/agentDetail/pageQuery', // 团队成员列表
    queryPremCount: '/policy/policyReport/agentDetail/queryPremCount', // 团队下保费数据
    getPremListForTeam: '/policy/policyReport/policyDetail/pageQueryByDate', // 团队保费列表
    queryPolicyCount: '/policy/policyReport/policyDetail/queryPolicyCount', // 团队下出单量数据
    getPolicyListForTeam: '/policy/policyReport/agentDetail/pageQueryByDate', // 团队成员出单量
    getSalesmanList: '/channel/agent/pageQuery', // 业务员列表
    getSalesmanListByNew: '/channel/agent/pageSearch', // 业务员列表筛选新接口（游标模式）
    exportSalesmanList: 'channel/agent/exportSearchAgentDetailExcel', // 导出业务员
    exportAgentData: '/channel/agent/exportAgentDetailExcel', // 导出Excel
    exportAgentBankInfo: '/channel/agent/export', // 导出提现账户信息
    resetAgentPwd: '/channel/agent/resetPassword', // 重置业务员密码
    delAgent: '/channel/agent/deleteByKey', // 删除业务员
    addAgent: '/channel/agent/saveAgentByDefaultPassword', // 新增业务员
    getAgentMessage: '/channel/agent/queryByKey', // 获取业务员信息
    getRecomUrl: '/dec-common/recomUrlInfo/query', // 获取业务员推广链接
    getWithdrawal: '/channel/account/withdrawal/support', // 获取业务员保币提现方式
    updateAgent: '/channel/agent/update', // 更新业务员信息
    channelCertificationModification: '/channel/certification/modification', // 编辑保币提现账户实名信息
    agentSummary: '/policy/policyReport/agentDetail/agentSummary', // 业务员推荐
    getPartnerList: '/channel/partner/query', // 营业部列表
    getPartnerInfo: '/channel/partner/getByKey', // 营业部信息
    getNetWorkList: '/channel/partner/pageQuery', // 获取营业部网点列表
    getChannelList: '/channel/channel/query', // 获取渠道选项
    createPartner: '/channel/partner/save', // 新增营业部&网点
    updatePartner: '/channel/partner/update', // 修改营业部&网点
    deletePartner: '/channel/partner/deleteByKey', // 删除
    insComProtocolOfCarList: '/policy/protocol/queryInsComProtocolOfCarList', // 保险公司及协议
    saveInsuredCItyConfig: '/policy/insuredCityConfig/saveInsuredCItyConfig', // 保存营业部保险公司协议下投保城市
    queryChannel: '/channel/channel/pageQuery', // 获取营业部渠道管理
    saveChannel: '/channel/channel/save', // 保存营业部渠道管理信息
    updateNotEmptyChannel: '/channel/channel/updateNotEmpty', // 编辑营业部渠道信息管理
    deleteByKeyChannel: '/channel/channel/deleteByKey', // 删除营业部渠道信息
    decCommonPlatformConfigGetConfig: '/dec-common/platformConfig/getConfig', // 获取客户跟进状态列表
    decCommonPlatformConfigSaveConfig: '/dec-common/platformConfig/saveConfig', // 保存客户跟进状态
    pageQueryClient: '/quote/clientManage/pageQueryClient', // 获取客户列表
    getExportModelList: '/policy/exportMatchModel/getExportModelPageQuery', // 导出模版列表
    getExportHeaderModel: '/policy/exportHeaderModel/query', // 查询导出表头模板
    saveExportMatchModel: '/policy/exportMatchModel/saveMatchModel', // 保存的导出表头对应关系
    getCurExportModel: '/policy/exportMatchModel/query', // 获取对应模板内容
    deleteByModelId: '/policy/exportMatchModel/deleteByModelId', // 删除模板信息
    queryCustomConfig: '/dec-common/platformConfig/pageQuery',
    // 获取报价渠道定义列表
    queryChannelDelimit: '/dec-common/insurerChannel/pageQuery',
    // 新增报价渠道
    saveChannelDelimit: '/dec-common/insurerChannel/save',
    // 获取报价续保渠道配置
    queryCityConfig: '/dec-common/cityConfig/pageQuery',
    // 获取续保渠道列表
    queryChannelList: '/dec-common/insurerChannel/query',
    // 新增/更新报价渠道
    saveCityConfig: '/dec-common/cityConfig/save',
    // 获取车险报价渠道明细列表
    queryChannelLogs: '/dec-common/insurerChannelConfig/pageQuery',
    // 新增车险报价渠道配置
    saveChannelConfig: '/dec-common/insurerChannelConfig/save',
    // 删除车险报价渠道配置
    delChannelConfig: '/dec-common/insurerChannelConfig/deleteByKey',
    // 修改车险报价渠道配置
    updateChannelConfig: '/dec-common/insurerChannelConfig/update',
    queryInsuredCityConfigListByInsCom: '/policy/insuredCityConfig/queryInsuredCityConfigListByInsCom', // 获取营业部网点所勾选的城市
    // 操作日志列表
    sysOperateLogPageQuery: '/sysmanage/sysOperateLog/pageQuery',
    // 登录日志列表
    sysLoginLogPageQuery: '/sysmanage/sysLoginLog/pageQuery',
    getModuleList: '/sysmanage/menuConfig/queryInfoByPartnerId',
    getMenuInfo: '/sysmanage/menuConfig/queryInfo',
    saveMenuInfo: '/sysmanage/menuConfig/save',
    delMenuByKey: '/sysmanage/menuConfig/deleteByKey',
    updateMenu: '/sysmanage/menuConfig/update',
    copyMenu: '/sysmanage/menuConfig/copy',
    addModule: '/sysmanage/menuConfig/updateMenu',
    bannerMenuQuery: '/sysmanage/menuConfig/query',
    updateSort: '/sysmanage/menuConfig/updateSort',
    getInformationList: '/sysmanage/informationArticle/pageQuerys',
    getInformationDetail: '/sysmanage/informationArticle/getByKey',
    updateInformation: '/sysmanage/informationArticle/updateNotEmpty',
    delInformation: '/sysmanage/informationArticle/deleteByKey',
    saveInformation: '/sysmanage/informationArticle/save',
    examineInformation: '/sysmanage/informationArticle/check',
    getTagList: '/product/productTag/listTag', // 标签列表
    saveTag: '/product/productTag/saveTag', // 保存标签
    deleteTag: '/product/productTag/deleteTag', // 删除标签
    editTag: '/product/productTag/editTag', // 编辑标签
    setupTag: '/product/productTag/tagProduct', // 产品打标签
    unTagProduct: '/product/productTag/unTagProduct', // 取消产品标签
    getProductList: '/product/product/pageQuery', // 产品列表
    getInsuranceCompanyList: '/product/insCom/query', // 保险公司总公司列表
    getProductDetail: '/product/product/getByKey', // 产品详情
    getProductTag: '/product/productTag/getProductTag', // 产品标签
    tagCommodityList: '/product/commodity/getTagCommodityList', // 根据标签获取产品列表
    setProductTagWeight: '/product/productTag/setProductTagWeight', //设置产品在标签内的权重
    getProductListByPartner: '/product/commodity/partner/pageQuery', // 营业部产品列表
    getPartnerDetail: '/product/commodity/partner/detail', //营业部商品配置详情
    promoteConfigProducts: '/product/productPromote/promoteConfigProducts', //查询可设置的推荐产品
    productPromoteSaveBatch: '/product/productPromote/saveBatch', // 添加推荐产品
    productPromoteList: '/product/productPromote/productPromoteList', // 查推荐的产品信息
    productPromoteDeleteByKey: '/product/productPromote/deleteByKey', //删除推荐产品
    // 商品配置分页查询
    pageQuery: '/product/commodity/pageQuery',
    // 操作接口 删除，下架，上架
    commodityOperation: '/product/commodity/state',
    // 营业部操作接口 删除，下架，上架
    partnerCommodityOperation: '/product/commodity/partner/state',
    login: '/sysmanage/userLogin', // 登录(整合核心&企业)
    agentLogin: '/channel/agent/login', // 报价系统登录
    getAgentPartnerByMobile: '/channel/agent/getAgentPartnerByMobile', // 获取业务员营业部渠道接口
    getAgentMenu: '/dec-common/agentMenuConfig/getAgentMenu', // 获取报价员应用菜单数据
    formatByGroupCode: '/sysmanage/commonCode/formatByGroupCode', // 获取字典数据
    getConfigForName: '/dec-common/platformConfig/getConfigForName', // 获取平台自定义字典信息
    teamListForSelect: '/channel/team/query', // 团队列表
    selectProductShareClick: '/product/productShareClick/selectProductShareClick', // 线上产品点击统计列表
    getByTypePartnerList: '/channel/partner/getByType', // 获取营业部列表
    sifnInRewardJournal: '/marketing/sifnInRewardJournal/pageQuery', // 获取签到日志
    queryAgentReport: '/reportcenter/agentReport/pageQueryByAgent', // 业务员数据明细报表
    queryAllCount: '/reportcenter/agentReport/queryAllCount', // 获取导出的数量
    exportAgentDetailReportExcel: '/reportcenter/agentReport/exportAgentDetailReportExcel', // 导出数据
    productShareClickDetail: '/product/productShareClick/pageQuery', // 数据点击报表详情
    roleList: '/sysmanage/role/pageQuery', // 角色列表
    getRoleInfo: '/sysmanage/role/getByKey', // 获取角色详情
    createRole: '/sysmanage/role/save', // 新建角色
    updateRole: '/sysmanage/role/update', // 修改角色
    deleteRole: '/sysmanage/role/deleteByKey', // 删除角色
    getPowerByRole: '/sysmanage/application/queryByRole', // 获取角色权限列表
    updatePowerByRole: '/sysmanage/privilege/saveRolePrivilege', // 更新角色权限
    getLowerRole: '/sysmanage/role/getLowerRole', // 下拉框角色列表
    userList: '/sysmanage/user/pageQuery', // 系统成员列表
    getUserInfo: '/sysmanage/user/getByKey', // 获取系统成员详情
    createUser: '/sysmanage/user/save', // 新增系统成员
    updateUser: '/sysmanage/user/update', // 修改系统成员
    deleteUser: '/sysmanage/user/deleteByKey', // 删除系统成员
    resetUserPwd: '/sysmanage/user/resetUserPwd', // 重置密码
    queryUserDataPermissionByUser: '/sysmanage/userDataScope/queryUserDataPermissionByUser/', // 查询用户所有数据权限（链接后面跟上userId）
    saveUserDataPermission: '/sysmanage/userDataScope/saveUserDataPermission', // 保存用户权限
    applicationManage: '/sysmanage/application/pageQuery', // 应用管理列表
    commonCodeDictionary: '/sysmanage/commonCode/pageQuery', // 数据字典列表
    urlWhiteList: '/sysmanage/urlWhiteList/pageQuery', // 链接白名单列表
    saveUrlWhiteList: '/sysmanage/urlWhiteList/save', // 添加链接白名单
    updateUrlWhiteList: '/sysmanage/urlWhiteList/update', // 更新链接白名单
    delUrlWhiteList: '/sysmanage/urlWhiteList/deleteByKey', // 删除链接白名单
    devicePage: '/dec-common/device/page', // app版本控制列表
    deviceSave: '/dec-common/device/save', // 新增及修改app版本控制列表
    versionPage: '/dec-common/device/version/page', // app版本信息列表
    versionpublish: '/dec-common/device/version/publish', // app版本发布
    //app新增修改
    versionsave: '/dec-common/device/version/save', // 新增及修改app版本信息列表
    // 消息中心-发送消息
    sendLocalMessage: '/wld-message-v2/message/sendLocalMessage',
    // 设备-品牌信息列表
    getListBrand: '/wld-v2/policy/brand/listBrand',
    // 设备-品牌信息新增
    addBrand: '/wld-v2/policy/brand/addBrand',
    // 设备-品牌信息删除
    deleteBrand: '/wld-v2/policy/brand/deleteBrand',
    // 设备-品牌信息修改
    updateBrand: '/wld-v2/policy/brand/updateBrand',
    // 设备-品牌信息能否删除
    brandCanDelete: '/wld-v2/policy/brand/canDelete',
    // 设备-渠道信息列表
    getListChannel: '/wld-v2/policy/channel/listChannel',
    // 设备-渠道信息删除
    deleteChannel: '/wld-v2/policy/channel/deleteChannel',
    // 设备-渠道信息新增
    addChannel: '/wld-v2/policy/channel/addChannel',
    // 设备-渠道信息修改
    updateChannel: '/wld-v2/policy/channel/updateChannel',
    // 设备-渠道信息能否删除
    channelCanDelete: '/wld-v2/policy/channel/canDelete',
    // 设备-系列信息新增
    addSeries: '/wld-v2/policy/series/addSeries',
    // 设备-系列信息删除
    deleteSeries: '/wld-v2/policy/series/deleteSeries',
    // 设备-系列信息列表
    getListSeries: '/wld-v2/policy/series/listSeries',
    // 设备-系列信息修改
    updateSeries: '/wld-v2/policy/series/updateSeries',
    // 设备-系列信息能否删除
    seriesCanDelete: '/wld-v2/policy/series/canDelete',
    // 设备-款式信息新增
    addStyle: '/wld-v2/policy/style/addStyle',
    // 设备-款式信息删除
    deleteStyle: '/wld-v2/policy/style/deleteStyle',
    // 设备-款式信息列表
    getListStyle: '/wld-v2/policy/style/listStyle',
    // 设备-款式信息修改
    updateStyle: '/wld-v2/policy/style/updateStyle',
    // 设备-款式信息能否删除
    styleCanDelete: '/wld-v2/policy/style/canDelete',
    // 设备-固件新增
    addOta: '/wld-v2/addOta',
    // 设备-固件删除
    deleteOta: '/wld-v2/deleteOta',
    // 设备-固件修改
    editOta: '/wld-v2/editOta',
    // 设备-固件获取
    getOta: '/wld-v2/getOta',
    // 设备-固件列表
    listOta: '/wld-v2/listOta',
    // 设备-应用信息新增
    addApplication: '/wld-v2/policy/apply/addApply',
    // 设备-应用信息删除
    deleteApplication: '/wld-v2/policy/apply/deleteApply',
    // 设备-应用信息列表
    getListApplication: '/wld-v2/policy/apply/listApply',
    // 设备-应用信息修改
    updateApplication: '/wld-v2/policy/apply/updateApply',
    // 设备-应用信息能否删除
    applicationCanDelete: '/wld-v2/policy/apply/canDelete',
    // 设备-设备信息新增
    addGoods: '/wld-v2/policy/goods/addGoods',
    // 设备-设备信息删除
    deleteGoods: '/wld-v2/policy/goods/deleteGoods',
    // 设备-设备信息列表
    getListGoods: '/wld-v2/policy/goods/listGoods',
    // 设备-设备信息修改
    updateGoods: '/wld-v2/policy/goods/updateGoods',
    // 设备-设备信息能否删除
    goodsCanDelete: '/wld-v2/policy/goods/canDelete',
    // 设备-应用款式信息新增
    addApplyStyle: '/wld-v2/policy/applyStyle/addApplyStyle',
    // 设备-应用款式信息删除
    deleteApplyStyle: '/wld-v2/policy/applyStyle/deleteApplyStyle',
    // 设备-应用款式信息列表
    getListApplyStyle: '/wld-v2/policy/applyStyle/listApplyStyle',
    // 设备-应用款式信息修改
    updateApplyStyle: '/wld-v2/policy/applyStyle/updateApplyStyle',
    // 设备-应用款式信息能否删除
    applyStyleCanDelete: '/wld-v2/policy/applyStyle/canDelete',
    marketingByApplication: { // app营销推送接口
        getApplicationPushList: '/marketing-config/messageExamRecord/pageQueryPushTheList', // 应用推送记录列表
        getApplicationPushInfo: '/marketing-config/messageExamRecord/getExamRecordInfoById', // 应用推送记录详情
        createPushByApplication: '/marketing-config/messageExamRecord/createPush', // 创建推送&暂存
        deletePushByApplication: '/marketing-config/messageExamRecord/deleteByExamRecordId', // 根据id删除
        updateExamPushByApplication: '/marketing-config/messageExamRecord/updateExamRecord', // 更新审核状态
        updatePushOnOffByRecordIdByApplication: '/marketing-config/messageExamRecord/updatePushOnOffById', // 根据记录id更新推送状态，1/4/5
        editRecordByApplication: '/marketing-config/messageExamRecord/editRecord', // 编辑内容
        submitEditRecordByApplication: '/marketing-config/messageExamRecord/submitEditRecord',
        creatShortLink: '/wld-v2/url/creatShortLink', // 推送内容链接生成短链
        partnerByApply: '/wld-v2/policy/channel/getAllPartnerId', // 请求应用下营业部
        getTimeDicList: '/marketing-config/factorDict/query' // 定时推送字典
    },
    passivePushByApplication: {
        getPassivePushList: '/marketing-config/messagePushExamRecord/pageQueryPushTheList', // 被动推送列表
        createPassivePushTask: '/marketing-config/messagePushExamRecord/createPush', // 创建被动推送
        getPassivePushInfo: '/marketing-config/messagePushExamRecord/getExamRecordInfoById', // 获取推送详情
        updatePassivePushTask: '/marketing-config/messagePushExamRecord/editRecord', // 修改信息
        importAgentByPassive: '/marketing-config/messagePushExamRecord/importAgentInfo', // 导入用户
        downloadErrorDataByPassive: 'marketing-config/messagePushExamRecord/downloadErrorData', // 下载失败数据
        messagePreviewByPassive: '/marketing-config/messagePushExamRecord/messagePreview' // 推送预览
    },
    // 会保险资讯配置相关
    information: {
        // 渠道
        getPolicyArea: '/sysmanage/informationChannel/pageQuery',
        getPolicyAreaDetail: '/sysmanage/informationChannel/getByKey',
        savePolicyArea: '/sysmanage/informationChannel/save',
        updatePolicyArea: '/sysmanage/informationChannel/updateNotEmpty',
        delPolicyArea: '/sysmanage/informationChannel/deleteChannel',
        getCascaderList: '/sysmanage/informationChannel/query',
        // 字典
        getDictionary: '/sysmanage/informationDictionary/pageQuerys',
        getDictionaryDetail: '/sysmanage/informationDictionary/getByKey',
        saveDictionary: '/sysmanage/informationDictionary/save',
        updateDictionary: '/sysmanage/informationDictionary/updateNotEmpty',
        delDictionary: '/sysmanage/informationDictionary/deleteByKey',
        getModelByChannelId: '/sysmanage/informationDictionary/getModelByChannelId'
    },
    dialogByWeChat: { // h5页面微信弹窗
        getDialogList: '/marketing-config/wechatDialogExamRecord/pageQuery', // 活动弹窗列表
        createDialog: '/marketing-config/wechatDialogExamRecord/createPush', // 创建活动弹窗
        editDialogAndExam: '/marketing-config/wechatDialogExamRecord/submitEditRecord', // 编辑内容并提交审核
        updateExam: '/marketing-config/wechatDialogExamRecord/updateExamRecord', // 更新审核状态
        deleteDialog: '/marketing-config/wechatDialogExamRecord/deleteByExamRecordId', // 根据记录id删除记录
        getDialogInfo: '/marketing-config/wechatDialogExamRecord/getExamRecordInfoById', // 根据id查询弹窗活动详情
        importAgentInfo: '/marketing-config/wechatDialogExamRecord/importAgentInfo', // 导入用户数据
        downloadErrorData: 'marketing-config/wechatDialogExamRecord/downloadErrorData' // 下载错误用户数据
    },
    // 微信推送
    pushByWeChat: {
        getTemplateListByWeChat: '/marketing-config/wechatPushExamRecord/queryWechaTemplate', // 查询微信模版列表
        getWeChatPushList: '/marketing-config/wechatPushExamRecord/pageQuery', // 微信推送列表
        importAgentInfo: '/marketing-config/wechatPushExamRecord/importAgentInfo', // 导入用户数据
        downloadErrorData: 'marketing-config/wechatPushExamRecord/downloadErrorData', // 下载错误用户数据
        createPushByWeChat: '/marketing-config/wechatPushExamRecord/createPush', // 创建推送
        submitEditRecordByWeChat: '/marketing-config/wechatPushExamRecord/submitEditRecord', // 编辑内容提交审核
        getWeChatPushInfo: '/marketing-config/wechatPushExamRecord/getExamRecordInfoById', // 获取推送详情
        updateExamRecord: '/marketing-config/wechatPushExamRecord/updateExamRecord', // 更新审核状态
        deletePushByWeChat: '/marketing-config/wechatPushExamRecord/deleteByExamRecordId', // 删除
        updatePushOnOffByRecordId: '/marketing-config/wechatPushExamRecord/updatePushOnOffById', // 更新状态
        createPushPreviewLink: '/marketing-config/wechatPushExamRecord/createPushPreviewLink' // 生成预览链接
    },
    activityLottery: { // 抽奖活动
        saveWebLinkConfig: '/dec-common/webLinkConfig/save', // 微信web链接定义
        saveWebLinkMenu: '/dec-common/webLinkMenu/save', // 生成微信短链
        getActivityLotteryList: '/marketing-config/activityLottery/pageQuery', // 抽奖活动列表
        saveActivityLottery: '/marketing-config/activityLottery/saveAndReturn', // 创建活动
        updateActivityLottery: '/marketing-config/activityLottery/updateNotEmpty', // 更新
        savePrizeList: '/marketing-config/activityLotteryPrize/saveBatch', // 保存奖品列表
        importUserByActivityLottery: '/marketing-config/activityLotteryUser/importUser', // 导入用户
        getActivityLotteryDetail: '/marketing-config/activityLottery/getByKey', // 活动详情
        getActivityLotteryRecordList: '/marketing-config/activityLotteryRecord/pageQuerys', // 活动记录
        updateRecord: '/marketing-config/activityLotteryRecord/updateNotEmpty', // 修改中奖记录(核销状态、备注)
        downloadRecordData: '/marketing-config/activityLotteryRecord/importExcel' // 导出中奖记录
    },
    weChatMenu: {
        getPageTemplateList: '/pay/officialAccountsTemplate/pageQuery', // 页面模版列表
        getPageTemplateListForSelect: '/pay/officialAccountsTemplate/query', // 选择页面模版
        savePageTemplate: '/pay/officialAccountsTemplate/save', // 单条保存
        updatePageTemplate: '/pay/officialAccountsTemplate/update', // 修改模版信息
        getPageTemplateInfo: '/pay/officialAccountsTemplate/getByKey', // 获取模版信息
        deletePageTemplate: '/pay/officialAccountsTemplate/deleteByKey', // 删除
        getWeChatChannelList: '/pay/officialAccountsMessage/pageQuery', // 微信渠道列表
        saveWeChatChannel: '/pay/officialAccountsMessage/save', // 新增微信渠道
        updateWeChatChannel: '/pay/officialAccountsMessage/updateNotEmpty', // 修改微信渠道信息
        getWeChatChannelInfo: '/pay/officialAccountsMessage/getByKey', // 获取营业部渠道信息
        deleteWeChatChannel: '/pay/officialAccountsMessage/deleteByKey', // 删除营业部渠道
        getPartnerByWeChat: '/pay/channelPartner/getPartnerByChannel', // 获取微信下营业部
        saveMenuByWeChat: '/pay/officialAccountsChannelPartner/save', // 保存微信渠道下营业部、菜单
        updateMenuByWeChat: '/pay/officialAccountsChannelPartner/updateNotEmpty', // 修改微信渠道下菜单
        getMenuListByWeChat: '/pay/officialAccountsChannelPartner/partnerPageQuery', // 获取微信菜单列表
        deleteMenuByWeChat: '/pay/officialAccountsChannelPartner/deleteByKey', // 删除
        getWeChatChannelListForSelect: '/pay/officialAccountsMessage/query', // 获取微信渠道
        getOriginListByWeChat: '/pay/officialAccountsMessageOrigin/pageQuery', // 微信渠道关联来源列表
        saveOriginInfoByWeChat: '/pay/officialAccountsMessageOrigin/save', // 来源信息新增
        updateOriginInfoByWeChat: '/pay/officialAccountsMessageOrigin/updateNotEmpty', // 更新来源信息
        deleteOriginByWeChat: '/pay/officialAccountsMessageOrigin/deleteByKey' // 删除关联来源
    }
}

isRepeatAPIPath(API)

export default {
    API
}
