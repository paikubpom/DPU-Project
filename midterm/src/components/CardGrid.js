import Card from "./Card";

export default function CardGrid() {
  const cards = [];
  for (let index = 0; index < 10; index++) {
    cards.push(<Card key={index + 1} number={index + 1} />);
  }

  return (
    <div
      className="grid grid-cols-q
            sm:grid-cols-1
            md:grid-cols-3
            lg:grid-cols-4
            gap-4 p-4"
    >
      {cards}
    </div>
  );
}
