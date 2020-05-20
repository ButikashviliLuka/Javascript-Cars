let car1 = {
    mark: 'Audi',
    color: 'white',
    model: 'A4',
    year: 2019,
    horsePower: 190,
    price: 20000
}

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

let carsPrices = [];
for(let i = 0; i < arrayOfCars.length; i++){
    carsPrices.push(arrayOfCars[i].price);
}

function averageNumber(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log('Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის: ' + sum/array.length);
}
averageNumber(carsPrices);



// Part 2
function highestPrice(prices){
        let max = prices[0];
    for(i = 1; i < prices.length; i++){
        if(max < prices[i]){
            max = prices[i];
        }
    }
    console.log(max);
}
highestPrice(carsPrices);



// New task N2

let possibleUsername = 'Gela';
let possiblePassword = '123';

let user1 = {
    username: 'Luka',
    password: '11223333333333'
}
let user2 = {
    username: 'Gela',
    password: '123'
}
let user3 = {
    username: 'Saba',
    password: 'smth'
}
let user4 = {
    username: 'Giorgi',
    password: '1122'
}
let user5 = {
    username: 'Nika',
    password: '345678912'
}

let users = [user1, user2, user3, user4, user5];
let portal = [];
let usersNamesAndPasswords = [];
for(i = 0; i < users.length; i++){
    portal.push(users[i].username);
    portal.push(users[i].password);
    usersNamesAndPasswords.push(portal);
    portal = [];
}


function usernameExists (logonUsername, allUsernames, logonPassword){
    let correctUsername = [];
    for(let i = 0; i < allUsernames.length; i++){
        if(logonUsername === allUsernames[i][0]){
            correctUsername.push(allUsernames[i]);
            if(logonPassword === correctUsername[0][1] && correctUsername[0][1].length > 8){
                console.log('შეხვედით სისტემაში წარმატებით');
            }else if(logonPassword === correctUsername[0][1] && correctUsername[0][1].length < 8){
                console.log('შეხვედით სისტემაში წარმატეით, თუმცა გთხოვთ შეცვალოთ პაროლი');
            }else{
                console.log('პაროლი არასწორია');
            }
        }
    }
    if(correctUsername.length === 0){
        console.log('მოცემული სახელით მომხმარებელი არ მოიებნა');
    }
}
usernameExists(possibleUsername, usersNamesAndPasswords, possiblePassword);

