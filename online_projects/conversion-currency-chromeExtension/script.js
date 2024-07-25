const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey='Z1P9xKleH4YSrET9qEsL/w==3G5Om7kmLmQtHZLj'
const apiUrl= 'https://api.api-ninjas.com/v1/exchangerate?pair=USD_'


convert.addEventListener('click', () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        const resultPrice = amountTotal * rate;
        result.innerHTML = `${amount.value} ${currency.value} = ${resultPrice.toFixed(2)} USD`;
    })
    .catch(error => {
        console.error('Request failed', error);
        result.innerHTML = 'An error occured please try again later'
    })
})