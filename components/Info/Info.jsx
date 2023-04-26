import React from 'react';
import s from './Info.module.scss'

const Info = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.info_block}>
                    <div className={s.first}>
                        <div className={s.one}>
                            <li> <img src="/transport.png" alt="" /> Доставка авиа и <br />
                                автомобильным транспортом</li>
                            <li> <img src="/map.png" alt="" /> Безопасные и оптимальные маршруты <br /> с минимальной стоимостью</li>
                            <li> <img src="/money.png" alt="" /> Оплата доставки после получения. <br /> Возможна отсрочка</li>
                        </div>
                        <div className={s.two}>
                            <iframe width="660" height="387" src="https://www.youtube.com/embed/johcE5s525M?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className={s.second}>
                        <h1>Antik Kargo</h1>
                        <h3>доставка товаров из <br /> Турции с минимальным <br /> участием с вашей <br /> стороны</h3>
                        <p>
                            Ищите компанию, которая организует <br /> доставку грузов из Турции в Россию с <br /> минимальным вмешательством с вашей <br /> стороны?
                            <br />
                            <br />
                            Вы попали точно по адресу! Мы возьмем на <br /> себя все заботы об отправке, доставке, <br /> таможенном оформлении и сохранности <br /> вашего груза.
                            <br />
                            <br />
                            Огромный опыт и собственная <br /> инфраструктура позволяют нам выстроить <br /> маршруты доставки с лучшей ценой на <br /> рынке, а также гарантировать сохранность <br /> грузов и соблюдение сроков доставки.
                        </p>
                        <div className={s.under_block}>
                            <h1>
                                Работаем
                                <br />
                                с 2000 года
                            </h1>
                            <h1>
                                12 000 довольных
                                <br />
                                клиентов
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;