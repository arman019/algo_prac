const minNumb = (value) =>{
let temp = value[0]
    for (const elem of value) {
    if(elem < temp){
        temp = elem
    }
}

    return temp
}

const arr =[12,3,6,8,7]
console.log(minNumb(arr))