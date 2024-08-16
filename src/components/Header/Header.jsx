import Logo from "../../assets/icons/logo-white.svg";

const Header = () => {
  return (
    <div className="bg-black">
      <header className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto py-4 px-4 lg:py-6 lg:px-8 text-white font-bold font-rodchenko text-2xl mb-14">
        <img src={Logo} alt="Логотип компании" className="h-12 lg:h-16" />
        <nav className="mt-4 lg:mt-0">
          <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <li>
              <a className="hover:text-red-600" href="/">ГЛАВНАЯ СТРАНИЦА</a>
            </li>
            <li>
              <a className="hover:text-red-600" href="#about">ОБ&nbsp;ИГРЕ</a>
            </li>
            <li>
              <a className="hover:text-red-600" href="#delivery">ДОСТАВКА И&nbsp;ОПЛАТА</a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-4 lg:mt-0">
          <button className="py-2 px-4 border border-white bg-red-600 hover:bg-red-700">
            КУПИТЬ
          </button>
          <button className="py-2 px-4 border border-white hover:bg-gray-800">
            ВОЙТИ
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;

