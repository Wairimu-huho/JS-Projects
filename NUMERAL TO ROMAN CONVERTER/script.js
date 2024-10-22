const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("number");
const outputValue = document.getElementById("output");


//array(contains objects) for mapping numerals for major values
const romanNumerals = [
  { value:1000,
    numeral:"M"
  },
  { value:900,
    numeral:"CM"
  },
  { value:500,
    numeral:"D"
  },
  { value:400,
    numeral:"CD"
  },
  { value:100,
    numeral:"C"
  },
  { value:90,
    numeral:"XC"
  },
  { value:50,
    numeral:"L"
  },
  { value:40,
    numeral:"XL"
  },
  { value:10,
    numeral:"X"
  },
  { value:9,
    numeral:"IX"
  },
  { value:5,
    numeral:"V"
  },
  { value:4,
    numeral:"IV"
  },
  { value:1,
    numeral:"I"
  }
];


//function for computing the coversion
const romanNumeralConvert = (input) =>{
  //base case for the recursive function
  if(input === 0){
    return "";
  }

  for(let i = 0; i < romanNumerals.length; i++){
    if(input >= romanNumerals[i].value){
        return romanNumerals[i].numeral + romanNumeralConvert(input - romanNumerals[i].value)
      }
  }
}

//function for checking whether the input is correct
const checkInput = () =>{
  const inputInt = parseInt(inputValue.value);

  if(!inputValue.value || isNaN(inputInt)){
    outputValue.innerText = "Please enter a valid number";
  } else if(inputInt === -1|| inputInt < 0){
    outputValue.innerText = "Please enter a number greater than or equal to 1";
  } else if(inputInt >= 4000){
    outputValue.innerText = "Please enter a number less than or equal to 3999";
  }else{
    outputValue.innerText = romanNumeralConvert(inputInt);
  }

}

//event listener for when the convert button is clicked
convertBtn.addEventListener("click", checkInput);

