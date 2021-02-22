const withoutRepetaion = (array) => {
    const permutations = []
    if (array.length === 1) {
        return [array]
    }
    //console.log(array.slice(1))
    const partialPermutations = withoutRepetaion(array.slice(1))
    //console.log(partialPermutations)
    //console.log(array)

    const firstElementOfArray = array[0]

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutedElement = partialPermutations[i]

        for (let j = 0; j <= partialPermutedElement.length; j++) {
            console.log('partialPermutedElement ', partialPermutedElement[j])
            const elementBefore = partialPermutedElement.slice(0, j)
            const elementAfter = partialPermutedElement.slice(j)

            permutations.push(elementBefore.concat([firstElementOfArray], elementAfter))
        }

    }

    return permutations


}

const arr = ['a', 'b', 'c', 'd']


//console.log(withoutRepetaion(arr))



function getPermutations(options) {
    const permutations = [];
    console.log('FN START');
    console.log(options);

    if (options.length === 1) {
        return [options];
    }

    const partialPermutations = getPermutations(options.slice(1));
    // [['order food']]

    console.log('AFTER RECURSIVE STEP');
    console.log(partialPermutations);
    console.log('options after recursive ', options)

    const firstOption = options[0];

    console.log('FIRST OPTION');
    console.log(firstOption);

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i];
        console.log('OUTER LOOP');
        console.log('partialPermutation ', partialPermutation,
            ' partialPermutation length', partialPermutation.length);

        for (let j = 0; j <= partialPermutation.length; j++) {
            const permutationInFront = partialPermutation.slice(0, j);
            const permutationAfter = partialPermutation.slice(j);
            console.log('permutationInFront ', permutationInFront)
            console.log('permutationAfter ', permutationAfter)
            permutations.push(
                permutationInFront.concat([firstOption], permutationAfter)
            );
        }
    }
    //console.log('one iteration done')
    //console.log('the permutaton will return is ',permutations)
    return permutations;
}

//console.log(getPermutations(arr))

const prac=[1,2,3,4,5]

//console.log(prac.slice(0,2))

const permutationWithRepeatation = (array,length)=>{
    console.log('start')
    const permutations = []
    if(length === 1){
       console.log( array.map((obj) => [obj]))
        return array.map((obj)=>[obj])
    }
    console.log('array ',array)
    const partialPermutations = permutationWithRepeatation(array,length-1)
    console.log('after recursion ')
    console.log('array ', array)

        for (const mainArray of array) {
            for (const element of partialPermutations) {
                permutations.push([mainArray].concat(element))
                }
        }

    return permutations
}

const newArr =[1,2,3]

const len=3

console.log(permutationWithRepeatation(newArr,len))