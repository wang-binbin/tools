// let obj = {
//     a: 1,
//     b: [1, 2],
//     c: {
//         c1: 1
//     },
//     d: () => {
//         return 'd'
//     },
//     e: new RegExp(/^\s+|\s$/g),
//     f: new Date()
// }

// console.log(obj, 'default data')

// let cloneObj = JSON.parse(JSON.stringify(obj))
// console.log(cloneObj, 'JSON clone')

function cloneType(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}

function cloneDeep(target) {
    let result;
    if (cloneType(target) === 'RegExp') return new RegExp(target);
    if (cloneType(target) === 'Date') return new Date(target);
    if (cloneType(target) === 'Object') {
        result = {}
    } else if (cloneType(target) === 'Array') {
        result = []
    } else {
        return result = target
    }
    for (const key in target) {
        let item = target[key]
        if (cloneType(item) === 'Object' || cloneType(item) === 'Array') {
            result[key] = cloneDeep(item)
        } else {
            result[key] = item
        }
    }
    return result;
}
export default cloneDeep
// let newData = cloneDeep(obj)
// console.log(newData, newData === obj, 'custom clone')
// newData.b[1] = 5