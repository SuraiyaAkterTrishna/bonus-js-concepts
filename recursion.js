/* Recursion: 
    A function that calls itself is known as recursive function and the approach is called recursion. 
    Recursion makes the code clean, simpler and shorter. */

/* 
// Calculate sum using for loop
let sum = 0; 
for(let i = 5; i >= 1; i--){
    sum = sum + i;
}
console.log(sum); */

// Calculate sum of numbers using recursion 
function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);

/* 
5 + sum(4)
5 + 4 + sum(3)
5 + 4 + 3 + sum(2)
5 + 4 + 3 + 2 + sum(1)
5 + 4 + 3 + 2 + 1
5 + 4 + 3 + 3
5 + 4 + 6
5 + 10
15 (final result)
*/