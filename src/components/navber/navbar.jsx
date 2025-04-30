import {
  ChevronDown,
  HeartPlus,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";
import logo from "../../assets/svg/logo.svg";
import { translations } from "../../../i18n";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  return (
    <header className="my-6 ">
      <div className="container1 flex flex-col gap-4">
        <div className=" flex items-center  gap-4 justify-between">
         <Link to={'/'}> <img className="w-[113px] h-8 cursor-pointer" src={logo} alt="logo" /></Link>
          <button className="flex items-center gap-4 bg-[#ffbe1f]  hover:bg-[#ffc01fa3] transition-all duration-300 p-2 rounded-lg cursor-pointer">
            <Menu className="" />
            <h3 className="max-[350px]:hidden">{t.catalog}</h3>
          </button>
          <form className="border-2 border-[#ffbe1f] flex items-center rounded-lg  justify-between w-[40%] max-[1071px]:hidden">
            <input
              className="outline-none pl-2 w-full"
              placeholder="Искать товары"
              type="search"
            />

            <div className="py-2 px-4 cursor-pointer bg-[#ffbe1f] inline-block rounded-[0_5px_5px_0]">
              <Search className="" />
            </div>
          </form>
          <div className="flex items-center gap-5 max-[1071px]:hidden">
            <Link to={'/basket'} className="flex flex-col items-center gap-0.5 cursor-pointer">
              <ShoppingCart />
              <p className="text-xs text-gray-600">{t.cart}</p>
            </Link>
            <Link to={'/like '} className="flex flex-col items-center text-center gap-0.5 cursor-pointer  max-[1230px]:hidden ">
              <HeartPlus />
              <p className="text-xs text-gray-600"> {t.favorites}</p>
            </Link>
          </div>
          <button className="px-4 py-2 rounded-lg cursor-pointer border-2 border-[#ffd670] hover:bg-[#ffedc2] transition-all duration-300 text-sm max-[555px]:hidden">
            {t.login}
          </button>
          <div className="flex items-center gap-x-1 justify-between max-[450px]:hidden">
            <button
              className={`cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
                lang === "ru"
                  ? "bg-yellow-400 text-black"
                  : "bg-yellow-100 text-gray-500"
              }`}
              onClick={() => setLang("ru")}
            >
              RUS <span>/</span>
            </button>
            <button
              className={`cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
                lang === "uz"
                  ? "bg-yellow-400 text-black"
                  : "bg-yellow-100 text-gray-500"
              }`}
              onClick={() => setLang("uz")}
            >
              UZB
            </button>
          </div>
        </div>
        <div className="hidden max-[1071px]:block">
          <form className="border-2 border-[#ffbe1f] flex items-center rounded-lg  justify-between w-full">
            <input
              className="outline-none pl-2 w-full"
              placeholder="Искать товары"
              type="search"
            />

            <div className="py-2 px-4 cursor-pointer bg-[#ffbe1f] inline-block rounded-[0_5px_5px_0]">
              <Search className="" />
            </div>
          </form>
        </div>
        <div className="flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap max-w-full ">
          <a
            href="#"
            className="text-[#7b7979] text-sm font-medium hover:text-black relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full"
          >
            Смартфоны и гаджеты
          </a>
          <a
            href="#"
            className="text-[#7b7979] text-sm font-medium hover:text-black relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full"
          >
            Ноутбуки и компьютеры
          </a>
          <a
            href="#"
            className="text-[#7b7979] text-sm font-medium hover:text-black relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full"
          >
            ТВ и проекторы
          </a>
          <a
            href="#"
            className="text-[#7b7979] text-sm font-medium hover:text-black relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full"
          >
            Аудиотехника
          </a>
          <a
            href="#"
            className="text-[#7b7979] text-sm font-medium hover:text-black relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full"
          >
            Транспорт
          </a>
          <a
            href="#"
            className="text-[#7b7979] text-sm font-medium hover:text-black relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full"
          >
            Наборы
          </a>
          <a
            href="#"
            className="text-[#7b7979] text-sm font-medium hover:text-black relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full"
          >
            Техника для дома
          </a>
          <a
            href="#"
            className="text-[#7b7979] text-sm font-medium hover:text-black relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full"
          >
            Техника для кухни
          </a>
          <div className="flex items-center gap-1 cursor-pointer">
            <p>Ещё</p>
            <ChevronDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
