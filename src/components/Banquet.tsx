import { restaurant, whatsappLink } from "../data/restaurant";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./icons";

const perks = [
  "Vegetarian menus planned for every function",
  "Seats up to 150 guests",
  "Centrally located above SBI Bank at Khokhra Circle",
  "Birthdays, engagements and family get-togethers",
];

export function Banquet() {
  return (
    <section className="section banquet" id="banquet">
      <div className="container banquet__inner">
        <Reveal>
          <p className="eyebrow eyebrow--light">Celebrations</p>
          <h2 className="section-title">
            A banquet hall in the <em>heart of Khokhra</em>
          </h2>
          <p className="section-lede">
            Alongside the restaurant, Mayur runs a banquet hall for gatherings that need more than a
            table. Tell us the occasion, the count and the date — we will shape a vegetarian spread
            around it.
          </p>
          <div className="reserve__actions" style={{ marginTop: 30 }}>
            <a
              className="btn btn--gold"
              href={whatsappLink(
                "Hello Mayur Restaurant, I would like to enquire about the banquet hall for an event.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={17} />
              Enquire on WhatsApp
            </a>
            <a className="btn btn--ghost-light" href={`tel:${restaurant.phone.tel}`}>
              {restaurant.phone.display}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="banquet__card">
            <h3>Up to 150 guests</h3>
            <p style={{ color: "rgba(244,239,225,0.8)", fontSize: 15.5 }}>
              {restaurant.address.lines.join(", ")}
            </p>
            <ul className="banquet__perks">
              {perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
