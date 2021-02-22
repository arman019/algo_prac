const searchElement = (givenObject, elem) => {

    for (let i = 0; i < givenObject.length; i++) {
        if (typeof givenObject === 'object' &&
            givenObject[i].name === elem.name &&
            givenObject[i].age === elem.age) {
            return i
        }
    }

}
const tryObj = [{ name: 'arm', age: 27 }, { name: 'oly', age: 31 }, { name: 'gg', age: 33 }, { name: 'dd', age: 41 }]


console.log(searchElement(tryObj, { name: 'dd', age: 41 }))