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
