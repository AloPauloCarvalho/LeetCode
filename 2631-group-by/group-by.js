/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let tempObj = new Object();
    
    for(let i = 0; i < this.length; i++){
        let key = fn(this[i]);
        if(!Object.hasOwn(tempObj,key)){
            tempObj[key] = [];
        }
        tempObj[key].push(this[i]);
    }
    
    return tempObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */