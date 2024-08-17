import RobotRed from "../../assets/icons/robot-red.png";
import RobotBlack from "../../assets/icons/robot-black.png";
import MsgBlack from "../../assets/icons/msg-img-black.png";
import MsgRed from "../../assets/icons/msg-img-red.png";
import MailImg from "../../assets/icons/mail.png";
import WhatsAppImg from "../../assets/icons/whatsapp.png";
import PhoneImg from "../../assets/icons/phone.png";
import ChatImg from "../../assets/icons/chat.png";

const Contact = () => {
  return (
    <section className="flex flex-col items-center mb-14">
      <div className="flex flex-wrap mb-14 gap-3 sm:gap-5 md:gap-8 lg:gap-16 xl:gap-28 overflow-hidden justify-center">
        <div>
          <img src={RobotRed} alt="Декоративный элемент" />
        </div>
        <div>
          <img src={MsgBlack} alt="Декоративный элемент" />
        </div>
        <div className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-14">
          <img src={RobotBlack} alt="Декоративный элемент" />
          <img src={RobotBlack} alt="Декоративный элемент" />
        </div>
        <div>
          <img src={MsgRed} alt="Декоративный элемент" />
        </div>
        <div className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-14">
          <img src={RobotBlack} alt="Декоративный элемент" />
          <img src={RobotRed} alt="Декоративный элемент" />
        </div>
        <div>
          <img src={MsgBlack} alt="Декоративный элемент" />
        </div>
        <div>
          <img src={RobotRed} alt="Декоративный элемент" />
        </div>
      </div>

      <h2 className="text-title mb-14">СВЯЗАТЬСЯ</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-14">
        <div className="flex items-center p-4">
          <img className="mr-4" src={MailImg} alt="Электронная почта" />
          <span>
            электронная почта{" "}
            <a
              className="hover:text-red-600"
              href="mailto:support@atomicquest.com"
            >
              support@atomicquest.com
            </a>
          </span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={WhatsAppImg} alt="WhatsApp" />
          <span>
            служба поддержки в&nbsp;
            <a className="hover:text-red-600" href="#">
              WhatsApp
            </a>
          </span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={PhoneImg} alt="Телефон для связи" />
          <span>
            телефон горячей линии <br />
            <a className=" font-rodchenko text-xl font-bold text-red-600 hover:text-red-600" href="tel:+8005553535"> +8&nbsp;800&nbsp;555 35&nbsp;35</a>{" "}
          </span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={ChatImg} alt="Онлайн чат" />
          <span>онлайн-чат на&nbsp;сайте</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
