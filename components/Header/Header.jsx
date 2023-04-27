import React from 'react';
import s from './Header.module.scss'
import Image from 'next/image';
import homeLogo from '../../public/homeLogo.png'

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header_block}>
				<div className={s.header__left_block}>
					<h3>+7 916 330 33 05</h3>
					<a>заказать звонок</a>
				</div>
				<div className={s.header__right_block}>
					<div className={s.header__nav}>
						<Image src={homeLogo} alt='home_img' />
						<a href='#'>услуги</a>
						<a href="#">тарифы</a>
						<a href="#">онлайн-калькулятор</a>
						<a href="#">тарифы</a>
						<a href="#">отзывы</a>
						<a href="#">контакты</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;