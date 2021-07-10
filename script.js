const inputType = document.querySelector('.inputType');
const outputType = document.querySelector('.outputType');
const userInput = document.querySelector('.userInput');
const showOutput = document.querySelector('.showOutput');
const convertButton = document.querySelector('button');



convertButton.addEventListener('click', () => {

    let inputRadix = inputType.value;
    let outputRadix = outputType.value;
    let userInputValue = userInput.value;

    //Verify that the user put something
    if(!userInputValue){
        showOutput.value = "Input a number";
        return;

    }

    //Make sure the input and output are not of same type
    if(inputRadix === outputRadix){
        showOutput.value = "You can't convert to the same system";
        return;

    }

    let numbersToBeWaryOf = [0,1,2,3,4,5,6,7,8,9];

    let numbersNotInSystem = numbersToBeWaryOf.slice(inputRadix);

    let numbersToBeWaryOfHigh = [0,1,2,3,4,5,6,7,8,9,parseInt("0xa"),parseInt("0xb"),parseInt("0xc"),parseInt("0xd"),parseInt("0xe"),parseInt("0xf")];

    let numbersNotInSystemHigh = numbersToBeWaryOfHigh.slice(inputRadix);

    for(var i = 0; i < userInputValue.length; i++){

        if(numbersNotInSystem.includes(parseInt(userInputValue[i]))){
            showOutput.value = "The input is incorrect";
            return;

        }

        if(parseInt(inputRadix) < 11){

            if(userInputValue.search(/[a-z]/g) != -1 || userInputValue.search(/[A-Z]/g) != -1){
                showOutput.value = "The input is incorrect";
                return;

            }

        }


    }


    if(inputRadix == "10"){

        userInputValue = parseInt(userInputValue);

        let convertedNumber = userInputValue.toString(outputRadix);

        showOutput.value = convertedNumber;

        return;


    }

    let convertedNumber = parseInt(userInputValue, inputRadix);

    if(outputRadix != "10"){

        convertedNumber = convertedNumber.toString(outputRadix);

        if(isNaN(convertedNumber)){

            showOutput.value = 'The input is incorrect';
            return;

        }

        showOutput.value = convertedNumber;

        return;

    }

    showOutput.value = convertedNumber;

})