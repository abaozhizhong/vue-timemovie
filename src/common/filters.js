/*
* @Author: wjj
* @Date:   2017-05-30 02:43:02
* @Last Modified by:   wjj
* @Last Modified time: 2017-05-30 02:50:30
*/

export const getlocaltime = function (val) {
    return new Date(val * 1000).toLocaleString()
}