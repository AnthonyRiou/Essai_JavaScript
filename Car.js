
// function Car(make, model, color, year, passenger, typeOfFuel) {
//     // datas
//     this.make = make,
//     this.model = model,
//     this.color = color,
//     this.year = year,
//     this.passenger = passenger,
//     this.started = false,
//     this.typeOfFuel = typeOfFuel,
//     this.fuel = 0,
//     // method

//     this.presentation = () => {
//         console.log("C'est une voiture " + make + model + "de " + color +"et de l'année. " + year + "Elle compte " + passenger + "places et fonctionne au "+ typeOfFuel)
//     }

//     this.addfuel = function (litres = 10) {
//         this.fuel = litres
//         console.log("j'ai mis " + litres + " litres de fuel");
//     }

//     this.start= function () {
//         if (this.fuel > 0) {
//             console.log("démarre la voiture");
//             this.started = true;
//         }
//         else {
//             this.addfuel()
//         }
//     }

//     this.drive = function () {
//         if (this.started) {
//             console.log("Go,go ,go !!!!");
//         }
//         else {
//             console.log("Bouges-toi, fais du fuel et démarre");
//         }
//     }
// }

// class Car {
//     // datas
//     constructor(make, model, color, year, passenger, typeOfFuel) {
//     this.make = make,
//     this.model = model,
//     this.color = color,
//     this.year = year,
//     this.passenger = passenger,
//     this.started = false,
//     this.typeOfFuel = typeOfFuel,
//     this.fuel = 0
//     }
//     // method
//     presentation() {
//         console.log("C'est une voiture " + this.make + " " + this.model + " " + this.color +" et de l'année " + this.year + ". Elle compte " + this.passenger + " places et fonctionne au "+ this.typeOfFuel + ".")
//     }
//     addfuel(litres = 10) {
//         this.fuel = litres
//         console.log("j'ai mis " + litres + " litres de fuel");
//     }

//     test() {
//         console.log(test);
//     }
//     start() {
//         if (this.fuel > 0) {
//             console.log("démarre la voiture");
//             this.started = true;
//         }
//         else {
//             this.addfuel()
//         }
//     }

//     drive() {
//         if (this.started) {
//             console.log("Go,go ,go !!!!");
//         }
//         else {
//             console.log("Bouges-toi, fais du fuel et démarre");
//         }
//     }
// }






Class Car (make, model, color, year, typeOfFuel, fuel)