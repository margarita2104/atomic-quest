import RobotRed from "../../assets/icons/robot-red.png";
import RobotBlack from "../../assets/icons/robot-black.png";

const RobotDivider = () => {
  return (
    <div className="flex flex-wrap mb-14 gap-6 sm:gap-10 md:gap-16 lg:gap-32 xl:gap-64 overflow-hidden justify-center">
      <div>
        <img src={RobotRed} alt="Декоративный элемент" />
      </div>
      <div className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-14">
        <img src={RobotBlack} alt="Декоративный элемент" />
        <img src={RobotBlack} alt="Декоративный элемент" />
      </div>
      <div className="flex gap-4 sm:gap-6 md:gap-10 lg:gap-14">
        <img src={RobotBlack} alt="Декоративный элемент" />
        <img src={RobotRed} alt="Декоративный элемент" />
      </div>
      <div>
        <img src={RobotRed} alt="Декоративный элемент" />
      </div>
    </div>
  );
};

export default RobotDivider;
