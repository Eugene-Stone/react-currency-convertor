import { Fragment, useState, useEffect, useEffectEvent } from 'react';

import { Block } from './Block';

function App() {
	const [fromCurrency, setFromCurrency] = useState('UAH');
	const [toCurrency, setToCurrency] = useState('USD');
	const [fromCurrencyValue, setFromCurrencyValue] = useState(0);
	const [toCurrencyValue, setToCurrencyValue] = useState(0);

	const [exchangeRate, setExchangeRate] = useState([]);

	const showConsoleLog = useEffectEvent((json) => {
		console.log(json);
	});

	useEffect(() => {
		// Аналог как с сервера
		fetch('/data/exchange-rate.json')
			.then((res) => res.json())
			.then((json) => {
				setExchangeRate(json);
				showConsoleLog(json);
			})
			.catch((err) => console.error('Ошибка загрузки:', err));
	}, [setExchangeRate]);

	const handleFromCurrencyChoice = (currency) => {
		setFromCurrency(currency);
	};
	const handleToCurrencyChoice = (currency) => {
		setToCurrency(currency);
	};

	const getRate = (currency) => {
		if (currency === 'UAH') return 1;

		const rate = exchangeRate.find((item) => item.CurrencyCodeL === currency);
		return rate ? 
	};
	const handleFromCurrencyValue = (value) => {
		// const price = value / exchangeRate.includes('CurrencyCodeL');
		setFromCurrencyValue();
	};
	const handleToCurrencyValue = (value) => {
		setToCurrencyValue();
	};

	console.log(exchangeRate.includes('CurrencyCodeL'));
	return (
		<Fragment>
			<div className="App">
				<Block
					value={fromCurrencyValue}
					currency={fromCurrency}
					onChangeCurrency={handleFromCurrencyChoice}
					onChangeValue={handleFromCurrencyValue}
				/>
				<Block
					value={toCurrencyValue}
					currency={toCurrency}
					onChangeCurrency={handleToCurrencyChoice}
					onChangeValue={handleToCurrencyValue}
				/>
			</div>
		</Fragment>
	);
}

export default App;
