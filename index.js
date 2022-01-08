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

function myReduce(collection, callback){
    let reduceArray = []
    if(typeof collection === 'object'){
        reduceArray = Object.values(collection)
    }
    else{
        reduceArray = [...collection]
    }
    console.log(reduceArray)
    console.log(reduceArray.reduce((a,b) => callback(a + b)))
}