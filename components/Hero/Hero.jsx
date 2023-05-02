import React from 'react';
import s from './Hero.module.scss'
import logo from '../../public/company_logo.png'
import Image from 'next/image';
import instagram from '../../public/instagramm.svg'
import whatsapp from '../../public/whatssapp.svg'
import facebook from '../../public/facebook.svg'

const Hero = () => {
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
						<a href="https://wa.me/0703153009?text=Привет,%20как%20дела?">
							<Image src={whatsapp} />
						</a>
						<a href="https://www.facebook.com/people/%D0%93%D1%83%D0%BB%D1%8C%D0%B7%D0%B0%D0%BD%D0%B0-%D0%9A%D0%B0%D1%82%D0%BA%D0%B5%D0%BB%D0%B4%D0%B8%D0%B5%D0%B2%D0%B0/pfbid0PwKgsnqC1Rs9vCgkcRbQF3ca1U7hggDzhN68Wqe5CN7BNN9csMNHjTaj7NLiHfznl/?sk=about">
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
					<button>ОТПРАВИТЬ ЗАЯВКУ</button>
				</div>
			</div>
		</main>
	);
};

export default Hero;	