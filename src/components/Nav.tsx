import { useEffect, useState } from "react";
import { restaurant } from "../data/restaurant";
import { PhoneIcon } from "./icons";

const links = [
  { href: "#signatures", label: "Signatures" },
  { href: "#menu", label: "Menu" },
  { href: "#kitchen", label: "Our Kitchen" },
  { href: "#banquet", label: "Banquet" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${stuck ? " is-stuck" : ""}`}>
      <div className="container nav__inner">
        <a className="brand" href="#top" aria-label={`${restaurant.name} home`}>
          <span className="brand__mark" aria-hidden>
            {restaurant.initials}
          </span>
          <span className="brand__text">
            <span className="brand__name">{restaurant.name}</span>
            <span className="brand__sub">Vegetarian Kitchen</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--gold btn--small nav__cta" href={`tel:${restaurant.phone.tel}`}>
          <PhoneIcon size={16} />
          {restaurant.phone.display}
        </a>
      </div>
    </header>
  );
}
