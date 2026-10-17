import { useMemo, useState } from "react";
import { menu } from "../data/menu";
import { restaurant } from "../data/restaurant";
import { Reveal } from "./Reveal";

const shortLabels: Record<string, string> = {
  starters: "Starters",
  soups: "Soups",
  paneer: "Paneer",
  kofta: "Kofta",
  subzi: "Sabzi",
  continental: "Continental",
  sizzler: "Sizzler",
  salad: "Salad & Raita",
  beverages: "Beverages",
};

const hotTags = ["Popular", "Chef's pick", "House special"];
const greenTags = ["Green"];

const tagClass = (tag: string) => {
  if (greenTags.includes(tag)) return "tag tag--green";
  if (hotTags.includes(tag)) return "tag tag--hot";
  return "tag tag--neutral";
};

const formatPrice = (price: number | null) => (price === null ? "MRP" : `₹${price}`);

export function MenuExplorer() {
  const [active, setActive] = useState<string>("all");

  const sections = useMemo(
    () => (active === "all" ? menu : menu.filter((section) => section.id === active)),
    [active],
  );

  return (
    <section className="section menu-band" id="menu">
      <div className="container">
        <Reveal>
          <p className="eyebrow">The full carte</p>
          <h2 className="section-title">
            Our <em>menu</em>
          </h2>
          <p className="section-lede">
            Everything on the table is vegetarian. Prices are in rupees and match the printed
            carte; portions are served as noted for each section.
          </p>
        </Reveal>

        <div className="menu-toolbar">
          <div className="menu-toolbar__row">
            <div className="chips" role="tablist" aria-label="Menu categories">
              <button
                type="button"
                role="tab"
                aria-selected={active === "all"}
                className={`chip${active === "all" ? " is-active" : ""}`}
                onClick={() => setActive("all")}
              >
                Everything
              </button>
              {menu.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  aria-selected={active === section.id}
                  className={`chip${active === section.id ? " is-active" : ""}`}
                  onClick={() => setActive(section.id)}
                >
                  {shortLabels[section.id] ?? section.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-sections">
          {sections.map((section) => (
            <article className="menu-card" key={section.id}>
              <div className="menu-card__head">
                <h3>{section.title}</h3>
                {section.unit ? <span className="menu-card__unit">{section.unit}</span> : null}
                <p className="menu-card__blurb">{section.blurb}</p>
              </div>

              <ul className="dish-list">
                {section.items.map((item) => (
                  <li className="dish" key={item.name}>
                    <span className="dish__name">
                      <span className="veg-dot" aria-hidden />
                      {item.name}
                      {item.tags && item.tags.length > 0 ? (
                        <span className="tags">
                          {item.tags.map((tag) => (
                            <span key={tag} className={tagClass(tag)}>
                              {tag}
                            </span>
                          ))}
                        </span>
                      ) : null}
                    </span>
                    <i className="dish__leader" aria-hidden />
                    <span
                      className={`dish__price${item.price === null ? " dish__price--mrp" : ""}`}
                    >
                      {formatPrice(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="menu-note">
          <span className="veg-dot" aria-hidden />
          <span>
            <strong>Pure vegetarian kitchen.</strong> {restaurant.taxNote} Kindly inform the staff
            of any allergies — some gravies are prepared with cashew and dairy.
          </span>
        </p>
      </div>
    </section>
  );
}
