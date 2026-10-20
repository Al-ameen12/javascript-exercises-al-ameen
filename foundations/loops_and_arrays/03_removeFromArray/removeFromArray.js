const removeFromArray = function(theArray, ...args) {
    const newArray = []

   
        theArray.forEach((item) => {

            if(!args.includes(item)){
                newArray.push(item)
            }
            
        })
    

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
