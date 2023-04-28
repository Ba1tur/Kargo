import React from "react";
import Image from "next/image";
import classes from "./Logistic.module.scss";
import mask_bg from "../../public/mask_bg.png";

const Logistic = () => {
  return (
    <div className={classes.logistic}>
      <Image
        className={classes.logistic__bg_img}
        src={mask_bg}
        height={450}
        alt="logistic"
      />
      <div className={classes.logistic__content}>
        <h2 className={classes.logistic__title}>
          Профессиональная логистика за обоснованную цену
        </h2>
        <p className={classes.logistic__text}>
          Большой опыт нашей компании и профессиональный подход к каждому заказу
          позволяют нам: Учитывать каждую деталь. Умение слушать и слышать все
          пожелания Заказчика, обязательно обращать внимание на специфику
          перевозимого груза. Выполнение абсолютно всех обязательств перед
          Заказчиком. Всегда!
        </p>
      </div>
    </div>
  );
};

export default Logistic;
