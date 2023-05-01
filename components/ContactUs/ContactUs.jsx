import React from 'react';
import s from './ContactUs.module.scss'
import Image from 'next/image';
import vk from '../../public/vk.svg'
import telegram from '../../public/telegram.svg'
import whatsapp from '../../public/whatsapp.svg'

const ContactUs = () => {
	return (
		<section className={s.contact_us_section}>
			<iframe src="https://yandex.ru/map-widget/v1/?ll=74.625022%2C42.937845&mode=search&oid=45011742949&ol=biz&z=16.24" frameborder="1" allowfullscreen="true"></iframe>
			<div className={s.contact_us_section__wrapper}>
				<div className={s.contact_us_section__wrapper__block}>
					<div className={s.contact_us_section__wrapper__block_main}>
						<h1>Наши контакты</h1>
						<h2>в Москве</h2>
						<hr />
						<p>Адрес: <br />
							ул. Ямская ул., 17, оф.4
							пн-вс, 11:00-20:00</p>
						<h3>Телефон:</h3>
						<h4>+7 916 330 33 05</h4>
						<a href="#">заказать звонок</a>
						<h5>info@antikkargo.ru</h5>
						<div className={s.contact_us_section__wrapper__block_main__social}>
							<Image src={vk} alt='vk_img' />
							<Image src={whatsapp} alt='whatsapp_img' />
							<Image src={telegram} alt='telegram_img' />
						</div>
						<button>задать вопрос</button>
					</div>
				</div>
			</div>
		</section >
	);
};

export default ContactUs;