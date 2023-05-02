import React from "react";
import Image from "next/image";
import s from "./Logistic.module.scss";
import mask_bg from "../../public/mask_bg.png";

const Logistic = () => {
  return (
    <div className={s.logistic_section}>
      <div className={s.logistic_section__block}>
        <h1>Профессиональная логистика за обоснованную цену</h1>
        <p> Большой опыт нашей компании и профессиональный подход к каждому заказу
          позволяют нам: Учитывать каждую деталь. Умение слушать и слышать все
          пожелания Заказчика, обязательно обращать внимание на специфику
          перевозимого груза. Выполнение абсолютно всех обязательств перед
          Заказчиком. Всегда!</p>
      </div>
    </div>
  );
};

export default Logistic;
