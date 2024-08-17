import Char1 from "../../assets/images/char-1.png";
import Char2 from "../../assets/images/char-2.png";
import Char3 from "../../assets/images/char-3.png";

const CHARACTERS = [
  {
    id: 0,
    name: "ЛЕДИ С ПОЛЕНОМ",
    descr: "Полуэльф, рейнджер (лесник)",
    img: Char1,
  },
  {
    id: 1,
    name: "ВЕРХОВНЫЙ ВОЖДЬ",
    descr: "Дракон (верховный совет СССР), воин",
    img: Char2,
  },
  {
    id: 2,
    name: "АЙЗЕК ОЗБОРНОВСКИЙ",
    descr: "Гном (партийная номенклатура), бард (бард с грушинского фестиваля)",
    img: Char3,
  },
];

const Characters = () => {
  return (
    <section className="flex flex-col items-center mb-14">
      <h2 className="text-title mb-14 w-fit">ПЕРСОНАЖИ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 items-start">
        {CHARACTERS.map((character) => (
          <div
            key={character.id}
            className="flex flex-col items-center justify-center"
          >
            <img
              className="drop-shadow-2xl mb-7"
              src={character.img}
              alt="Изображение персонажа"
            />
            <div className="min-h-36 flex flex-col items-center justify-between">
              <h3 className="font-rodchenko text-xl font-bold mb-3">
                {character.name}
              </h3>
              <p className="mb-3 text-center">{character.descr}</p>
              <button className="py-2 px-4 bg-white hover:bg-stone-300">
                Просмотр персонажа
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Characters;
