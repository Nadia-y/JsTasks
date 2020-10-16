
function sayHello (name){
 if(name === 'Mark'){
    console.log('Hi, ' + name);
 }
 else {
     console.log ('Hello, ' + name)
 }
};
sayHello('Nicolai');
sayHello('Olia');
sayHello('Mark');
sayHello('Nadia');



const sayHelloTo=(name) => {
    if(name === 'Mark'){
        console.log('Hi, ' + name);
     }
     else {
         console.log ('Hello, ' + name)
     }
};
sayHelloTo('Jan');
sayHelloTo('Jan');
sayHelloTo('Mark');
sayHelloTo('Jak');






function sayHello (name) {
    if (typeof name === 'string') {
        return `hello, ${name}`};
    };

    console.log(sayHello("Nadia"));


