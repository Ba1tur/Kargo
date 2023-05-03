import React from 'react';
import s from './DeliveryDetails.module.scss'
import service from '../../public/service.jpg'
import save from '../../public/save.jpg'
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
						<h1>НАШИ  УСЛУГИ</h1>
					</div>
					<div className={s.delivery_section_main}>
						<div className={s.delivery_card}>
							<Image className={s.delivery_card_img} src={service} alt='airplane_img' />
							<div className={s.delivery_card__main}>
								<h2>Складское хранение</h2>
								<h3>Ответственное хранение товара на складе</h3>
								<h3>Ответственное хранение мелкоштучных товаров</h3>
								<h3>Прямая перегрузка товаров из а/м в а/м, перегрузка через склад</h3>
							</div>
						</div>
						<div className={s.delivery_card}>
							<Image className={s.delivery_card_img} src={save} alt='airplane_img' />
							<div className={s.delivery_card__main}>
								<h2>Складские услуги</h2>
								<h3>Выполнение всех погрузо-разгрузочных работ</h3>
								<h3>Маркировка, палетирование, упаковка грузов</h3>
								<h3>Сортировка и комплектация заказов на наших складских площадях</h3>
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