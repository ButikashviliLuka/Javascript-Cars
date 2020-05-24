let car1 = {
    id: "Audi",
    mark: 'Audi',
    color: 'Blue',
    model: 'A4',
    year: 2019,
    horsePower: 190,
    price: 20000
}

let car2 = {
    id: "BMW",
    mark: 'BMW',
    color: 'Blue',
    model: '535 i',
    year: 2012,
    horsePower: 300,
    price: 13000
}
let car3 = {
    id: "Mercedes",
    mark: 'Mercedes',
    color: 'Silver',
    model: 'G4',
    year: 2019,
    horsePower: 300,
    price: 17000
}
let car4 = {
    id: "Porsche",
    mark: 'Porsche',
    color: 'Orange',
    model: 'G4',
    year: 2019,
    horsePower: 300,
    price: 10000
}
let massive = [car1, car2, car3, car4];

function displayDiscription(carId){
    let foundCar = searchCar(carId);
    let description = carDescription(foundCar);
    alert(description);
}

function searchCar(carId) {
    for(let i = 0; i < massive.length; i++){
        if(massive[i].id === carId){
            return massive[i];
        }
    }
}

function carDescription(car) {
         return  `ამ მანქანას აქვს შენდეგი მახასიათებლები: \n mark: ${car.mark}, \n color: ${car.color}, \n model: ${car.model}, \n year: ${car.year}, \n horsePower: ${car.horsePower}, \n price: ${car.price} $`
}


function giveAlert(){
    let input = parseInt(document.querySelector('#search').value);
    let stringInput = input.toString();
    let searchedCars = [];
    if(stringInput === "NaN"){
        alert(`გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში.`);
    }else{
        for(let i = 0; i < massive.length; i++){
            if(input >= massive[i].price ){
                searchedCars.push(`\n \n ამ ${input} ფასად შეგიძლიათ შეიძინოთ: \n სახელი: ${massive[i].mark}, \n მოდელი: ${massive[i].model}, \n ფასი: ${massive[i].price}$`);
            }
        }
        if(searchedCars.length > 0){
            alert(searchedCars);
        }else{
             alert(`სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა`);
        }
    }
}



