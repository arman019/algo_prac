const fib = (limit, arr) => {
    let res = 0;
    let counts = 0
    for (let i = 0; i < limit - 1; i++) {
        counts++
        if (arr[i + 1] === undefined) {
            arr.push(res)
        }
        res = arr[i] + arr[i + 1]
    }

    //console.log(counts)
    return res

}

const array = [1, 1]
const lim = 3

//console.log(fib(lim,array)) 



const recursFibo = (numb) => {


    if (numb === 0) {
        return 0
    }

    if (numb === 1 || numb === 2) {
        return 1
    }

    else {
        return recursFibo(numb - 1) + recursFibo(numb - 2);
    }
}


console.log(recursFibo(6)) 
let vh = 0;

const recursDynamicFibo = (n,memo) => {
vh++
let result;

    if (memo[n]) {
    console.log('memo ',memo, ' n ',n , 'memo[n] ',memo[n])
        return memo[n]
    }

    if (n === 0 || n === 1) {
        result= 1
    }

    else {
        console.log('recursDynamicFibo(n - 1,memo) ',recursDynamicFibo(n - 1,memo) , 'recursDynamicFibo(n - 2,memo) ',recursDynamicFibo(n - 2,memo) )
        result = recursDynamicFibo(n - 1,memo) + recursDynamicFibo(n - 2,memo);
       // console.log('result ', result, 'n ',n , ' vh ',vh)
    }
    //console.log('Vh ',vh++)
    // /console.log(result)
    memo[n] = result
    //console.log('memo[n] ',memo[n])
    return result ;
}

//console.log(recursDynamicFibo(5,{}))


const simpRecursiveSum = (numCh,store) =>{
let resCheck ;

if(store[numCh]){
    return store[numCh]
}
if (numCh === 0 ) {
    resCheck= 0
}
else{
    resCheck =numCh +simpRecursiveSum(numCh-1,store)
    console.log(resCheck);
}

    store[numCh]=resCheck

    return resCheck

}

//console.log(simpRecursiveSum( 6,{}))

