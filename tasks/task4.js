

function deleteChars (str){
    if (typeof str === 'string'){
        return str.slice(1, -1)
    }

}
console.log (deleteChars('mother'));
console.log (deleteChars('F'));
console.log (deleteChars('brother'));



const deleteL =(str)=>{
    if (typeof str === 'string'){
        return str.slice(1, -1)
    }
}
console.log (deleteL('letter'));
console.log (deleteL('F'));