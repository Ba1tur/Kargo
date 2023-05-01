import React from 'react';
import s from './ContactUs.module.scss'
import Image from 'next/image';
import vk from '../../public/vk.svg'
import telegram from '../../public/telegram.svg'
import whatsapp from '../../public/whatsapp.svg'

const ContactUs = () => {
	return (
		<section className={s.contact_us_section}>
			<iframe src="https://yandex.ru/map-widget/v1/?ll=37.432678%2C55.534125&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNDIyNzc4MDQ0EocB0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINC_0L7RgdC10LvQtdC90LjQtSDQktC-0YHQutGA0LXRgdC10L3RgdC60L7QtSwg0LTQtdGA0LXQstC90Y8g0JPQvtGA0L7QtNC40YnQtSwg0K_QvNGB0LrQsNGPINGD0LvQuNGG0LAsIDE3IgoNr7gVQhUnI15C&z=16.49" frameborder="1" allowfullscreen="true"></iframe>
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