import React from "react";
import Instagram from "../../assets/imgs/instagram.webp";
import Facebook from "../../assets/svg/facebook.svg";
import Telegram from "../../assets/svg/telegram.svg";
import Ok from "../../assets/svg/ok.svg";
import Tiktok from "../../assets/svg/tiktok.svg";
import Cycounter from '../../assets/imgs/cycounter.png'
const Footer = () => {
  return (
    <footer className="bg-[#25272c]">
      <div className="container1 py-6">
        <div className="grid grid-cols-4 gap-5 max-[880px]:grid-cols-3 max-[650px]:grid-cols-2 max-[500px]:grid-cols-1">
          <div className="flex flex-col gap-3">
            <a className="text-gray-500" href="#">
              Документы
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Общие условия продажи
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Устав
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Свидетельство
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-gray-500" href="#">
              Сервис
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Время намаза
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Рассрочка в Исламе
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Продавайте на alif shop!
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Возвраты
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-gray-500" href="#">
              Каталог товаров
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Смартфоны и телефоны{" "}
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Гаджеты
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Аксессуары для телефонов
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Часы и аксессуары
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="#"
            >
              Cопутствующие товары
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-gray-500" href="#">
              Мы в соц-медиа
            </a>
            <div className="flex items-center gap-2">
              <img className="cursor-pointer" src={Instagram} alt="Instagram" />
              <img className="cursor-pointer" src={Facebook} alt="Facebook" />
              <img className="cursor-pointer" src={Telegram} alt="Telegram" />
              <img className="cursor-pointer" src={Ok} alt="Telegram" />
              <img className="cursor-pointer" src={Tiktok} alt="Telegram" />
            </div>
            <a className="text-gray-500" href="#">
              Справочная служба
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="mailto: @alifshop_uz "
            >
              {" "}
              @alifshop_uz{" "}
            </a>
            <a
              className="text-white hover:text-[#ffbe1e] transition-all duration-300"
              href="tel:+998 555 12 12 12"
            >
              +998 555 12 12 12
            </a>
          </div>
        </div>
        <hr className="my-6 text-[#3d434d]" />
        <div className="flex items-center justify-between">
          <p className="text-gray-500">2025 © alifshop.uz</p>
          <img className="rounded-lg cursor-pointer" src={Cycounter} alt="Cycounter"  />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
