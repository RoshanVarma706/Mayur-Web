import { restaurant } from "../data/restaurant";
import { Reveal } from "./Reveal";

const points = [
  {
    title: "Pure vegetarian, all day",
    body: "Every preparation on the carte is vegetarian — from the paneer counter to the sizzlers.",
  },
  {
    title: "North Indian & Chinese",
    body: "Punjabi gravies and tandoori-style tikkas share the table with Indo-Chinese favourites.",
  },
  {
    title: "Service guests mention",
    body: "Regulars write about quick orders from the kitchen and an accommodating floor team.",
  },
  {
    title: "Dine in, take away, or banquet",
    body: "A family dining room with a banquet hall that seats up to 150 guests.",
  },
];

export function Story() {
  return (
    <section className="section" id="kitchen">
      <div className="container story">
        <Reveal>
          <p className="eyebrow">Our kitchen</p>
          <h2 className="section-title">
            Cooked the way a <em>family would</em>
          </h2>
          <p className="section-lede">
            Mayur has been a neighbourhood address at Khokhra Circle for family dinners, quick
            lunches and celebrations — generous vegetarian plates, priced so you can come back
            often.
          </p>

          <ul className="story__list">
            {points.map((point) => (
              <li key={point.title}>
                <span className="veg-dot" aria-hidden />
                <div>
                  <strong>{point.title}</strong>
                  <p>{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="story__panel">
            <p className="eyebrow eyebrow--light">At a glance</p>
            <h3>{restaurant.fullName}</h3>
            <p style={{ marginTop: 14, color: "rgba(242,237,221,0.76)" }}>
              {restaurant.cuisines.join(" · ")}
            </p>

            <div className="story__stats">
              <div className="story__stat">
                <b>{restaurant.rating.score}</b>
                <span>Google rating</span>
              </div>
              <div className="story__stat">
                <b>{restaurant.rating.reviews.toLocaleString("en-IN")}+</b>
                <span>Guest reviews</span>
              </div>
              <div className="story__stat">
                <b>150</b>
                <span>Banquet guests</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
