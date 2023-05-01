import React from 'react';
import s from './Customer.module.scss'
import CustomerSlide from '../CustomerSlide/CustomerSlide';

const Customer = () => {
	return (
		<div className={s.customer_section}>
			<h1>Наши партнёры и клиенты </h1>
			<CustomerSlide/>
		</div>
	);
};

export default Customer;