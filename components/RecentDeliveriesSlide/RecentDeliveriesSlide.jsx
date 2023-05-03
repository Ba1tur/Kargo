import React from 'react';
import s from '../RecentDeliveries/RecentDeliveries.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import miniCar from '../../public/miniCar.svg'

import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay]);
import { Pagination, Navigation } from "swiper";
import Image from 'next/image';

const RecentDeliveriesSlide = ({ recentData }) => {
	console.log(recentData);
	return (
		<div>
			<Swiper
				loop
				modules={[Pagination, Navigation]}
				speed={2500}
				spaceBetween={20}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				grabCursor={true}
				pagination={{
					clickable: true,
				}}
				className="myRecentSwiper"
				breakpoints={{
					1080: {
						slidesPerView: 2,
						navigation: true,
					},
					1075: {
						slidesPerView: 1,
						navigation: false
					}
				}}
			>
				{recentData.map((item => {
					return (
						<SwiperSlide>
							<div className={s.recent_section__card}>
								<div className={s.recent_section__card_img}>
									<Image src={item.img} width={0} height={0} alt='man_img' />
									<h1>{item.imgTitle}</h1>
								</div>
								<div className={s.recent_section__card_info}>
									<h1>Адрес: г.{item.adress}</h1>
									<div className={s.recent_section__card_info__block}>
										<div>
											<div className={s.recent_section__card_info__block__title}>
												<Image src={miniCar} alt='airplane' />
												<h3>АВТО</h3>
											</div>
											<h4>Цена доставки: <br /> от <span>{item.priceStart} </span>до <span>{item.priceEnd}</span></h4>
										</div>
										<div className={s.recent_section__card_info__block__text}>
											<p>{item.text}</p>
										</div>
									</div>
									<h6>Номер телефона : <a href={item.link}>{item.number}</a> </h6>
								</div>
							</div>
						</SwiperSlide>
					)
				}))}
			</Swiper>
		</div>
	);
};

export default RecentDeliveriesSlide;