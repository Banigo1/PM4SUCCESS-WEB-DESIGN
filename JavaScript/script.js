// // For Loops

// for(let i = 0; i<5; i++){
// console.log('in loop',i);
// }

// console.log('loop finished');
// alert('Hello World');

const names = ['Shaun', 'Mario', 'Luigi'];
for(let i = 0; i < names.length; i++){
    // console.log(i);
    console.log(names[i]);

    let html =`<div>${names[i]}</div>`;
    console.log(html);
}

// While loop

let i = 0
while(i < 5){
console.log('in loop', i);
i++
}