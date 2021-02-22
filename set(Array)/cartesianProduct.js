const cartesianProduct = (setA, setB) => {

    const product = []
    for (let valA of setA) {
        if (!Array.isArray(valA)) {
            valA = [valA]
        }
        for (let valB of setB) {
            product.push([...valA, valB])
        }
    }

    //console.log(product)
    return product
}

const mainCartesian = (...arrayVal) => {

    let finalProduct = arrayVal[0]


    for (let i = 1; i < arrayVal.length; i++) {
        finalProduct = cartesianProduct(finalProduct, arrayVal[i])

    }

    return finalProduct
}

const array = [['red', 'blue', 'green'], ['sm', 'lg', 'xl', 'md'], ['v-neck', 'full-sleve']]


let totalval = []

totalval = mainCartesian(...array)
console.log(...totalval)


