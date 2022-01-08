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