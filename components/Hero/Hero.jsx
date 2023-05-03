import React, { useState } from 'react';
import s from './Hero.module.scss'
import logo from '../../public/company_logo.png'
import Image from 'next/image';
import instagram from '../../public/instagramm.svg'
import whatsapp from '../../public/whatssapp.svg'
import facebook from '../../public/facebook.svg'
import Burger from "../BurgerMenu/BurgerMenu";
import SideBar from "../Sidebar/Sidebar";
import { motion } from 'framer-motion'

const Hero = () => {
	const [openMenu, setOpenMenu] = useState(true);

	// Состояние - для header (для цвета)
	const [isHeaderActive, setIsHeaderActive] = useState(false);

	// Состояние - для burger menu
	const [showNav, setShowNav] = useState(false);
	return (
		<main className={s.hero_section}>
			<div className={s.hero_section__contain}>
				<div className={s.hero_section__contain_info}>
					<Image className={s.hero_section__contain_info_logo} src={logo} alt='logo_img' />
					<div className={s.hero_section__contain_info__title}>
						<h4>Бишкек</h4>
						<p>пн-вс, 00:00 - 23:59</p>
					</div>
					<div className={s.hero_section__contain_info__social}>
						<a href="https://instagram.com/damlarus_cargo?igshid=YmMyMTA2M2Y=">
							<Image src={instagram} />
						</a>
						<a href="https://wa.me/9960703153009?text=Здраствуйте,%20у%20меня%20есть%20вопрос">
							<Image src={whatsapp} />
						</a>
						<a href="https://www.facebook.com/people/DamlaRus-cargo-service/100092214619555/">
							<Image src={facebook} />
						</a>
					</div>
				</div>
				<div className={s.hero_section__contain_text}>
					<h1>Авто Перевозка товаров из Кыргызстана в Россию  </h1>
					<div className={s.hero_section__contain_text__block}>
						<p>Полный комплекс услуг</p>
					</div>
				</div>
				<div className={s.hero_section__contain__request}>
					<a href="https://wa.me/9660703153009?text=Здравствуйте,%20я%20хочу%20отправить%20заявку">
						<button>ОТПРАВИТЬ ЗАЯВКУ</button>
					</a>
				</div>
			</div>
		</main>
	);
};

export default Hero;	