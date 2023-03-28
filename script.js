const spanDolar = document.querySelector('.dolar__value');
const spanReal = document.querySelector('.real__value');
const inputReal = document.querySelector('.real__input');
const inputDolar = document.querySelector('.dolar__input');

const Currency = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
});

let totalReal = '';
let totalDolar = '';

const roundValue = (num) => {
    return Math.round(num * 100) / 100
}

const handleValue = () => {
    const realFormatted = Currency.format(roundValue(totalReal));

    spanDolar.innerHTML = totalDolar;
    spanReal.innerHTML = realFormatted;

    inputReal.value = totalDolar;
    inputDolar.value = realFormatted;
}

const fetchApi = async () => {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        const { USDBRL } = await response.json();   

        totalDolar = 1;
        totalReal = USDBRL.bid;

        handleValue();
    } catch (err) {
        console.log(err);    
    }
}

const handleInputValue = ({ target }) => {
    const total = Number(target.value);
    const valueInReal = total * totalReal;
    const valueFormatted = Currency.format(
        roundValue(valueInReal)
    );

    inputDolar.value = valueFormatted;
}

inputReal.addEventListener("input", handleInputValue);
window.onload = () => fetchApi();