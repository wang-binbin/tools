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

// 1576 替换所有的问号
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    let arr = s.split(""),
        alphabet = ['a', 'b', 'c', 'd', "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ],
        index;

    if (arr.includes(isTrue) < 0) return s;
    while (arr.findIndex(isTrue) >= 0) {
        index = arr.findIndex(isTrue)
        if (index == 0) {
            let strNum = alphabet.findIndex(isNext)
            arr[index] = alphabet[strNum == 25 ? 0 : strNum + 1]
        } else {
            // console.log(index,arr);
            let next = alphabet.findIndex(isNext)
            let pre = alphabet.findIndex(isPre)
            arr[index] = alphabet[iso(next, pre)]
            console.log(iso(next, pre), arr);
        }
    }
    return arr.join("")

    function isTrue(item) {
        return item == '?';

    }

    function iso(next, pre) {
        if ((pre === 0 && next === 25) || (next === 0 && pre === 25)) {
            return 24
        } else if ((pre === 1 && next === 25) || (next === 1 && pre === 25)) {
            return 24
        } else if (next === pre) {
            return next === 0 || next === 25 ? 24 : next + 1
        } else {
            let a = -1 < (next + 1 === pre ? next - 1 : next + 1) && (next + 1 === pre ? next - 1 : next +
                    1) <= 25,
                b = -1 < (pre + 1 === next ? pre - 1 : pre + 1) && (pre + 1 === next ? pre - 1 : pre + 1) <=
                25;

            console.log((next + 1 === pre ? next - 1 : next + 1), (pre + 1 === next ? pre - 1 : pre + 1));
            return a ? (next + 1 === pre ? next - 1 : next + 1) : (pre + 1 === next ? pre - 1 : pre + 1)

        }
    }

    function isNext(item) {
        return item == arr[index + 1]
    }

    function isPre(item) {
        return item == arr[index - 1]
    }
};