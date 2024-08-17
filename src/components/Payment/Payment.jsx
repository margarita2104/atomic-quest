import PaymentImg1 from "../../assets/icons/payment-1.png";
import PaymentImg2 from "../../assets/icons/payment-2.png";
import PaymentImg3 from "../../assets/icons/payment-3.png";

const Payment = () => {
  return (
    <section className="flex flex-col items-center mb-14">
      <h2 className="text-title mb-14">ОПЛАТА</h2>
      <p className=" w-2/3 text-center mb-14">
        Оформляя заказ на&nbsp;нашем сайте, вы&nbsp;можете осуществить оплату
        с&nbsp;помощью банковской карты
      </p>
      <div className="flex flex-wrap gap-6 sm:gap-10 md:gap-16 lg:gap-32 xl:gap-64 items-center justify-center">
        <img
          className="h-fit"
          src={PaymentImg1}
          alt="Лого компании доставки"
        />
        <img
          className="h-fit"
          src={PaymentImg2}
          alt="Лого компании доставки"
        />
        <img
          className="h-fit"
          src={PaymentImg3}
          alt="Лого компании доставки"
        />
      </div>
    </section>
  );
};

export default Payment;
