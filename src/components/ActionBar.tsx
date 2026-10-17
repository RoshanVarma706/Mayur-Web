import { restaurant, whatsappLink } from "../data/restaurant";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function ActionBar() {
  return (
    <nav className="actionbar" aria-label="Quick actions">
      <a className="call" href={`tel:${restaurant.phone.tel}`}>
        <PhoneIcon size={16} />
        Call
      </a>
      <a
        className="wa"
        href={whatsappLink("Hello Mayur Restaurant, I would like to reserve a table.")}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon size={16} />
        WhatsApp
      </a>
      <a className="menu-btn" href="#menu">
        Menu
      </a>
    </nav>
  );
}
