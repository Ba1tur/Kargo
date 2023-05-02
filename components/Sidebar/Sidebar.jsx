import React from "react";
import s from "./Sidebar.module.scss";
import cl from "classnames";
import { motion } from "framer-motion";

const SideBar = ({ showNav, setShowNav, openMenu, setOpenMenu }) => {
  const handleClick = () => {
    setShowNav(!showNav), setOpenMenu(!openMenu);
  };

  return (
    // Burger menu navbar
    <motion.div
      initial={{
        x: "100%",
        opacity: 0,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["100%", "100%", "50%", "50%", "0"],
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        borderRadius: 0,
        type: "spring",
        stiffness: 500,
      }}
      transition={{ delay: 0, duration: 0.5 }}
      className={s.show ? cl(s.sideNav, s.show) : s.sideNav}
    >
      <ul>
        <motion.li
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.7 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#services" onClick={handleClick}>
            Услуги
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#tariffs" onClick={handleClick}>
            Тарифы
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#partners" onClick={handleClick}>
            Наши партнеры и клиенты
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -20, opacity: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          whileHover={{ scale: 1.1, transition: "0" }}
        >
          <a href="#directions" onClick={handleClick}>
            Направление
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#contacts" onClick={handleClick}>
            Контакты
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default SideBar;
