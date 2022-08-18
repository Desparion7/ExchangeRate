const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
	fetch(
		`https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`
	)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.result;
			rateInfo.textContent = `1 ${currencyOne.value} = ${rate.toFixed(4)} ${
				currencyTwo.value
			}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
};

const changeCurrency = () => {
	const oldValue = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = oldValue;
	calculate();
};

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', changeCurrency);
calculate();
