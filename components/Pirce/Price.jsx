import React from 'react';
import s from './Price.module.scss'
import { delivery_price } from '@/constants/constants';
import ParticlesBackground from '../Particles/Particles';

const Price = () => {
    return (
        <>
            <div className={s.background}>
                {/* <div className={s.particle}>
                    <ParticlesBackground />
                </div> */}
                <div className={s.container}>
                    <div className={s.price}>
                        <div className={s.title}>
                            <h1>стоимость</h1>
                            <p>доставки товаров из Турции в <span>Иркутск</span></p>
                            <div className={s.important_block}>
                                <img src="/important.png" alt="" />
                                <h3>
                                    <span>Прямая доставка в г. Ухрюпинск не осуществляется.</span> <br />
                                    Мы доставим товар в Москву, затем отправим его в ваш город любой транспортной компанией.
                                </h3>
                            </div>
                            <div className={s.adaptive}>
                                <h3>
                                    <img src="/important.png" alt="" />
                                    <span>Прямая доставка в г. Ухрюпинск не осуществляется.</span>
                                </h3>
                                <h3>
                                    Мы доставим товар в Москву, затем отправим его в ваш город любой транспортной компанией.
                                </h3>
                            </div>
                            <div className={s.tovar}>

                            </div>
                        </div>
                        <div className={s.content}>
                            {delivery_price.map((del) => (
                                <div id={del.id} className={s.block}>
                                    <div className={s.first}>
                                        <p>{del.tarif}</p>
                                        <h1>{del.title}</h1>
                                        <div>
                                            <li> <img src={del.img} alt="img" /> {del.transport}</li>
                                            <li> <img src={del.img2} alt="img" /> {del.transport2}</li>
                                        </div>
                                        <h3>{del.delivery}</h3>
                                    </div>
                                    <div className={s.second}>
                                        <h1>{del.price}</h1>
                                        <p>Цена за <br /> доставку <br /> текстиля</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button>Связаться с нами</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Price;