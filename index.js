function myEach(arrayOne, alert){
    arrayOne.forEach(element => {
        alert.call(element.value)
    });
}