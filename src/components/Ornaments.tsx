type DividerProps = {
  /** Use the lighter gold treatment on dark backgrounds. */
  light?: boolean;
};

export function Divider({ light = false }: DividerProps) {
  return (
    <div className={`divider${light ? " divider--light" : ""}`} aria-hidden>
      <span className="mark" />
    </div>
  );
}

export function Stars() {
  return (
    <span className="stars" aria-hidden>
      ★★★★★
    </span>
  );
}

/** The green square-and-dot mark used to flag pure-vegetarian dishes. */
export function VegDot() {
  return <span className="veg-dot" aria-label="Vegetarian" role="img" />;
}
