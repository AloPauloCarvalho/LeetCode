/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// var filter = function (arr, fn) {
//     return arr.filter(fn);
// }


var filter = function (arr, fn) {
    const filteredArr = [];

    for (const i in arr) {
        if (fn(arr[i], Number(i))) {
            filteredArr.push(arr[i])
        };
    }

    return filteredArr;
};