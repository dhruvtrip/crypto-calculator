import COIN_RANKING_API_KEY from "/apikey.js"

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
        genericText.innerHTML = `on <input type="date" class="highlighted-text"></input>`;
        cryptoPrice.remove();
      } else {
        investLink.innerHTML = "invest";
        genericText.innerHTML = "today and it goes to $";
        genericText.appendChild(cryptoPrice);
      }
}); 

//fetching coin data using an async-await implementation 
const getCoinData = async () =>{
    const response = await fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&symbols=BTC%2CETH&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": COIN_RANKING_API_KEY
      }
    })
    const coinData = await response.json();
    //console.log(coinData); 
    
    //parsing through json response to get crypto currency prices
    let coinsArray = coinData.data.coins;
      coinsArray.forEach(element => {
      console.log(element.price)
    });  
    
}

getCoinData().catch(err => {
  console.log("ERROR");
});


//add click event on the crypto name tag
cryptoName.addEventListener('click', showCryptoList=>{
  console.log("123")
});

