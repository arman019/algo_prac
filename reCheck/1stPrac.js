const sumOfArray = (arr)=>{
var res = 0
   /*  for (const elem of arr) {
        res=res+elem
    }
return res */

return arr.reduce((sum,currNum)=>sum+currNum , 0)
}

const arr = [1,3,10]
console.log(sumOfArray(arr))