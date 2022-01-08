function myEach(collection, callback){

    let newArr = []

    // if collection is an object 
    if(typeof collection === 'object'){
    // turn collection into arr
        newArr = Object.values(collection)
    } else {
        newArr = [...collection]
    }
        

    for(let i = 0; i < newArr.length; i++){
        callback(newArr[i])
    }
    return collection
}

function myMap(collection, callback){
    let objArray = []
    if(typeof collection === 'object'){
        objArray = Object.values(collection)
    }
    else{
        objArray = [...collection]
    }
    let newCollection = objArray.map(element => callback(element))
    return newCollection
}

function myReduce(collection, callback, acc){
    let reduceArray = []
    if(typeof collection === 'object'){
        reduceArray = Object.values(collection)
    }
    else{
        reduceArray = [...collection]
    }
    if(!acc){
        acc = reduceArray[0]
        reduceArray.shift()
    }
    for(let i = 0; i < reduceArray.length; i++){
       acc = callback(acc, reduceArray[i], reduceArray)
    }
    return acc
}

function myFind(collection, predicate){
    let findArray = []
    if(typeof collection === 'object'){
        findArray = Object.values(collection)
    }
    else{
        findArray = [...collection]
    }
    for(let i = 0; i < findArray.length; i++){
        if(predicate(findArray[i])){
            return findArray[i]
        }
    }
   
}

function myFilter(collection, predicate){
    let filterArray = []
    if(typeof collection === 'object'){
        filterArray = Object.values(collection)
    }
    else{
        filterArray = [...collection]
    }
    let trueArray = []
    for(let i = 0; i < filterArray.length; i++){
        if(predicate(filterArray[i])){
        trueArray.push(filterArray[i])
        }
    }
    return trueArray
}

function mySize(collection){
    let sizeArray = []
    if(typeof collection === 'object'){
        sizeArray = Object.values(collection)
    }
    else{
        sizeArray = [...collection]
    }

    let size = sizeArray.length
    return size
}

function myFirst(array, integer){
    let firstArray = []
    if(integer){
        for(let i = 0; i < integer; i++ ){
            firstArray.push(array[i])
        }
        return firstArray
    } else {
        return array[0]
    }
}

function myLast(array, integer){
    let lastArray = []
    if(integer){
        for(let i = (array.length - integer); i < array.length; i++){
            lastArray.push(array[i])
        }
        return lastArray
    } else {
        return array[array.length-1]
    }
}

function myKeys(object){
    let objArray = [] 
    objArray = Object.keys(object)
    return objArray
}

function myValues(object){
    let valueArray = [] 
    valueArray = Object.values(object)
    return valueArray
}