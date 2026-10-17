import { restaurant } from "../data/restaurant";
import { ArrowIcon, PhoneIcon } from "./icons";
import { Stars } from "./Ornaments";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__frame">
          <p className="eyebrow eyebrow--light">{restaurant.establishedLine}</p>
          <h1>
            {restaurant.name}
            <em>{restaurant.tagline}</em>
          </h1>

          <p className="hero__intro">{restaurant.intro}</p>

          <p className="hero__rating">
            <b>{restaurant.rating.score}</b>
            <Stars />
            <span>{restaurant.rating.reviews.toLocaleString("en-IN")}+ reviews</span>
          </p>

          <div className="hero__actions">
            <a className="btn btn--gold" href="#menu">
              Explore the menu
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost-light" href={`tel:${restaurant.phone.tel}`}>
              <PhoneIcon size={16} />
              Call {restaurant.phone.display}
            </a>
          </div>
        </div>

        <dl className="hero__facts">
          <div className="hero__fact">
            <dt>Open daily</dt>
            <dd>
              Lunch {restaurant.hours.lunch}
              <span>Dinner {restaurant.hours.dinner}</span>
            </dd>
          </div>
          <div className="hero__fact">
            <dt>Cost for two</dt>
            <dd>
              {restaurant.costForTwo}
              <span>{restaurant.taxNote}</span>
            </dd>
          </div>
          <div className="hero__fact">
            <dt>Find us</dt>
            <dd>
              Khokhra Circle
              <span>{restaurant.address.landmark}</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
