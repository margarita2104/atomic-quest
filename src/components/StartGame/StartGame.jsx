import StartGameImg from "../../assets/images/start-game-img.png";
import RobotDivider from "../Shared/RobotDivider";

const StartGame = () => {
  return (
    <section className="flex flex-col items-center mb-14">
      <button className="text-title hover:bg-red-700 mb-14">НАЧАТЬ ИГРУ</button>
      <RobotDivider />
      <div>
        <img src={StartGameImg} alt="Иллюстрация листа персонажа" />
      </div>
    </section>
  );
};

export default StartGame;
