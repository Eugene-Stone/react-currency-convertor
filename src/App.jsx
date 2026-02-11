import { Fragment, useState, useEffect } from 'react';

import { Block } from './Block';

function App() {
	useEffect(() => {
		// Аналог как с сервера
		fetch('/data/exchange-rate.json')
			.then((res) => res.json())
			.then((json) => setUsers(json.data))
			.then(() => setIsLoading(false))
			.catch((err) => console.error('Ошибка загрузки:', err));
	}, []);

	return (
		<Fragment>
			<div className="App">
				<Block value={0} currency="UAH" onChangeCurrency={(cur) => console.log(cur)} />
				<Block value={0} currency="USD" />
			</div>
		</Fragment>
	);
}

export default App;
