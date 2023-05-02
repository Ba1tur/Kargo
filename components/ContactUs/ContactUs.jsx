import React from 'react';
import s from './ContactUs.module.scss'
import Image from 'next/image';
import instagram from '../../public/instagramm.svg'
import whatsapp from '../../public/whatssapp.svg'
import facebook from '../../public/facebook.svg'

const ContactUs = () => {
	return (
		<section id='directions' className={s.contact_us_section}>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46782.68009709711!2d74.4935407486328!3d42.874585300000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec97018d7de53%3A0x2d90a14cd613b8f4!2z0KDRi9C90L7QuiDQtNC-0YDQtNC-0Lk!5e0!3m2!1sru!2skg!4v1683036979996!5m2!1sru!2skg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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