const simpleBinary = (sortedArr, elem) => {
    let firstElem = 0
    let lastElem = sortedArr.length - 1


    const middleElem = Math.floor((lastElem - firstElem) / 2)
    if (sortedArr[middleElem] === elem) {
        return middleElem
    }

    if (sortedArr[middleElem] < elem) {
        for (let i = middleElem + 1; i <= lastElem; i++) {
            if (elem === sortedArr[i]) {
                return firstElem + i
            }

        }
    }
    else {
        for (let i = firstElem; i < middleElem; i++) {
            if (elem === sortedArr[i]) {
                return i
            }

        }
    }

    return ' not found'

}

const arr = [1, 3, 7, 10, 13, 19, 23, 44, 50]

// console.log( simpleBinary(arr,11))
let counter = 0

const recursiveBinary = (sortedArr , elem , offset)=>{

    let startIndex = 0
    let endIndex = sortedArr.length - 1

    let middlePoint = Math.floor((endIndex - startIndex )/2)

    if(sortedArr[middlePoint] === elem){
        return middlePoint+offset
    }

    if (sortedArr[middlePoint] < elem){
        startIndex = middlePoint +1
        offset = startIndex +offset

    }
    else{
        endIndex=middlePoint
    }

    return recursiveBinary(sortedArr.slice(startIndex,endIndex+1),elem, offset)
}

const arr2 = [1, 3, 7, 10, 13, 19, 22,55,67]
const res = recursiveBinary(arr2, 67,0)
console.log(res)
//console.log(counter)