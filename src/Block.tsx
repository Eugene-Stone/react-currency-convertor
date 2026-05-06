const defaultCurrencies = ['UAH', 'USD', 'EUR'];

type PropsType = {
	value: number;
	currency: string;
	onChangeValue: (e: number) => void;
	onChangeCurrency: (cur: string, value: number) => void;
};

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }: PropsType) => (
	<div className="block">
		<ul className="currencies">
			{defaultCurrencies.map((cur) => (
				<li
					onClick={() => onChangeCurrency(cur, value)}
					className={currency === cur ? 'active' : ''}
					key={cur}>
					{cur}
				</li>
			))}
		</ul>
		<input
			onChange={(e) => onChangeValue(Number(e.target.value))}
			value={value}
			type="number"
			placeholder={'0'}
		/>
	</div>
);
