import { membersCards } from "@/consts/members-cards";
import Card from "./card";

export default function MembersList() {
  return (
    <section className="hidden grid-cols-1 gap-6 pt-20 lg:grid lg:grid-cols-3">
      {membersCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}
