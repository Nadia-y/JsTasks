

const Amount = (arr)=>{
    if(!Array.isArray(arr)) return;
    return arr.reduce((total, curentEl)=>{
    return total + curentEl;
    },0
    )
};
console.log(Amount([1, 2, 3, 4, 5]));
console.log(Amount([3, 4 ]));




const Amount2 = (arr)=>{
    if(!Array.isArray(arr)) return;
    let sum = 0;
    arr.forEach((elem)=>{     
        return sum += elem ;
    }
    )
       return sum
};
console.log(Amount2([1, 2, 3, 4, 5]));
console.log(Amount2([3, 4 ]));




