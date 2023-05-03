import React from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import aurotur from '../../public/aerotour (1).png'
import bika from '../../public/bikatour (3).png'
import kodor from '../../public/kodor.png'
import shumkar from '../../public/shumkark.jpg'
import Image from 'next/image';
import s from './CustomerSlide.module.scss'

const CustomerSlide = () => {
	return (
		<div className={s.customer__slide_section}>
			<Swiper
				loop
				speed={1500}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				slidesPerView={4}
				grabCursor={true}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					1000: {
						slidesPerView: 4
					},
					760: {
						slidesPerView: 3
					},
					480: {
						slidesPerView: 2
					},
					320: {
						slidesPerView: 1
					},
				}}
				modules={[Autoplay]}
				className='CustomerSlideSwiper'
			>
				<SwiperSlide>
					<Image src={aurotur} alt='aurotur_img' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={bika} alt='aurotur_img' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={kodor} alt='aurotur_img' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={shumkar} alt='aurotur_img' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={aurotur} alt='aurotur_img' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={bika} alt='aurotur_img' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={kodor} alt='aurotur_img' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={shumkar} alt='aurotur_img' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default CustomerSlide;