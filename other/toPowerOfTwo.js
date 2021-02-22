const isPowerOfTwo = (numb) => {

    let divNumb = numb

    while (divNumb !== 1) {
        console.log(divNumb)
        if (divNumb % 2 !== 0) {
            console.log('divNumb % 2 ',divNumb % 2)
            return false
        }
        divNumb = divNumb / 2
    }

    return true
}

const isPowerOfTwoBitWise = (numb) =>{

    if(numb < 1){
        return false;
    }

    return (numb & (numb-1))=== 0

}



//console.log(isPowerOfTwo(20))

//console.log(isPowerOfTwoBitWise(20))

//console.log((27 >>> 0).toString(2))