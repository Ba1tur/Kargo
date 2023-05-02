import React from "react";
import classes from "./Services.module.scss";
import classNames from "classnames";
import Image from "next/image";
import clock from "../../public/clock.png";
import mask from "../../public/mask.png";
import mask1 from "../../public/mask1.png";
import image42 from "../../public/image42.png";
import group1 from "../../public/group1.png";
import group from "../../public/group.png";

const Services = () => {
  return (
    <div className={classes.services__block}>
      <div className={classes.services}>
        <div className={classNames(classes.services__content)}>
          <div className={classes.services__item}>
            <div className={classes.services__img}>
              <Image
                className={classes.card__img}
                src={clock}
                width={90}
                height={90}
                alt="clock"
              />
            </div>
            <div className={classes.services__text}>
              <p className={classes.services__rules}>
                Сервис на высоком уровне, находя оптимальный и быстрый вариант.
              </p>
            </div>
          </div>
          <div className={classes.services__item}>
            <div className={classes.services__img}>
              <Image
                className={classes.card__img}
                src={mask}
                width={90}
                height={90}
                alt="clock"
              />
            </div>
            <div className={classes.services__text}>
              <p className={classes.services__rules}>
                Сохранность груза и своевременность доставки.
              </p>
            </div>
          </div>
          <div className={classes.services__item}>
            <div className={classes.services__img}>
              <Image
                className={classes.card__img}
                src={mask1}
                width={90}
                height={90}
                alt="clock"
              />
            </div>
            <div className={classes.services__text}>
              <p className={classes.services__rules}>
                Выполнение всех погрузо-разгрузочных работ
              </p>
            </div>
          </div>

          <div className={classes.services__item}>
            <div className={classes.services__img}>
              <Image
                className={classes.card__img}
                src={image42}
                width={90}
                height={90}
                alt="clock"
              />
            </div>
            <div className={classes.services__text}>
              <p className={classes.services__rules}>
                Круглосуточное отслеживание груза
              </p>
            </div>
          </div>
          <div className={classes.services__item}>
            <div className={classes.services__img}>
              <Image
                className={classes.card__img}
                src={group1}
                width={90}
                height={90}
                alt="clock"
              />
            </div>
            <div className={classes.services__text}>
              <p className={classes.services__rules}>
                Легальное оформление груза
              </p>
            </div>
          </div>
          <div className={classes.services__item}>
            <div className={classes.services__img}>
              <Image
                className={classes.card__img}
                src={group}
                width={90}
                height={90}
                alt="clock"
              />
            </div>
            <div className={classes.services__text}>
              <p className={classes.services__rules}>
                Короткие сроки за адекватную и доступную цену.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
