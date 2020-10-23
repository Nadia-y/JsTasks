const names =(arr, nam)=>{
    return arr.find((user,index)=>{

if(user===nam) {
    return true
}
else{
    "Пользователь"
}

//  return user === nam ? `Пользователь с именем ${nam} найден!Его индекс User ${index}` : `Пользователь не найден`;

     
    })
}

// function names(arr, elem) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === elem) {
//       return `Пользователь с именем ${elem} найден!Его позиция - ${i}`;
//     }
//   }
//   return `Пользователь не найден!`;
// }

console.log(names(["Alex", "Maria", "Max", "Petr"], "Maria"));
console.log(names(["Alex", "Maria", "Max", "Petr"], "Petr"));
console.log(names(["Alex", "Maria", "Max", "Petr"], "Ales"));

// ? `Пользователь с именем ${nam} найден!Его индекс User ${index}` : `Пользователь не найден`;