import React, { useEffect, useState } from 'react';
import s from './Header.module.scss'
import Image from 'next/image';
import homeLogo from '../../public/homeLogo.png'
import instagram from '../../public/instagramm.svg'
import whatsapp from '../../public/whatssapp.svg'
import facebook from '../../public/facebook.svg'
import burger from '../../public/burgerMenu.svg'
import { motion } from 'framer-motion'
import Burger from "../BurgerMenu/BurgerMenu";
import SideBar from "../Sidebar/Sidebar";


const Header = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [visible, setVisible] = useState(false);

	const [openMenu, setOpenMenu] = useState(true);

	// Состояние - для header (для цвета)
	const [isHeaderActive, setIsHeaderActive] = useState(false);

	// Состояние - для burger menu
	const [showNav, setShowNav] = useState(false);

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

	useEffect(() => {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
	}, [])

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
						<h3>+996 708 815 888</h3>
						<a href='tel: +996-708-815-888'>заказать звонок</a>
					</div>
					<div className={s.header__right_block}>
						<div className={s.header__nav}>
							<Image src={homeLogo} alt='home_img' />
							<a href='#services'>Услуги</a>
							<a href="#tariffs">Tарифы</a>
							<a href="#partners">Наши партнеры и клиенты</a>
							<a href="#directions">Направление</a>
							<a href="#contacts">Контакты</a>
						</div>
					</div>
				</div>
			</header>
			<header style={headerDown}>
				<div className={s.header_down_block}>
					<div className={s.header_down_block__nav}>
						<a href='#services'>Услуги</a>
						<a href="#tariffs">Тарифы</a>
						<a href="#partners">Наши партнеры и клиенты</a>
						<a href="#directions">Направление</a>
						<a href="#contacts">Контакты</a>
					</div>
					<div className={s.header_down_block__burger}>
						<motion.div
							className={s.burgerMenu}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							onClick={() => setShowNav(!showNav)}
						>
							<Burger
								openMenu={openMenu}
								setOpenMenu={setOpenMenu}
								text="Invert"
								isHeaderActive={isHeaderActive}
								setIsHeaderActive={setIsHeaderActive}
								variantsTop={{
									open: {
										d: [
											"M 36.512,64 C 36.512,64 31.574667,59.333333 29.156,57 26.737333,54.666667 22,50 22,50",
											"M 30.675309,61.997011 C 30.675309,61.997011 27.029542,56.299823 25.716,48.687 24.402458,41.074177 25.284612,33.754 25.284612,33.754",
											"M 23.468201,54.62812 C 23.468201,54.62812 23.937102,47.647804 29.011384,37.561483 34.085666,27.475162 38.953463,22.368743 38.953463,22.368743",
											"M 18.674,42.74729 C 18.674,42.74729 27.488374,33.670956 38.632031,27.274699 49.775688,20.878442 60.991989,17.62628 60.991989,17.62628",
											"M 22,34 C 22,34 40.666667,34.001 50,34.001 59.333333,34.001 78,34 78,34",
										],
									},
									closed: {
										d: [
											"M 22,34 C 22,34 40.666667,34.001 50,34.001 59.333333,34.001 78,34 78,34",
											"M 18.674,42.74729 C 18.674,42.74729 27.488374,33.670956 38.632031,27.274699 49.775688,20.878442 60.991989,17.62628 60.991989,17.62628",
											"M 23.468201,54.62812 C 23.468201,54.62812 23.937102,47.647804 29.011384,37.561483 34.085666,27.475162 38.953463,22.368743 38.953463,22.368743",
											"M 30.675309,61.997011 C 30.675309,61.997011 27.029542,56.299823 25.716,48.687 24.402458,41.074177 25.284612,33.754 25.284612,33.754",
											"M 36.512,64 C 36.512,64 31.574667,59.333333 29.156,57 26.737333,54.666667 22,50 22,50",
										],
									},
								}}
								variantsMiddle={{
									open: {
										d: [
											"M 78,50 22,50",
											"M 69.79899,69.79899 30.20101,30.20101",
											"M 50,78 50,22",
											"M 30.20101,69.79899 69.79899,30.20101",
											"M 22,50 78,50",
										],
									},
									closed: {
										d: [
											"M 22,50 78,50",
											"M 30.20101,69.79899 69.79899,30.20101",
											"M 50,78 50,22",
											"M 69.79899,69.79899 30.20101,30.20101",
											"M 78,50 22,50",
										],
									},
								}}
								variantsBottom={{
									open: {
										d: [
											"M 36.512,36 C 36.512,36 31.675667,40.666667 29.257,43 26.838333,45.333333 22,50 22,50",
											"M 64.177416,24.338446 C 64.177416,24.338446 56.983312,22.572393 49.317883,22.905 41.652454,23.237607 33.958392,25.503899 33.958392,25.503899",
											"M 74.594753,53.363542 C 74.594753,53.363542 73.317711,43.556093 70.530796,36.520591 67.743882,29.485088 60.599,22.000161 60.599,22.000161",
											"M 53.280235,81.285906 C 53.280235,81.285906 63.361556,72.520643 69.626995,64.540091 75.892434,56.55954 80.105915,44.169553 80.105915,44.169553",
											"M 22,66 C 22,66 40.666667,66.001 50,66.001 59.333333,66.001 78,66 78,66",
										],
									},
									closed: {
										d: [
											"M 22,66 C 22,66 40.666667,66.001 50,66.001 59.333333,66.001 78,66 78,66",
											"M 53.280235,81.285906 C 53.280235,81.285906 63.361556,72.520643 69.626995,64.540091 75.892434,56.55954 80.105915,44.169553 80.105915,44.169553",
											"M 74.594753,53.363542 C 74.594753,53.363542 73.317711,43.556093 70.530796,36.520591 67.743882,29.485088 60.599,22.000161 60.599,22.000161",
											"M 64.177416,24.338446 C 64.177416,24.338446 56.983312,22.572393 49.317883,22.905 41.652454,23.237607 33.958392,25.503899 33.958392,25.503899",
											"M 36.512,36 C 36.512,36 31.675667,40.666667 29.257,43 26.838333,45.333333 22,50 22,50",
										],
									},
								}}
							/>
						</motion.div>
					</div>
					<div className={s.header_down_block__social}>
						<a href="https://instagram.com/damlarus_cargo?igshid=YmMyMTA2M2Y=">
							<Image src={instagram} />
						</a>
						<a href="https://wa.me/0703153009?text=Привет,%20как%20дела?">
							<Image src={whatsapp} />
						</a>
						<a href="https://www.facebook.com/people/%D0%93%D1%83%D0%BB%D1%8C%D0%B7%D0%B0%D0%BD%D0%B0-%D0%9A%D0%B0%D1%82%D0%BA%D0%B5%D0%BB%D0%B4%D0%B8%D0%B5%D0%B2%D0%B0/pfbid0PwKgsnqC1Rs9vCgkcRbQF3ca1U7hggDzhN68Wqe5CN7BNN9csMNHjTaj7NLiHfznl/?sk=about">
							<Image src={facebook} />
						</a>
					</div>
					<div className={s.header_down_block__number}>
						<a href="https://wa.me/996703153009?text=Привет,%20как%20дела">+996 703 153 009 (W/A)</a>
					</div>
				</div>
			</header>
			{showNav && (
				<SideBar
					openMenu={openMenu}
					setOpenMenu={setOpenMenu}
					showNav={showNav}
					setShowNav={setShowNav}
				/>
			)}
		</>

	);
};

export default Header;