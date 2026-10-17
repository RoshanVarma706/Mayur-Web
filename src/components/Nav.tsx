import { useEffect, useState } from "react";
import { restaurant } from "../data/restaurant";
import { PhoneIcon } from "./icons";
import { LogoMark } from "./Logo";

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
          <LogoMark size={50} className="brand__logo" />
          <span className="brand__text">
            <span className="brand__name">Mayur</span>
            <span className="brand__sub">Restaurant</span>
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
