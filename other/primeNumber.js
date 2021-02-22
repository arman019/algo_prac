const isPrime = (numb) =>{

    //const check = Math.ceil(numb/2)
    const check = Math.sqrt(numb)
    console.log(check)
    let count = 0
    let res=0
    for (let i = 2 ; i<=check  ; i++){
        count++
        res = numb % i      
        if(res === 0){
            console.log(count)
            return 'not prime number'
        }
    }
    console.log(count)
    return 'prime number'
}

console.log(isPrime(5)) 