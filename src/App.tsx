import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import './App.css';
import styles from './App.module.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';

function App() {

	const dispatch = useDispatch<AppDispatch>();
	const cash = useSelector((state: RootState) => state.cashReducer.cash);
	const customers = useSelector((state: RootState) => state.customerReducer.customers);

	const addCash = (inputValue: number | null) => {
		dispatch(addCashAction(inputValue));
	};

	const getCash = (inputValue: number | null) => {
		dispatch(getCashAction(inputValue));
	};

	const addCustomer = (name: string | null) => {
		const customer = {
			name,
			id: Date.now(),
		};
		dispatch(addCustomerAction(customer));
	};

	const removeCustomer = (id: number) => {
		dispatch(removeCustomerAction(id));
	};

	return (
		<div className="app">
			<span className="info">{`Ballance: ${cash}`}</span>
			<div className="btns">
				<button onClick={() => addCash(Number(prompt()))}>Increase account</button>
				<button onClick={() => getCash(Number(prompt()))}>Decrease account</button>
			</div>
			<div className="btns">
				<button onClick={() => addCustomer(prompt())}>Add customer</button>
			</div>
			{customers.length > 0
				? customers.map(customer => (
					<div
						className={styles.customer}
						key={customer.id}
						onClick={() => removeCustomer(customer.id)}
					>
						{customer.name}
					</div>
				))
				: (
					<div className="info">No clients!</div>
				)
			}
		</div>
	);
}

export default App;
