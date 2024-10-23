const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");

//function to check whether a word is a palindrome
const palindromeChecker = (str) =>{
  //remove any alphanumeric letters
  const cleanedText = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  //reverse the string
  const reversedText = cleanedText.split('').reverse().join('');

  //compare the cleaned and reversed texts
  if(cleanedText === reversedText){
    console.log("working");
    resultOutput.textContent = str + " is a palindrome";
  } else{
      resultOutput.textContent = str + " is not a palindrome";
  }
}

//function to check whether the user has typed in something
const checkUserInput = () => {
  console.log("empty");
  if (textInput.value.trim() === "") {
    alert("Please input a value");
  }
    palindromeChecker(textInput.value);
  
}

//eventlistener for the button that calls the checkUserInput function when its clicked
checkBtn.addEventListener("click", checkUserInput);

//activating the enter key to also call the checkUserInput function when clicked
textInput.addEventListener("keydown", (e) =>{
  if(e.key === "Enter"){
    checkUserInput();
  }
})