const spanCurrency = document.querySelector('.currency__value');
const spanReal = document.querySelector('.real__value');

const inputReal = document.querySelector('.real__input');
const inputCurrency = document.querySelector('.currency__input');

const Currency = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
});

let totalCurrencyToReal = '';
let totalCurrency = '';

const roundValue = (num) => {
    return Math.round(num * 100) / 100
}

const handleValue = () => {
    const realFormatted = Currency.format(roundValue(totalCurrencyToReal));

    spanCurrency.innerHTML = totalCurrency;
    spanReal.innerHTML = realFormatted;

    inputReal.value = totalCurrency;
    inputCurrency.value = realFormatted;
}

const fetchApi = async () => {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        const { USDBRL } = await response.json();   

        totalCurrency = 1;
        totalCurrencyToReal = USDBRL.bid;

        handleValue();
    } catch (err) {
        console.log(err);    
    }
}

const handleInputValue = ({ target }) => {
    const total = Number(target.value);
    const valueInReal = total * totalCurrencyToReal;
    const valueFormatted = Currency.format(
        roundValue(valueInReal)
    );

    inputCurrency.value = valueFormatted;
}

inputReal.addEventListener("input", handleInputValue);
window.onload = () => fetchApi();