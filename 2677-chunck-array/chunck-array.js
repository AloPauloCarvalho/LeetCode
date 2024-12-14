/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const finalArr = [];
    var tempArr = [];
    var counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (counter <= size) {
            tempArr.push(arr[i]);
            counter++;
        } 
        
        if (counter === size) {
            finalArr.push(tempArr);
            tempArr = [];
            counter = 0;
        }
    }

    if (tempArr.length > 0) {
        finalArr.push(tempArr);
    }

    return finalArr;
};
