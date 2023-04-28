import React, { useEffect, useState } from 'react';
import s from './Header.module.scss'
import Image from 'next/image';
import homeLogo from '../../public/homeLogo.png'

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

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
		// boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
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
			<header style={headerDown}>
				<div className={s.header_down_block}>

				</div>
			</header>

		</>

	);
};

export default Header;