/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while(j >= 0 && fn(arr[j]) > fn(current)){ //a comparação dos index passados na função ocorre apenas aqui, pois as demais tratativas do arr são referente a posição do index, não ao seu valor.
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    return arr;
};

// var sortBy = function(arr, fn) {
//     return arr.sort((a, b) => fn(a) - fn(b));
// };