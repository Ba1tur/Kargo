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
		<footer id='contacts' className={s.footer}>
			<div className={s.footer__politics}>
				<p>Политика конфиденциальности</p>
				<p>Публичный договор-оферта</p>
			</div>
			{visible && (
				<button onClick={scrollToTop} className={s.footer__btn_up}>
					↑     наверх     ↑
				</button>
			)}
			<div className={s.footer__contacts}>
				<h1>Наши контакты городах:</h1>
				<div className={s.footer__contacts__blocks}>
					<div className={s.footer__contacts__block}>
						<a href='tel: +7-915-333-23-78'>Москва: +7 915 333 - 23 - 78</a> <br />
						<a href='tel: +7-987-408-97-27'>Казань: +7 987 408 - 97 - 27</a> <br />
						<a href='tel: +7-927-766-99-14'>Самара: +7 927 766 - 99 - 14</a> <br />
						<a href='tel: +7-928-346-00-01'>Пятигорск: +7 928 346 - 00 - 01</a> <br />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

