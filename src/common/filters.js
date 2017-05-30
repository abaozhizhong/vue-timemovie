/*
* @Author: wjj
* @Date:   2017-05-30 02:43:02
* @Last Modified by:   wjj
* @Last Modified time: 2017-05-30 13:25:46
*/
let formatDateTime = function (date) {
    var y = date.getFullYear()
    var m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    var d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    var h = date.getHours()
    var minute = date.getMinutes()
    minute = minute < 10 ? ('0' + minute) : minute
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute
}
export const getlocaltime = function (val) {
    return new Date(val * 1000).toLocaleString()
}
export const timeago = str => {
    let now = new Date().getTime() / 1000
    let ago = str / 1000
    let diff = now - ago
    let oneday = 24 * 60 * 60
    // console.log(diff)
    if (diff > oneday) {
        return formatDateTime(new Date(str))
    } else {
        if (diff < 60) {
            return Math.round(diff) + '秒前'
        } else if (diff > 60 && diff < 60 * 60) {
            return Math.round(diff / 60) + '分钟前'
        } else if (diff > 60 * 60) {
            return Math.round(diff / 60 / 60) + '小时前'
        }
    }
}
export const getdot = str => {
    // console.log(typeof str)
    if (String(str).indexOf('.') === -1) {
        return str + '.0'
    } else {
        return str
    }
}
