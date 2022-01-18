
let investLink = document.getElementById('invest-link');
let investAmount = document.getElementById('invest-amount');
let cryptoName = document.getElementById('crypto-name');
let genericText = document.getElementById('generic-text-1');
let cryptoPrice = document.getElementById('crypto-price');
let totalAmount = document.getElementById('total-amount');


//show the other calculator format
investLink.addEventListener('click', changeCalculator =>{
    if (investLink.innerHTML === "invest") {
        investLink.innerHTML = "invested";
        genericText.innerHTML = `on ${addDateFormat()}`; //need to add tag here
        cryptoPrice.remove();
      } else {
        investLink.innerHTML = "invest";
        genericText.innerHTML = "today and it goes to $";
        genericText.appendChild(cryptoPrice);
      }
}); 

//function to add new Date tag - creating new span tag with an existing class 

const addDateFormat = function (){
    let dateVariable = document.createElement("span");
    dateVariable.setAttribute('class','highlighted-text');
    cryptoName.appendChild(dateVariable);
    console.log(dateVariable)
};