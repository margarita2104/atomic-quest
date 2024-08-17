import WandBlue from "../../assets/icons/wand-blue.png";
import WandRed from "../../assets/icons/wand-red.png";
import RobotDivider from "../Shared/RobotDivider";

const Package = () => {
  return (
    <section className="flex flex-col items-center mb-14">
      <h2 className="text-title w-fit mb-14">КОМПЛЕКТАЦИЯ</h2>
      <p className="text-center mb-2 font-semibold">
        Покупая нашу игру вы&nbsp;получаете как физический набор, так
        и&nbsp;цифровую версии игры:
      </p>
      <p className="text-center mb-14">
        64-страничная книга приключения, где есть всё необходимое, чтобы начать
        игру
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        <div className="flex items-center p-4">
          <img className="mr-4" src={WandBlue} alt="Декоративный элемент" />
          <span>
            32-страничная книга правил для игры персонажами 1&ndash;5-го уровней
          </span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={WandRed} alt="Декоративный элемент" />
          <span>
            5&nbsp;готовых персонажей, каждый со&nbsp;своим бланком
            и&nbsp;необходимыми примечаниями
          </span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={WandBlue} alt="Декоративный элемент" />
          <span>6&nbsp;игровых костей</span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={WandRed} alt="Декоративный элемент" />
          <span>Размер коробки: 293&times;230&times;54&nbsp;мм</span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={WandBlue} alt="Декоративный элемент" />
          <span>Вес: 0.685&nbsp;кг</span>
        </div>
      </div>
      <RobotDivider />
    </section>
  );
};

export default Package;
