
const shortWord =(arr)=>{
    if (!Array.isArray(arr)) return;
    return arr.filter((item)=>{ 
         return item.length > 3

    }
    );
};
console.log(shortWord(['Hello', 'Kek','awz', 'world','I love Js']));
console.log(shortWord(['asd', 'www', 'lol','React']));
