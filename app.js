const inputValue = document.querySelector(".display");

 document.querySelectorAll(".button").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let btnText = e.target.innerText.trim();
    let currentText = inputValue.innerText;
    let lastChar = inputValue.innerText.slice(-1);

    if (currentText === "Error"||currentText === "NaN") {
      inputValue.innerText = "0";
      currentText = "0";
    }
    if (btnText === "C") {
      inputValue.innerText = "0";
      return;
    }
    if (btnText === "=") {
      try {
        inputValue.innerText = eval(currentText);
      } catch {
        inputValue.innerText = "Error";
      }
      return;
    }
    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(btnText)) {
      return; 
    }
   
    if (currentText === "0" && !isNaN(btnText)) {
    inputValue.innerText = btnText;
   }else {
   inputValue.innerText+= btnText;
 }
  
});
});   