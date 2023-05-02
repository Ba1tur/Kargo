import React from 'react';
import s from './DeliveryDetails.module.scss'
import train from '../../public/trainback.jpg'
import trainRide from '../../public/trainRide.jpg'
import сlothes from '../../public/clothes.svg'
import outerwear from '../../public/outerwear.svg'
import shoes from '../../public/shoes.svg'
import towel from '../../public/towel.svg'
import teapot from '../../public/teapot.svg'
import check from '../../public/check.svg'
import carService from '../../public/carService.png'
import bucket from '../../public/bucket.png'
import Image from 'next/image';

const DeliveryDetails = () => {
	return (
		<section id='services' className={s.delivery_section}>
			<div className={s.delivery_section__block}>
				<div className={s.delivery_section__cards}>
					<div className={s.delivery_section__cards__title}>
						<h1>КАКИЕ   УСЛУГИ</h1>
						<h2>мы <br /> Предоставляем</h2>
					</div>
					<div className={s.delivery_section_main}>
						<div className={s.delivery_card}>
							<Image className={s.delivery_card_img} src={train} alt='airplane_img' />
							<div className={s.delivery_card_price}>От 35 руб/кг</div>
							<div className={s.delivery_card__main}>
								<h2>Мы Компания</h2>
								<h3>Мы компания, доставляющая товары автогрузом для города России, гарантируя быструю и надежную доставку по доступной цене.</h3>
								{/* <h2>Авиаперевозки </h2>
								<h3>Срок доставки: от 2 дней</h3>
								<div style={{ display: 'flex', marginTop: '12px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Самый быстрый способ  доставки</p>
								</div>
								<div style={{ display: 'flex', marginTop: '17px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Минимальные риски  порчи груза</p>
								</div> */}
							</div>
						</div>
						{/* <div className={s.delivery_card}>
							<Image className={s.delivery_card_img} src={train} alt='airplane_img' />
							<div className={s.delivery_card_price}>От 6,8 $/кг</div>
							<div className={s.delivery_card__main}>
								<h2>Авиа + авто перевозки  </h2>
								<h3>Срок доставки: от 10 дней</h3>
								<div style={{ display: 'flex', marginTop: '12px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Оптимальное соотношение  цена/качество по стоимости и  надежности</p>
								</div>
								<div style={{ display: 'flex', marginTop: '17px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Разработано специально для  удаленных регионов</p>
								</div>
							</div>
						</div> */}
						<div className={s.delivery_card}>
							<Image className={s.delivery_card_img} src={trainRide} alt='airplane_img' />
							<div className={s.delivery_card_price}>От 35 руб/кг</div>
							<div className={s.delivery_card__main}>
								<h2>Мы - профессиональная компания</h2>
								<h3>Мы гарантируем безопасную доставку и страхование грузов, оперативно реагируем на потребности клиентов с помощью собственного автопарка.</h3>
								{/* <h3>Мы гарантируем безопасность и сохранность груза на протяжении всего маршрута доставки, а также предоставляем услуги по страхованию грузов. Мы ценим каждого клиента и готовы предложить индивидуальный подход и высокий уровень сервиса.</h3> */}
								{/* <h3>по доставке товаров автогрузом, предоставляющая услуги по доставке различных грузов в пределах города и по всей стране.</h3> */}
								{/* <h2>Автомобильные  перевозки</h2>
								<h3>Срок доставки: от 14 дней</h3>
								<div style={{ display: 'flex', marginTop: '12px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Самая низкая цена</p>
								</div>
								<div style={{ display: 'flex', marginTop: '17px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Подходит для регулярной  доставки больших объемов  товара</p>
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<div className={s.delivery_section_statistics}>
					<div className={s.delivery_section_statistics__header}>
						<div className={s.delivery_section_statistics__header_left_block}>
							<h1>Что</h1>
							<h2>мы <br /> доставляем</h2>
						</div>
						<div className={s.delivery_section_statistics__header_right_block}>
							По статистике за 2021-2022 годы в нашем обороте
						</div>
					</div>
					<div className={s.delivery_section_statistics__main}>
						<div className={s.delivery_section_statistics__main_card}>
							<Image src={сlothes} alt='сlothes_img' />
							<h4>55%</h4>
							<p>Одежда</p>
						</div>
						<div className={s.delivery_section_statistics__main_card}>
							<Image style={{ width: '62px' }} src={carService} alt='сlothes_img' />
							<h4>20%</h4>
							<p>Автозапчасти</p>
						</div>
						<div className={s.delivery_section_statistics__main_card}>
							<Image style={{ width: '62px' }} src={bucket} alt='сlothes_img' />
							<h4>5%</h4>
							<p>Стройматериалы</p>
						</div>

						<div className={s.delivery_section_statistics__main_card}>
							<Image src={towel} alt='сlothes_img' />
							<h4>5%</h4>
							<p>Постельное <br /> белье и <br /> ткани</p>
						</div>
						<div className={s.delivery_section_statistics__main_card}>
							<Image src={shoes} alt='сlothes_img' />
							<h4>15%</h4>
							<p>Обувь</p>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
};

export default DeliveryDetails;