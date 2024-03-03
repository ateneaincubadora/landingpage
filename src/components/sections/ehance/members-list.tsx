import { membersCards } from "@/consts/members-cards";
import Card from "./card";

export default function MembersList() {
  return (
    <section className=" mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {membersCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}
