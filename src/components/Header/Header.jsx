import Logo from "../../assets/icons/logo-white.svg";

const Header = () => {
  return (
    <div className="bg-black flex justify-center" >
      <header className="flex w-full max-w-7xl justify-between py-8 items-center text-white font-bold font-rodchenko">
        <img src={Logo} alt="Логотип компании" />
        <nav>
          <ul className="flex items-center gap-20">
            <li>ГЛАВНАЯ СТРАНИЦА</li>
            <li>ОБ&nbsp;ИГРЕ</li>
            <li>ДОСТАВКА И&nbsp;ОПЛАТА</li>
          </ul>
        </nav>
        <div className="flex items-center gap-20">
          <button className="py-2 px-4 border border-white bg-red-600" >КУПИТЬ</button>
          <button className="py-2 px-4 border border-white" >ВОЙТИ</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
