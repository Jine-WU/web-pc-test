import api from './menu-api'

/**
 * 获取营业部app菜单
 * @param data
 * @returns {Promise<void>}
 */
const menuListByPartnerId = async data => {
    const partnerId = data.paramsByPartner.partnerId
    let objByModule = {}, objByPartner = {}
    await api.getMenuInfo(data.paramsByModule).then(res => {
        objByModule = res
    })
    await api.getMenuInfo(data.paramsByPartner).then(res => {
        objByPartner = res
    })
    const idListByPartner = recursionIdListByPartner(objByPartner),
        idArrayByPartner = recursionIdArrayByPartner(objByPartner)
    return {
        obj: recursionIdListByModule(objByModule, idListByPartner, partnerId),
        selectArr: idArrayByPartner
    }
}

const recursionIdListByModule = (data, idListByPartner, partnerId) => {
    data.idByPartner = idListByPartner[data.menuCode] ? idListByPartner[data.menuCode] : data.id
    data.isPartner = Boolean(idListByPartner[data.menuCode])
    data.id = ''
    data.partnerId = partnerId
    if (Number(data.contentType) === 2) { data.childrenMenu = [] }
    data.childrenMenu.length && data.childrenMenu.forEach((item, index) => {
        data.childrenMenu[index] = recursionIdListByModule(item, idListByPartner, partnerId)
    })
    return data
}

const recursionIdListByPartner = data => {
    let idListByPartner = {}
    idListByPartner[data.menuCode] = data.id
    data.childrenMenu.length && Number(data.contentType) === 1 && data.childrenMenu.forEach(item => {
        if (item.childrenMenu.length) {
            idListByPartner = Object.assign(idListByPartner, recursionIdListByPartner(item))
        }
        else {
            idListByPartner[item.menuCode] = item.id
        }
    })
    return idListByPartner
}

const recursionIdArrayByPartner = data => {
    const idArrayByPartner = []
    if (data.childrenMenu.length && Number(data.contentType) === 1) {
        data.childrenMenu.forEach(item => {
            const arr = recursionIdArrayByPartner(item)
            arr.forEach(child => {
                idArrayByPartner.push(child)
            })
        })
    }
    else {
        idArrayByPartner.push(data.id)
    }
    return idArrayByPartner
}


export default {
    menuListByPartnerId
}
