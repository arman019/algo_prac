let counter =0

const binSearch = (value, elem) => {
    let startIndx = 0
    const lastIndx = value.length - 1

    let middleIndx = startIndx + Math.floor((lastIndx + startIndx) / 2)
    if (elem === value[middleIndx]) {
        counter++
        return middleIndx
    }

    if (elem < value[middleIndx]) {
        for (let i = startIndx; i < middleIndx; i++) {
            counter++
            if (elem === value[i]) {
                return i
            }

        }
    }

    else {
        startIndx = middleIndx+1
        console.log(startIndx)
        for (let i = startIndx; i < lastIndx; i++) {
            counter++
            if (elem === value[i]) {
                return i
            }

        }
    }

}

 //console.log(binSearch([4, 6, 8, 9, 11, 10], 11))
 //console.log(counter)
let count = 0

//MAaster Theorm


const recursBinarySeacrh = (value, elem, offset) => {
    count++
    //console.log('count ',count)
    console.log('value length ',value.length)
    let startIndx = 0
    const lastIndx = value.length - 1

    const middleIndx = startIndx + Math.floor((lastIndx + startIndx) / 2)

    if (value.length < 0) {
        return 'Cant find'
    } 
    if (elem === value[middleIndx]) {
        return middleIndx + offset
    }

    if (elem < value[middleIndx]) {
        if (elem === value[middleIndx]) {
            return middleIndx + offset
        } else {
            value.splice(middleIndx, 1)
            console.log('1st splice ',value)
            return recursBinarySeacrh(value, elem, offset)
        }
    }

    if (elem > value[middleIndx]) {
        offset = offset + middleIndx

        value.splice(startIndx, middleIndx)
        console.log('middleIndx ', middleIndx)

        if (elem === value[lastIndx]) {
            //console.log('middleIndx ',middleIndx)
            return middleIndx + lastIndx
        } else {
            value.splice(lastIndx, 1)
            console.log('2nd splice ', value)

            //console.log(value)
            return recursBinarySeacrh(value, elem, offset)
        }
    }
    else {
        
        return 'Cant find'
    }


}

console.log(recursBinarySeacrh([-1, 4, 5, 6, 8, 9, 10, 99, 100], 5, 0))
