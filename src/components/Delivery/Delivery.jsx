import DeliveryImg1 from "../../assets/icons/delivery-1.png";
import DeliveryImg2 from "../../assets/icons/delivery-2.png";
import DeliveryImg3 from "../../assets/icons/delivery-3.png";

const Delivery = () => {
  return (
    <section id="delivery" className="flex flex-col items-center mb-14">
      <h2 className="text-title mb-14">ДОСТАВКА</h2>
      <div className="flex flex-wrap mb-14 gap-6 sm:gap-10 md:gap-16 lg:gap-32 xl:gap-64 items-center justify-center">
        <img className="h-fit" src={DeliveryImg1} alt="Лого компании доставки" />
        <img className="h-fit" src={DeliveryImg2} alt="Лого компании доставки" />
        <img className="h-fit" src={DeliveryImg3} alt="Лого компании доставки" />
      </div>
      <p className=" w-2/3 text-center">
      После выбора способа доставки появится меню со&nbsp;списком пунктов выдачи заказов, где вы&nbsp;сможете выбрать подходящую для вас точку выдачи. Также можно нажать &laquo;Выбрать на&nbsp;карте&raquo;, и&nbsp;вы&nbsp;увидите все ближайшие к&nbsp;вам точки с&nbsp;информацией о&nbsp;примерной стоимости и&nbsp;сроках доставки.
      </p>
    </section>
  );
};

export default Delivery;
