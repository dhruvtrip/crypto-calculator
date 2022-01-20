
let investLink = document.getElementById('invest-link');
let investAmount = document.getElementById('invest-amount');
let cryptoName = document.getElementById('crypto-name');
let genericText = document.getElementById('generic-text-1');
let cryptoPrice = document.getElementById('crypto-price');
let totalAmount = document.getElementById('total-amount');


//show the other calculator format
investLink.addEventListener('click', changeCalculator =>{
    //toggle feature
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

//fetching coin data from coinranking's api - json

fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&symbols=BTC%2CETH&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "eea92ee8b8mshf9664ba0f036a02p1cc450jsneb4c624ca4fa"
	}
})
.then(response => {
	console.log(response.json()
  .then(response=>{
    console.log(response)
  }));
})
.catch(err => {
	console.error(err);
});

//displaying top three crypto prices



//add click event on the crypto name tag
cryptoName.addEventListener('click', showCryptoList=>{
  console.log("123")
})


//function to add new Date tag - creating new span tag with an existing class 

// const addDateFormat = function (){
//     let dateVariable = document.createElement("span");
//     dateVariable.setAttribute('class','highlighted-text');
//     cryptoName.appendChild(dateVariable);
//     console.log(dateVariable)
// };

