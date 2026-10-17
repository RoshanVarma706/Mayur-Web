import { signatures } from "../data/menu";
import { Reveal } from "./Reveal";

const toNumber = (index: number) => String(index + 1).padStart(2, "0");

export function Signatures() {
  return (
    <section className="section" id="signatures">
      <div className="container">
        <Reveal>
          <p className="eyebrow">From our kitchen</p>
          <h2 className="section-title">
            Plates guests <em>come back for</em>
          </h2>
          <p className="section-lede">
            A vegetarian table built around paneer, fresh vegetables and slow-simmered gravies —
            with a Chinese and Continental side when you feel like something different.
          </p>
        </Reveal>

        <div className="sig-grid">
          {signatures.map((dish, index) => (
            <Reveal key={dish.name} className="sig-cell" delay={index * 60}>
              <article className="sig">
                <p className="sig__no">{toNumber(index)}</p>
                <h3>{dish.name}</h3>
                <p className="sig__note">{dish.note}</p>
                <div className="sig__foot">
                  <span className="pill">{dish.section}</span>
                  <span className="price">₹{dish.price}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
