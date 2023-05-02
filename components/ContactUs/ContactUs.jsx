import React from 'react';
import s from './ContactUs.module.scss'
import Image from 'next/image';
import instagram from '../../public/instagramm.svg'
import whatsapp from '../../public/whatssapp.svg'
import facebook from '../../public/facebook.svg'

const ContactUs = () => {
	return (
		<section id='directions' className={s.contact_us_section}>
			<iframe src="https://yandex.ru/map-widget/v1/?azimuth=6.21337303591669&display-text=%D0%90%D0%B4%D1%80%D0%B5%D1%81%3A%20%20%D1%83%D0%BB.%20%D0%AF%D0%BC%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2017%2C%20%D0%BE%D1%84.4%20%D0%BF%D0%BD-%D0%B2%D1%81%2C%2011%3A00-20%3A00&ll=104.319380%2C52.285696&mode=search&sctx=ZAAAAAgCEAAaKAoSCYf4hy09F1pAEd14d2SsIEpAEhIJLBGo%2FkEkzz8RQIo6cw8Jtz8iBgABAgMEBSgKOABA0s0GSAFiOnJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjpsM19kYzE3MzEyMl9leHBiO3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfd29ybGRfZm9ybXVsYT0wLjc6bDNfZGMxNzMxMjJfZXhwYjpyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjY6bDNfZGMxNzMxMjJfZXhwagJydZ0BzcxMPaABAKgBAL0BY%2Fi%2FPcIBCrHC05wE%2FLm29QPqAQDyAQD4AQCCAkjQkNC00YDQtdGBOiAg0YPQuy4g0K%2FQvNGB0LrQsNGPINGD0LsuLCAxNywg0L7RhC40INC%2F0L0t0LLRgSwgMTE6MDAtMjA6MDCKAgCSAgI2M5oCDGRlc2t0b3AtbWFwcw%3D%3D&sll=104.319380%2C52.285696&sspn=0.096106%2C0.035520&text=%D0%90%D0%B4%D1%80%D0%B5%D1%81%3A%20%20%D1%83%D0%BB.%20%D0%AF%D0%BC%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2017%2C%20%D0%BE%D1%84.4%20%D0%BF%D0%BD-%D0%B2%D1%81%2C%2011%3A00-20%3A00&z=13.91" frameborder="1" allowfullscreen="true"></iframe>
			<div className={s.contact_us_section__wrapper}>
				<div className={s.contact_us_section__wrapper__block}>
					<div className={s.contact_us_section__wrapper__block_main}>
						<h1>Наши контакты</h1>
						<h2>в городе Бишкек</h2>
						<hr />
						<p>Адрес: <br />
							г.Бишкек , Рынок "Дордой" <br />
							пн-вс, 00:00-23:59</p>
						<h3>Телефон:</h3>
						<h4>+996 708 815 888</h4>
						<a href='tel: +996-708-815-888'>заказать звонок</a>
						<h5>info@antikkargo.ru</h5>
						<div className={s.contact_us_section__wrapper__block_main__social}>
							<Image src={instagram} alt='vk_img'/>
							<Image src={whatsapp} alt='whatsapp_img'/>
							<Image src={facebook} alt='telegram_img'/>
						</div>
						<button>задать вопрос</button>
					</div>
				</div>
			</div>
		</section >
	);
};

export default ContactUs;