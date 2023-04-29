import React, { useEffect, useState } from 'react';
import s from './Header.module.scss'
import Image from 'next/image';
import homeLogo from '../../public/homeLogo.png'
import vk from '../../public/vk.svg'
import telegram from '../../public/telegram.svg'
import whatsapp from '../../public/whatsapp.svg'
import burger from '../../public/burgerMenu.svg'

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	

	const headerDown = {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		height: "70px",
		backgroundColor: "#174C73",
		zIndex: 999,
		transition: "transform 0.3s ease-out",
		transform: isVisible ? "translateY(0)" : "translateY(-100%)",
	}
	return (
		<>
			<header className={s.header}>
				<div className={s.header_block}>
					<div className={s.header__left_block}>
						<h3>+7 916 330 33 05</h3>
						<a>заказать звонок</a>
					</div>
					<div className={s.header__right_block}>
						<div className={s.header__nav}>
							<Image src={homeLogo} alt='home_img' />
							<a href='#'>Услуги</a>
							<a href="#">Tарифы</a>
							<a href="#">Онлайн-калькулятор</a>
							<a href="#">Тарифы</a>
							<a href="#">Отзывы</a>
							<a href="#">Контакты</a>
						</div>
					</div>
				</div>
			</header>
			<header style={headerDown}>
				<div className={s.header_down_block}>
					<div className={s.header_down_block__nav}>
						<a href='#'>Услуги</a>
						<a href="#">Тарифы</a>
						<a href="#">Онлайн-калькулятор</a>
						<a href="#">Тарифы</a>
						<a href="#">Отзывы</a>
						<a href="#">Контакты</a>
					</div>
					<div className={s.header_down_block__burger}>
						<Image src={burger} alt='burger_menu' />
					</div>
					<div className={s.header_down_block__social}>
						<Image src={vk} alt='vk_img' />
						<Image src={whatsapp} alt='whatsapp_img' />
						<Image src={telegram} alt='telegram_img' />
					</div>
					<div className={s.header_down_block__number}>
						<a href="#">+7 916 330 33 05</a>
					</div>
				</div>
			</header>

		</>

	);
};

export default Header;