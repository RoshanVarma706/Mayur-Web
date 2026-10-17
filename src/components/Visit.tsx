import { restaurant } from "../data/restaurant";
import { Reveal } from "./Reveal";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./icons";

export function Visit() {
  const addressLine = `${restaurant.name}, ${restaurant.address.lines.join(", ")}, ${restaurant.address.locality}, Ahmedabad`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`;

  return (
    <section className="section" id="visit">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Plan a visit</p>
          <h2 className="section-title">
            Find us at <em>Khokhra Circle</em>
          </h2>
          <p className="section-lede">
            Look for the SBI Bank at Khokhra Circle — the restaurant and banquet hall are on the
            floor above, inside Radhey Shopping Mall.
          </p>
        </Reveal>

        <div className="visit-grid">
          <Reveal className="info-card">
            <h3>
              <PinIcon size={19} /> Address
            </h3>
            <p className="sub">A short walk from Khokhra Circle</p>
            <ul className="info-list">
              {restaurant.address.lines.map((line) => (
                <li key={line}>
                  <span className="v">{line}</span>
                </li>
              ))}
            </ul>
            <a
              className="btn btn--outline btn--small"
              style={{ marginTop: 22 }}
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <ArrowIcon />
            </a>
          </Reveal>

          <Reveal className="info-card" delay={90}>
            <h3>
              <ClockIcon size={19} /> Hours
            </h3>
            <p className="sub">{restaurant.hours.days}</p>
            <ul className="info-list">
              <li>
                <span className="k">Lunch</span>
                <span className="v">{restaurant.hours.lunch}</span>
              </li>
              <li>
                <span className="k">Dinner</span>
                <span className="v">{restaurant.hours.dinner}</span>
              </li>
              <li>
                <span className="k">Cost for two</span>
                <span className="v">{restaurant.costForTwo}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="info-card" delay={180}>
            <h3>
              <PhoneIcon size={19} /> Contact
            </h3>
            <p className="sub">For tables, parcels and banquet enquiries</p>
            <ul className="info-list">
              <li>
                <span className="k">Phone</span>
                <span className="v">
                  <a href={`tel:${restaurant.phone.tel}`}>{restaurant.phone.display}</a>
                </span>
              </li>
              <li>
                <span className="k">WhatsApp</span>
                <span className="v">{restaurant.phone.display}</span>
              </li>
              <li>
                <span className="k">Known for</span>
                <span className="v">{restaurant.popularDishes.join(", ")}</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="map" delay={120}>
            <iframe
              title={`Map showing ${restaurant.name} at Khokhra Circle, Ahmedabad`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
