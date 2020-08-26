
/**
 * 时间格式化
 * @param  {[Number]} date 时间戳
 * @param  {[DateString]} fmt  时间格式
 * dateFormat('yyyy-MM-dd hh:mm:ss.S') => 2016-03-12 20:13:32.232
 * @return {[date]} 时间
 */
export const dateFormat =  (date, fmt = 'yyyy-MM-dd hh:mm:ss') => {
    if (!date) { return '' }
    if (typeof (date) === 'string') {
        const newData = date.split('.')
        date = newData[0].replace(/\-/g, '/')
    }

    const date1 = new Date(date)

    const o = {
        'M+': date1.getMonth() + 1, // 月
        'd+': date1.getDate(), // 日
        'h+': date1.getHours(), // 小时
        'm+': date1.getMinutes(), // 分
        's+': date1.getSeconds(), // 秒
        'q+': Math.floor((date1.getMonth() + 3) / 3), // 季度S
        'S': date1.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date1.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}

/**
 * 数据转货币显示形式
 * @param  {[Number]} number 数据
 * @param  {[places]}  小数位数，默认两位
 * @param  {[symbol]}   货币符号
 * @param  {[thousand]}   分隔符
 * @param  {[decimal]}   时间格式
 * @return {[money]} 时间
 */
export const moneyFormat = (number, places, symbol, thousand, decimal) => {
    places = !isNaN(places = Math.abs(places)) ? places : 2
    symbol = symbol !== undefined ? symbol : '￥'
    thousand = thousand || ','
    decimal = decimal || '.'
    const negative = number < 0 ? '-' : ''
    const i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + ''
    let j = i.length
    j = j > 3 ? j % 3 : 0
    return symbol + negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '')
}

/**
 * 空字符显示
 * @param value 字符
 * @param replace 空字符代替符号
 * @returns {*}
 */
export const emptyFormat = (value, replace = '-') => {
    if (value) {
        return value
    }
    else {
        return replace
    }
}
