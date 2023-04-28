import React, { useEffect, useState } from 'react';
import s from './Footer.module.scss'

const Footer = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (typeof window !== 'undefined' && window.pageYOffset > 100) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<footer className={s.footer}>
			<div className={s.footer__politics}>
				<a href="#">Политика конфиденциальности</a>
				<a href="#">Публичный договор-оферта</a>
			</div>
			{visible && (
				<button onClick={scrollToTop} className={s.footer__btn_up}>
					↑     наверх     ↑
				</button>
			)}
			<div className={s.footer__contacts}>
				<h1>Наши контакты в других городах:</h1>
				<div className={s.footer__contacts__blocks}>
					<div className={s.footer__contacts__block}>
						<a href="">Стамбул: +9 0 (533) 031 3596</a> <br />
						<a href="">Москва: +7 (916) 330 3305</a> <br />
						<a href="">Красноярск: +7 (902) 990 74 53</a> <br />
						<a href="">Иркутск: +7 (902) 560 80 05</a> <br />
						<a href="">Якутск: +7 (914) 296 97 23</a>
					</div>
					<div className={s.footer__contacts__block}>
						<a href="">Казань: +7 (903) 387 78 71</a> <br />
						<a href="">Омск: +7 913 657-80-00</a> <br />
						<a href="">Ростов-на-Дону: +7 928 126-66-01</a> <br />
						<a href="">Екатеринбург: +7 963 449-99-93</a> <br />
						<a href="">Краснодар: +7 928 420-66-70</a>
					</div>
					<div className={s.footer__contacts__block}>
						<a href="">Оренбург: +7 912 348 - 68 - 99</a> <br />
						<a href="">Крым: +7 978 723 - 79 - 81</a> <br />
						<a href="">Ульяновск: +7 951 095 - 90 - 83</a> <br />
						<a href="">Челябинск: +7 919 115 - 88-00</a> <br />
						<a href="">Новосибирск: +7 913 923 - 67 - 67</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

