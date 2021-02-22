const factorialProb = (numb) => {

    if (numb === 1 || numb === 0) {
        return 1
    }

    var result = numb * factorialProb(numb - 1)


    return result

}

console.log(factorialProb(3))