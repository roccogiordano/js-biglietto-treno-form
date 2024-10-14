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

    inputKmValue = parseFloat(inputKmSection.value);

    inputAgeValue = parseInt(inputAgeSection.value);

    //


    // Form Validation

    if (isNaN(inputKmValue) || inputKmValue <= 0 || inputKmValue > 100000 || isNaN(inputAgeValue) || inputAgeValue <= 0 || inputAgeValue > 123) {


        // Error Output & DOM Manipulation

        document.getElementById("priceText").innerText = `Inserisci dei valori validi`;

        document.getElementById("priceDisplay").classList.remove("d-none");

        //


    }

    else {


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


        // Price Output & DOM Manipulation

        price = Math.round(price * 100) / 100;

        document.getElementById("priceText").innerText = `Il prezzo del tuo biglietto è di ${price}\u20AC`;

        document.getElementById("priceDisplay").classList.remove("d-none");

        //


    }

    //


    // Fields Reset

    inputKmSection.value = "";
    inputAgeSection.value = "";

    //


});

//