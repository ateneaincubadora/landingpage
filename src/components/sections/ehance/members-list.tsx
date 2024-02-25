import Card from "./card";

const cards = [
  {
    id: 1,
    name: "Gastón Palumbo",
    rol: "Rol - 1",
  },
  {
    id: 2,
    name: "Nahuel Plano",
    rol: "Rol - 2",
  },
  {
    id: 3,
    name: "Agustin Montenovo",
    rol: "Rol - 3",
  },
];

export default function MembersList() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:pb-2.5">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}
