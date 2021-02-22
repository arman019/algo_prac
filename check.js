function sum(arr, n) {
    if (n <= 0) {
        return 0
    } else {
        const res =  sum(arr, n - 1) + arr[n]
        
        return res
    }

}

const array = [ 2, 3, 4]
//console.log(sum(array, 1))

let arr =[]

const matrix = new Array(6).fill().map(() => new Array(5).fill(-1));


const givenitems = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 20, weight: 8 },
    { name: 'c', value: 6, weight: 3 },]


let mat = Array.from(Array(3),()=>{
    Array(2).fill(undefined)

  
})


matrix[0][3]=1

console.log(matrix)