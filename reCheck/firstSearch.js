const searchObj = (arr, obj) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === obj.name && arr[i].age === obj.age ){
            console.log('found')
            return i
        }
    }
    return 'Not found'
}

const objArr = [{ name: 'arman', age: 25 }, { name: 'goblin', age: 20 },
{ name: 'man', age: 15 }, { name: 'nam', age: 25 }]

console.log(searchObj(objArr,{name:"goblien",age:20}))


/*const arr = [3,6,8,10]

console.log(arr.findIndex((elem)=>{return elem === 8}))*/