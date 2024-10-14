// Variables

const kmPrice = 0.21;

let price;

const inputKmSection = document.getElementById("inputKm");

const inputAgeSection = document.getElementById("inputAge");

let inputKmValue;

let inputAgeValue;

//


// addEventListener Method

document.getElementById("ticketForm").addEventListener("submit", function (event) {


    // preventDefault Function

    event.preventDefault();

    inputAgeValue = inputAgeSection.value;

    inputKmValue = inputKmSection.value;

    //


    // Price Calculator

    if (inputAgeValue < 18) {
        price = kmPrice * inputKmValue * 0.8;
    }
    else if (inputAgeValue >= 65) {
        price = kmPrice * inputKmValue * 0.6;
    }
    else {
        price = kmPrice * inputKmValue;
    }

    //


});

//