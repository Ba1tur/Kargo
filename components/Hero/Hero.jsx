import React from 'react';
import s from './Hero.module.scss'
import logo from '../../public/company_logo.png'
import Image from 'next/image';
import vk from '../../public/vk.svg'
import telegram from '../../public/telegram.svg'
import whatsapp from '../../public/whatsapp.svg'

const Hero = () => {
	return (
		<main className={s.hero_section}>
			<div className={s.hero_section__contain}>
				<div className={s.hero_section__contain_info}>
					<Image className={s.hero_section__contain_info_logo} src={logo} alt='logo_img' />
					<div className={s.hero_section__contain_info__title}>
						<h4>Москва</h4>
						<p>пн-вс, 11:00 - 20:00</p>
					</div>
					<div className={s.hero_section__contain_info__social}>
						<Image src={vk} alt='vk_img' />
						<Image src={whatsapp} alt='whatsapp_img' />
						<Image src={telegram} alt='telegram_img' />
					</div>
				</div>
				<div className={s.hero_section__contain_text}>
					<h1>Карго-доставка товаров из Турции в Россию </h1>
					<div className={s.hero_section__contain_text__block}>
						<p>Полный комплекс услуг</p>
					</div>
				</div>
				<div className={s.hero_section__contain__request}>
					<h4>От поиска и закупки товара в Турции, <br />
						до доставки к вашей двери в любой город России</h4>
					<button>ОТПРАВИТЬ ЗАЯВКУ</button>
				</div>
			</div>
		</main>
	);
};

export default Hero;	