
function splicerOne (arr,startIndex, deleteCont, valueToInsert){
    if (Array.isArray(arr)) {
        arr.splice (startIndex, deleteCont, valueToInsert);
        return arr
    }
        return
}

const resultOne = splicerOne ( [1,2,3,4,5],0, 1,'1');
const resultTwo = splicerOne ( [1,2,3,4,5],3, 2,'Hello');

console.log (resultOne);
console.log (resultTwo);


const splicer = (arr,startIndex, deleteCont, valueToInsert) =>{
    if (Array.isArray(arr)) {
        arr.splice (startIndex, deleteCont, valueToInsert);
        return arr
    }
        return
}
const result = splicer ( [1,2,3,4,5],0, 1,'1');
const result2 = splicer ( [1,2,3,4,5],3, 2,'Hello');

console.log (result);
console.log (result2);

