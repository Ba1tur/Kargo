import React from 'react';
import s from '../RecentDeliveries/RecentDeliveries.module.scss'
import { Swiper, SwiperSlide  } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import manwithbox from '../../public/manWithBox.png'
import folding from '../../public/folding.png'
import miniAirplane from '../../public/miniAirplane.svg'
import miniCar from '../../public/miniCar.svg'

import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay]);
import { Pagination, Navigation  } from "swiper";
import Image from 'next/image';

const RecentDeliveriesSlide = ({recentData}) => {
	console.log(recentData);
	return (
		<div>
			<Swiper
				pagination={true}
				modules={[Pagination, Navigation ]}
				speed={1200}
				spaceBetween={20}
				autoplay={{delay: 2000}}
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
									<Image src={manwithbox} alt='man_img' />
									<h1>{item.imgTitle}</h1>
								</div>
								<div className={s.recent_section__card_info}>
									<h2>перевозка груза</h2>
									<h1>Стамбул → {item.title}</h1>
									<div className={s.recent_section__card_info__block}>
										<div>
											<div className={s.recent_section__card_info__block__title}>
												<Image src={miniAirplane} alt='airplane' />
												<h3>{item.typeDelivery}</h3>
											</div>
											<h4>Срок доставки: {item.day} дней</h4>
										</div>
										<div className={s.recent_section__card_info__block__text}>
											<p>{item.text}</p>
										</div>
									</div>
									<h6>Стоимость доставки - {item.price}</h6>
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