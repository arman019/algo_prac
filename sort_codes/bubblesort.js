const bubSort = (numb) => {
    let ch;
    let innCount = 0
    let OutCount = 0

    for (let i = 0; i < numb.length; i++) {
        for (let j = i+1; j < numb.length; j++) {
            if (numb[i] !== numb[j]) {
                if (numb[i] > numb[j]) {
                    ch = numb[i]
                    numb[i] = numb[j]
                    numb[j] = ch
                    // console.log(numb)
                }
            }
            innCount++
        }
        OutCount++
    }
    console.log(innCount,OutCount)
    return numb

}
console.log(bubSort([6, 6, 4, 23, 5,-3,500, 9, 100,-6, 0,88,-88]))