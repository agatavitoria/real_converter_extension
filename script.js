const spanDolar = document.querySelector('.dolar__value');
const spanReal = document.querySelector('.real__value');

let totalDolar = 5.17;
let totalReal = 1;

window.onload = () => {
    let toReal = new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
    });

    spanDolar.innerHTML = totalReal;
    spanReal.innerHTML = toReal.format(totalDolar);
}