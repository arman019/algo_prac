const knap = (itemList) => {
    let arr = []
    let setVal = []
    /* itemList.map((item,index)=>{
        console.log(item.id)
    }) */
    let total = 0
    let valCheck = 0
    let wCheck = 0
    for (let i = 0; i < itemList.length; i++) {
        //console.log(itemList[i].id)
        for (let j = 0; j < itemList.length; j++) {
            if (itemList[j].id !== itemList[i].id) {
                console.log(itemList[j].id)
                if (total < (itemList[i].value + itemList[j].value) && 8 > (itemList[i].w + itemList[j].w)) {
                    total = itemList[i].value + itemList[j].value
                    arr.length = 0
                    arr.push(itemList[i].id, itemList[j].id)
                }
                if (itemList[j].value > valCheck && itemList[j].w < 8 && itemList[j].w > wCheck) {
                    valCheck = itemList[j].value
                    wCheck = itemList[j].w
                    setVal.length = 0
                    setVal.push(itemList[j].id)

                }

            }
        }

    }


    console.log(setVal)

    return arr
}


const arr = [{
    id: 'a',
    value: 3,
    w: 3
}, {
    id: 'b',
    value: 4,
    w: 2
},
{
    id: 'c',
    value: 10,
    w: 3
},
    {
        id: 'd',
        value: 15,
        w: 4
    },

]

const maxW = 8

//console.log(knap(arr))


const newKnap = (items, weightLimit) => {
    const finalRes = []
    let totalValue = 0
    let totalWeight = 0
    let counter = 0
    let intermediateValue=0
    let checkId=[]

    for (let i = 0; i < items.length; i++) {
        counter++
        
        for (let j = 0; j <items.length; j++) {
            totalValue = totalValue + items[i].value + items[j].value
            totalWeight = totalWeight + items[i].w + items[j].w
            checkId.push(items[i].id ,items[j].id )
            console.log('totalValue ', totalValue)

            flagValue = totalValue
            if (totalWeight > weightLimit) {
                totalValue = 0
                totalWeight = 0
                intermediateValue=0
                //console.log('checkId in big', checkId)
                checkId = checkId.slice(0,j)
                //console.log('after checkId ', checkId)
                
            }
             if (totalWeight !== 0 && totalWeight <= weightLimit || totalWeight >= (weightLimit - counter) && totalValue >= intermediateValue && totalWeight <= weightLimit ) {
                console.log(totalValue, totalWeight)
                //console.log('id 1 ', items[i].id, 'id 2 ', items[j].id, 'checkId ', checkId)
                console.log('in check ', checkId)
                checkId.length=0
                
            } 

            
           
        }

    }
    //console.log('outer checkId', checkId)

    //finalRes.push(totalValue)

    return finalRes

}

console.log(newKnap(arr, 8))

 s