import React from 'react';
import s from './DeliveryDetails.module.scss'
import airplane from '../../public/airplane.png'
import train from '../../public/train.png'
import trains from '../../public/trains.png'
import сlothes from '../../public/clothes.svg'
import outerwear from '../../public/outerwear.svg'
import shoes from '../../public/shoes.svg'
import towel from '../../public/towel.svg'
import teapot from '../../public/teapot.svg'
import check from '../../public/check.svg'
import Image from 'next/image';

const DeliveryDetails = () => {
	return (
		<section className={s.delivery_section}>
			<div className={s.delivery_section__block}>
				<div className={s.delivery_section__cards}>
					<div className={s.delivery_section__cards__title}>
						<h1>КАК</h1>
						<h2>мы <br /> доставляем</h2>
					</div>
					<div className={s.delivery_section_main}>
						<div className={s.delivery_card}>
							<Image className={s.delivery_card_img} src={airplane} alt='airplane_img' />
							<div className={s.delivery_card_price}>От 7 $/кг</div>
							<div className={s.delivery_card__main}>
								<h2>Авиаперевозки </h2>
								<h3>Срок доставки: от 2 дней</h3>
								<div style={{ display: 'flex', marginTop: '12px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Самый быстрый способ  доставки</p>
								</div>
								<div style={{ display: 'flex', marginTop: '17px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Минимальные риски  порчи груза</p>
								</div>
							</div>
						</div>
						<div className={s.delivery_card}>
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
						</div>
						<div className={s.delivery_card}>
							<Image className={s.delivery_card_img} src={trains} alt='airplane_img' />
							<div className={s.delivery_card_price}>От 4,5 $/кг</div>
							<div className={s.delivery_card__main}>
								<h2>Автомобильные  перевозки</h2>
								<h3>Срок доставки: от 14 дней</h3>
								<div style={{ display: 'flex', marginTop: '12px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Самая низкая цена</p>
								</div>
								<div style={{ display: 'flex', marginTop: '17px', alignItems: 'center' }}>
									<Image src={check} alt='check' />
									<p>Подходит для регулярной  доставки больших объемов  товара</p>
								</div>
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
							<Image src={outerwear} alt='сlothes_img' />
							<h4>20%</h4>
							<p>Верхняя <br /> одежда</p>
						</div>
						<div className={s.delivery_section_statistics__main_card}>
							<Image src={shoes} alt='сlothes_img' />
							<h4>15%</h4>
							<p>Обувь</p>
						</div>
						<div className={s.delivery_section_statistics__main_card}>
							<Image src={towel} alt='сlothes_img' />
							<h4>5%</h4>
							<p>Постельное <br /> белье и <br /> ткани</p>
						</div>
						<div className={s.delivery_section_statistics__main_card}>
							<Image src={teapot} alt='сlothes_img' />
							<h4>5%</h4>
							<p>Другие <br /> товары</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DeliveryDetails;