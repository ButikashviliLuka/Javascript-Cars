
/* დავალება 1. 
შეცდომა: while loop-ში გამორჩენილი იყო ინკრიმენტი.
პრობლემის გადაჭრა: ინკრიმენტის (i++) დამატება if-ის შემდეგ.
*/
let i = 1;
let sum = 0;
while(i < 10) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
    i++;
}
console.log(sum);


// დავალება 2.
let sum = 0;
for( let i = 0; i < 50; i++){
    if(i % 3 == 0){
        sum = sum + i;
    }
}
console.log(sum);



