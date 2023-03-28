const spanDolar = document.querySelector('.dolar__value');
const spanReal = document.querySelector('.real__value');

const toReal = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
});

let totalDolar = '';
let totalReal = '';

const roundValue = (num) => {
    return Math.round(num * 100) / 100
}

const handleValue = () => {
    spanDolar.innerHTML = totalReal;
    spanReal.innerHTML = toReal.format(totalDolar);
}

const fetchApi = async () => {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        const { USDBRL } = await response.json();   

        totalReal = 1;
        totalDolar = roundValue(USDBRL.bid);

        handleValue();
    } catch (err) {
        console.log(err);    
    }
}

window.onload = () => fetchApi();