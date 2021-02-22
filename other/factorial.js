const getFactorial =(numb) =>{
let res = 1;
let chNumb = numb
    while(chNumb  !==  0){     
        res = res * chNumb
        chNumb = chNumb-1      
    }
   return res
}


const recursionFactorial = (numb) =>{
    if(numb === 1 || numb === 0){
        return 1
    }

    return numb * recursionFactorial(numb-1)

}

console.log(recursionFactorial(9))