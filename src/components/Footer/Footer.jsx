import Logo from "../../assets/icons/logo-white.svg";
import LogoAC from "../../assets/icons/logo-a-q.svg";
import LogoTG from "../../assets/icons/tg-logo.png";
import LogoVK from "../../assets/icons/vk-logo.png";
import LogoIG from "../../assets/icons/ig-logo.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto py-4 px-4 lg:py-6 lg:px-8 text-white">
        <img src={Logo} alt="Логотип компании" className="h-12 lg:h-16" />
        <div className="w-1/4">
          <h3 className="font-bold font-rodchenko text-2xl mb-3">
            Следите за новостями!
          </h3>
          <p className="mb-3" >
            Подписывайтесь на&nbsp;нас во&nbsp;всех соцсетях и&nbsp;будьте
            в&nbsp;курсе новостей!
          </p>
          <div className="flex gap-6" >
            <a href="#">
              <img src={LogoTG} alt="Логотип телеграм" />
            </a>
            <a href="#">
              <img src={LogoVK} alt="Логотип Вконтакте" />
            </a>
            <a href="#">
              <img src={LogoIG} alt="Логотип инстаграм" />
            </a>
          </div>
        </div>
        <div className="font-bold font-rodchenko text-2xl">
          &copy;&nbsp;2024
        </div>
        <img src={LogoAC} alt="Логотип игры" className="h-12 lg:h-16" />
      </footer>
    </div>
  );
};

export default Footer;
