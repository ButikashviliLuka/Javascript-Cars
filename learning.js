
/* დავალება 1 
    N1. 
შეცდომა: while loop-ში გამორჩენილი იყო ინკრიმენტი.
პრობლემის გადაჭრა: ინკრიმენტის (i++) დამატება if-ის შემდეგ.
*/
// let i = 1;
// let sum = 0;
// while(i < 10) {
//     if (i % 2 !== 0) {
//         sum = sum + i;
//     }
//     i++;
// }
// console.log(sum);


/*  დავალება1, N2.
let sum = 0;
for( let i = 0; i < 50; i++){
    if(i % 3 == 0){
        sum = sum + i;
    }
}
console.log(sum);
*/



// დავალება 2, N1

let car1 = {
    mark: 'Audi',
    color: 'white',
    model: 'A4',
    year: 2019,
    horsePower: 190,
    price: 20000
}
console.log(`ამ მანქანას აქვს შენდეგი მახასიათებლები: \n mark: ${car1.mark}, \n color: ${car1.color}, \n model: ${car1.model}, \n year: ${car1.year}, \n horsePower: ${car1.horsePower}, \n price: ${car1.price} $`)



// დავალება 2, N2

let car2 = {
    mark: 'BMW',
    color: 'Blue',
    model: '535 i',
    year: 2012,
    horsePower: 300,
    price: 13000
}
let car3 = {
    mark: 'Mercedes',
    color: 'White',
    model: 'G4',
    year: 2019,
    horsePower: 300,
    price: 10000
}
let arrayOfCars= [car1, car2, car3];
let filteredCar = [];
let array = [];


for(let i = 0; i < 3; i++){
    if(arrayOfCars[i].price < 15000){
        array.push(arrayOfCars[i].mark);
        array.push(arrayOfCars[i].model);
        filteredCar.push(array);
        array = [];
        console.log(`${filteredCar[i][0]} ${filteredCar[i][1]}`);
    }else if(filteredCar.length = 0){
        console.log('სამწუხაროდ ამ ფასში მანქანას ვერ შეიძენთ');
    }else if(arrayOfCars[i].price > 15000){
        continue;
    }
}

