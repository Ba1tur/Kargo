import React from 'react';
import s from './RecentDeliveries.module.scss'
import RecentDeliveriesSlide from '../RecentDeliveriesSlide/RecentDeliveriesSlide';
import { recentData } from '../../constants/RecentDeliveriesSlide'

const RecentDeliveries = () => {
	return (
		<section className={s.recent_section}>
			<h2 className={s.recent_section_title}>Наши Адреса</h2>
			<div className={s.recent_section__slides}>
				<RecentDeliveriesSlide recentData={recentData} />
			</div>
		</section>
	);
};

export default RecentDeliveries;