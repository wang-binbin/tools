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
// 2022. 将一维数组转变成二维数组(一遍过)
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {

    if (original.length !== m * n || original.length <= 0 || m <= 0 || n <= 0) return [];
    let arr = [];
    for (let i = 0; i < m; i++) {
        let item = original.slice(i === 0 ? i : n * i, n * (i + 1))
        arr.push(item)
    }
    return arr
};
//1185  一周中的第几天
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    let time = new Date(`${year}-${month}-${day}`);
    let timeWeek = time.getDay();
    let result = ''
    switch (timeWeek) {
        case 1:
            result = 'Monday';
            break;
        case 2:
            result = 'Tuesday';
            break;
        case 3:
            result = 'Wednesday';
            break;
        case 4:
            result = 'Thursday';
            break;
        case 5:
            result = 'Friday';
            break;
        case 6:
            result = 'Saturday';
            break;
        default:
            result = 'Sunday';
            break;

    }
    return result
};