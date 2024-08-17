import WandBlue from "../../assets/icons/wand-blue.png";
import AtomRed from "../../assets/icons/atom-red.png";
import RobotRed from "../../assets/icons/robot-red.png";
import RobotBlack from "../../assets/icons/robot-black.png";

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center mb-14">
      <h1 className="text-title mb-14 w-fit">OБ ИГРЕ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        <div className="flex items-center p-4">
          <img className="mr-4" src={WandBlue} alt="Декоративный элемент" />
          <span>
            Погрузитесь в&nbsp;невероятный мир победившего киберсоциализма
          </span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={AtomRed} alt="Декоративный элемент" />
          <span>Cтаньте воином справедливости</span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={WandBlue} alt="Декоративный элемент" />
          <span>Cражайтесь с&nbsp;легендарными монстрами</span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={AtomRed} alt="Декоративный элемент" />
          <span>Распутывайте хитроумные партийные интриги</span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={WandBlue} alt="Декоративный элемент" />
          <span>Исследуйте необъятные миры</span>
        </div>
        <div className="flex items-center p-4">
          <img className="mr-4" src={AtomRed} alt="Декоративный элемент" />
          <span>Cмело ввязывайтесь в&nbsp;любые неприятности</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mb-14">
        <div>
          <img src={RobotRed} alt="Декоративный элемент" />
        </div>
        <div>
          <img src={RobotBlack} alt="Декоративный элемент" />
        </div>
        <div>
          <img src={RobotRed} alt="Декоративный элемент" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center" >
        <p className="text-center mb-6">
          Вы&nbsp;вольны делать всё, что вам вздумается в&nbsp;этом уникальном
          мире, а&nbsp;результат ваших действий будет зависеть от&nbsp;Вождя
          Революции Кибернетических пролетариев и&nbsp;вашей удачи!
        </p>
        <p className="text-center mb-6">
          Земли&nbsp;&mdash; беспилотным тракторам, а&nbsp;фабрики&nbsp;&mdash;
          роботизированным рабочим!
        </p>
        <p className=" mb-6 py-2 px-2 bg-black text-white font-bold font-rodchenko text-center w-fit">
          11010000 10111111 11010001 10000000 11010000 10111000 11010000
          10110010 11010000 10110101 11010001 10000010
        </p>
        <p className="text-center">
          Испытайте совершенно особый игровой опыт в&nbsp;известнейшей ролевой
          игре в&nbsp;мире!
        </p>
      </div>
    </section>
  );
};

export default About;
