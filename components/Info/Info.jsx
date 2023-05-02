import React from 'react';
import s from './Info.module.scss'

const Info = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.info_block}>
                    <div className={s.first}>
                        <div className={s.one}>
                            <li> <img src="/transport.png" alt="" /> Доставка  
                                автомобильным <br /> транспортом</li>
                            <li> <img src="/map.png" alt="" /> Безопасные и оптимальные маршруты <br /> с минимальной стоимостью</li>
                            <li> <img src="/money.png" alt="" /> Оплата доставки после получения.</li>
                        </div>
                        <div className={s.two}>
                            <video autoPlay controls loop muted style={{
                                width: '100%',
                                height: '387px'
                            }}>
                                <source src="/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className={s.second}>
                        <h1>Damla<span style={{color: 'red'}}>Rus</span></h1>
                        <h3>доставка товаров из <br /> из Кыргызстана в города <br /> Росси - <br /> <span style={{color: 'red' , fontWeight: 'bold'}}>Москва</span>  <br /> <span style={{color: 'red' , fontWeight: 'bold'}}>Самара</span> , <br /> <span style={{color: 'red' , fontWeight: 'bold'}}>Казань</span>  , <br /> <span style={{color: 'red' , fontWeight: 'bold'}}>Пятигорск</span>  с   минимальным <br /> участием с   вашей  стороны</h3>
                        <div className={s.video}>
                            <video autoPlay controls loop muted style={{
                                width: '100%', height: '100%'
                            }}>
                                < source src="/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <p>
                            Ищите компанию, которая организует <br /> доставку грузов из Кыргызстана в Россию с <br /> минимальным вмешательством с вашей <br /> стороны?
                            <br />
                            <br />
                            Вы попали точно по адресу! Мы возьмем на <br /> себя все заботы об отправке, доставке, <br /> сохранности <br /> вашего груза.
                            <br />
                            <br />
                            Огромный опыт и собственная <br /> инфраструктура позволяют нам выстроить <br /> маршруты доставки с лучшей ценой на <br /> рынке, а также гарантировать сохранность <br /> грузов и соблюдение сроков доставки.
                        </p>
                        <div className={s.under_block}>

                            <h1>
                                5 000 довольных
                                <br />
                                клиентов
                            </h1>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Info;