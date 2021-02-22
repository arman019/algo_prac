
const quickSort = (numb) => {
    const copyArray = [...numb]

    if (copyArray.length <=1) {
        return copyArray
    }
    const smallerElementArray = []
    const largeElementArray = []
    const pivot = copyArray.shift()
 
    const centerElementArray = [pivot]

    while (copyArray.length) {
        const currentElem = copyArray.shift()
        if (pivot === currentElem) {
            centerElementArray.push(currentElem)
        
        }

        else if (currentElem < pivot) {
            smallerElementArray.push(currentElem)
        }
        else {
            largeElementArray.push(currentElem)
        }
    }


    const smallerChunk = quickSort(smallerElementArray)
    
    const largerChunk = quickSort(largeElementArray)

    console.log(centerElementArray)
    
    return smallerChunk.concat(centerElementArray, largerChunk)


}

console.log(quickSort([3, 1, 4,3]))