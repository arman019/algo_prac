const recurFibo = (value)=>{

    if(value === 0 || value ===1){
        return 1
    }

    var res = fibo(value - 2) + fibo(value - 1) 


    return res
}

const fib=6

//console.log(recurFibo(fib))

const dynamicRecurFibo = (value, memo)=>{
    let result;
    if(memo[value]){
        return memo[value]
    }

   
    if(value === 0 || value === 1){
        result = 1
    }else{
        result = dynamicRecurFibo(value-2,memo)+dynamicRecurFibo(value -1,memo)
    }

    memo[value] = result

    return result
}

console.log(dynamicRecurFibo(6,{}))