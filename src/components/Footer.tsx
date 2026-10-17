import { restaurant, whatsappLink } from "../data/restaurant";

const quickLinks = [
  { href: "#signatures", label: "Signatures" },
  { href: "#menu", label: "Full menu" },
  { href: "#kitchen", label: "Our kitchen" },
  { href: "#banquet", label: "Banquet hall" },
  { href: "#visit", label: "Visit us" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="brand" href="#top">
              <span className="brand__mark" aria-hidden>
                {restaurant.initials}
              </span>
              <span className="brand__text">
                <span className="brand__name">{restaurant.name}</span>
                <span className="brand__sub">Est. at Khokhra Circle</span>
              </span>
            </a>
            <p>
              {restaurant.cuisines.join(" · ")}. A pure vegetarian kitchen and banquet hall serving
              Ahmedabad&rsquo;s Maninagar East neighbourhood.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Reach us</h4>
            <ul>
              {restaurant.address.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>
                <a href={`tel:${restaurant.phone.tel}`}>{restaurant.phone.display}</a>
              </li>
              <li>
                <a
                  href={whatsappLink("Hello Mayur Restaurant, I have a question.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {restaurant.name}. {restaurant.taxNote}
          </span>
          <span>Menu prices as printed. {restaurant.hours.days}.</span>
        </div>
      </div>
    </footer>
  );
}
