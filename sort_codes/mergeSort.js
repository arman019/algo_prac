const mergeSorts = (numb) =>{
    const copiedArray = [...numb]

    if(copiedArray.length < 2){
    return copiedArray
    }
    if(copiedArray.length === 2){
        return copiedArray[0] > copiedArray[1] ? [copiedArray[1],copiedArray[0]]:copiedArray
    }

    const middleChunk = Math.floor(copiedArray.length/2)
    const leftChunk = copiedArray.slice(0,middleChunk) 
    const rightChunk= copiedArray.slice(middleChunk)

    const leftArray =mergeSorts(leftChunk)
    const RightArray = mergeSorts(rightChunk)

    const FinalMergedArray=[]
    let leftArrayIndex=0
    let rightArrayIndex=0

    while( leftArrayIndex < leftArray.length || rightArrayIndex <RightArray.length){

        if(leftArrayIndex >=leftArray.length ||leftArray[leftArrayIndex] > RightArray[rightArrayIndex]){
            FinalMergedArray.push(RightArray[rightArrayIndex])
            rightArrayIndex++
        }else{
            FinalMergedArray.push(leftArray[leftArrayIndex])
            leftArrayIndex++
        }
    }
    return FinalMergedArray
}   

console.log(mergeSorts([3,10,-1,-3,7,100,5]))