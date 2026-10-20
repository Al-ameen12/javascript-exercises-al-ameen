const removeFromArray = function(theArray, numRemoved) {
    let newArray = []

    for(let i = 0; i < theArray.length; i++){
        if (theArray[i] === numRemoved) {
            continue
        }else{
            newArray.push(theArray[i])
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
