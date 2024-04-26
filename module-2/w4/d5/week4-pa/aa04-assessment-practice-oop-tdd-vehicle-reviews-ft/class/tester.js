const Bicycle = require("./bicycle");
const ElectricBicycle = require("./electric-bicycle");
const Review = require("./review")
// const Vehicle = require("./vehicle")

class Tester {
    constructor(name){
        this.name = name
        this.reviews = [];
    }

    submitReview(vehicle, star, text){
        if (vehicle.validate()) {

            const review = new Review(vehicle, this, star, text) // create new review instance

            this.reviews.push(review)
            vehicle.reviews.push(review)

            // what kind of vehicle am I review?
            if (vehicle instanceof Bicycle) this.bikeTester = true
            if (vehicle instanceof ElectricBicycle) this.eBikeTester = true;

            return review;
        }

        throw new Error("Cannot submit review for invalid vehicle.")
    }
}


// let tester = new Tester("Bob Jones")
// let validBicycle = new Bicycle("Trek 520", 2023, 1829);
// let validEBike = new ElectricBicycle("Specialized", 2010, 600, "Touring", 18, 26, 30, 45);


// tester.submitReview(validEBike)

// console.log(tester)

// let invalidVehicle = new Vehicle(5);

// tester.submitReview(invalidVehicle)

// let tester = new Tester("Bob Jones");
// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);

// let submittedReview = tester.submitReview(validVehicle, 3, "Very cozy.");

// console.log(submittedReview instanceof Review)
// console.log(validVehicle)

// let tester2 = new Tester("Janelle Price");
// console.log(tester2)

module.exports = Tester;
