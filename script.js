
let investLink = document.getElementById('invest-link');
let investAmount = document.getElementById('invest-amount');
let cryptoName = document.getElementById('crypto-name');
let cryptoPrice = document.getElementById('crypto-price');
let totalAmount = document.getElementById('total-amount');


//show the other calculator format
investLink.addEventListener('click', changeCalculator =>{
    document.querySelector('p').innerHTML = 'changed text';
});

//adds user invested amount
let userAmount = get
investAmount.addEventListener('click', addUserAmount =>{
    investAmount.innerHTML = userAmount;
})
