const isSmall = (numb) => {
    let res = 0 
    let temp = 0
    for (let i = 0; i < numb.length; i++) {
        //console.log('num ',numb[i], 'sqrt ',Math.sqrt(numb[i]))
        if(res === 0){
            res=Math.sqrt(numb[i])
            temp=numb[i]
        }else{
            if(res > Math.sqrt(numb[i])){
               // console.log('res ',res,'num ',numb[i], 'sqrt ',Math.sqrt(numb[i]))
                res=Math.sqrt(numb[i])
                temp=numb[i]
            }
        }
        //console.log('temp ',temp)
    }

    return temp

}

console.log(isSmall([3,1,5,4])) 