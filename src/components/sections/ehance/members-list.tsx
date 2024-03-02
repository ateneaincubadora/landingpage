import Card from "./card";

const cards = [
  {
    id: 1,
    name: "Javier Sancho",
    rol: "Founder",
    image: "/assets/images/javier-sancho.webp",
  },
  {
    id: 2,
    name: "Francisco Pardo",
    rol: "CEO",
    image: "/assets/images/francisco-pardo.webp",
  },
  {
    id: 3,
    name: "Jeremías Carrió",
    rol: "Co-founder",
    image: "/assets/images/jeremias-carrio.webp",
  },
];

export default function MembersList() {
  return (
    <section className=" mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}
