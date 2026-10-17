import { useState, type FormEvent } from "react";
import { restaurant, whatsappLink } from "../data/restaurant";
import { Reveal } from "./Reveal";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function ReserveBand() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      `Hello ${restaurant.name}, I would like to reserve a table.`,
      name.trim() ? `Name: ${name.trim()}` : null,
      date ? `Date: ${date}` : null,
      time ? `Time: ${time}` : null,
      guests ? `Guests: ${guests}` : null,
    ].filter((line): line is string => line !== null);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section section--tight" id="reserve">
      <div className="container">
        <Reveal>
          <div className="reserve">
            <div>
              <p className="eyebrow eyebrow--light">Reservations</p>
              <h2>Let us keep a table ready</h2>
              <p>
                Walk-ins are always welcome, though Sunday and festival evenings fill up quickly.
                Send us your details and we will confirm on WhatsApp.
              </p>
              <p style={{ marginTop: 18, fontSize: 14.5, letterSpacing: "0.02em" }}>
                Open daily · Lunch {restaurant.hours.lunch} · Dinner {restaurant.hours.dinner}
              </p>
            </div>

            <form className="reserve__form" onSubmit={handleSubmit}>
              <div className="field field--wide">
                <label htmlFor="res-name">Name</label>
                <input
                  id="res-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="field">
                <label htmlFor="res-date">Date</label>
                <input
                  id="res-date"
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="res-time">Time</label>
                <input
                  id="res-time"
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />
              </div>
              <div className="field field--wide">
                <label htmlFor="res-guests">Guests</label>
                <input
                  id="res-guests"
                  type="number"
                  min={1}
                  max={200}
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                />
              </div>

              <div className="reserve__actions">
                <button className="btn btn--gold" type="submit">
                  <WhatsAppIcon size={17} />
                  Request a table
                </button>
                <a className="btn btn--ghost-light" href={`tel:${restaurant.phone.tel}`}>
                  <PhoneIcon size={16} />
                  Call instead
                </a>
              </div>
              <p className="reserve__hint">
                Opens WhatsApp with your details filled in — nothing is stored on this site.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
