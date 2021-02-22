const isPowerOfTwo = (value)=>{
if(value <= 1){
    return false
}

let dividedNumb = value
    while(dividedNumb !== 1){
        if(dividedNumb % 2 !== 0){
            return false
        }
        dividedNumb = dividedNumb/2
    }
    return true
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(13))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(20))