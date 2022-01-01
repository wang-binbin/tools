// 14. 最长公共前缀 2022/01/01
var longestCommonPrefix = function (strs) {
    let inc = ["", undefined, null]
    let str = ''
    let arr = strs[0].split("")
    if (arr.length < 1) {
        return ""
    }
    for (let ins = 0; ins < arr.length; ins++) {
        if (inc.includes(arr[ins])) {
            return ""
        }
        str += arr[ins]
        let isCon = strs.every((item) => {
            return str === item.slice(0, ins + 1)
        })
        if (!isCon) {
            return str.slice(0, str.length - 1) || ""
        }
        if (ins === arr.length - 1) {
            return str
        }
    }
};