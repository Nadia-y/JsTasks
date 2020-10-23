
const differentData=(arr)=>{
    if(!Array.isArray(arr)) return;
    return arr.reduce((res,item) =>{
     
      if (typeof item === 'number') {

      res.push((item*2).toString()) ;
  
   };
 
   if (typeof item === 'string'){

     res.push(item.toLocaleUpperCase()) 
   }
  
  return res;
    },[]
    )
};


console.log (differentData([1, 2, null, 'hello', 5, undefined]));
console.log (differentData(['angular', 'react', [], 'vue', 50 ]));

