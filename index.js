function myEach(arrayOne, callback){
    let newArray = arrayOne
    for(let i = 0; i < newArray.length; i++){
        callback(newArray[i])
    }
    return arrayOne
}