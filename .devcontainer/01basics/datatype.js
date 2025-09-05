"use strict";

//Data types
// null -> value hai hamari aur data type bhi hai

// undefined -> value hai kyuki abhi hamare pass value assign nhi kiya hai

// symbol -> unique identifier ke liye use hota hai ( figma tools me jo unique id hota hai wo symbol hota hai)

//object -> object ke andar multiple values store kar sakte hai ,,,, 

console.log(typeof null);   
console.log(typeof undefined);
console.log(typeof Symbol("id"));
console.log(typeof {name : "shivam" , age : 19});
console.log( typeof "shivam");
console.log(typeof 19);
console.log(typeof true);
console.log(typeof BigInt(1234567890123456789012345678901234567890n));

//BigInt -> ye data type tab use karte hai jab hame bahut bade number ko store karna hota hai 
//js me number ka limit 2^53 -1 tak hota hai usse jada number ko store karne ke liye BigInt use karte hai

let myNumber = 1234567890123456789012345678901234567890n;
console.log(myNumber);
console.log(typeof myNumber);


