import { useId } from "react";

type LogoProps = {
  size?: number;
  className?: string;
};

/** One leaf of the four-leaf mark: a rounded square with a sharp inner point. */
const LEAF = "M0 0 V-21 H-12 A9 9 0 0 0 -21 -12 V0 Z";

/** The four leaves, each point aimed at the centre of the cluster. */
const CLUSTER = [
  "translate(-3.2 -3.2)",
  "translate(3.2 -3.2) scale(-1 1)",
  "translate(-3.2 3.2) scale(1 -1)",
  "translate(3.2 3.2) scale(-1 -1)",
];

/**
 * The compact emblem from the logo: four leaves inside the gold ring.
 * Used in the navigation so the mark stays legible at small sizes.
 */
export function LogoMark({ size = 48, className }: LogoProps) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Mayur Restaurant emblem"
    >
      <defs>
        <linearGradient id={`${id}-ring`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7e6ab" />
          <stop offset="0.38" stopColor="#cfa133" />
          <stop offset="0.58" stopColor="#f2d78f" />
          <stop offset="0.8" stopColor="#b8881f" />
          <stop offset="1" stopColor="#e9cc7d" />
        </linearGradient>
        <radialGradient id={`${id}-cream`} cx="0.35" cy="0.25" r="0.9">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="1" stopColor="#f2e7cf" />
        </radialGradient>
        <linearGradient id={`${id}-leaf`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#3d8434" />
          <stop offset="1" stopColor="#1b5522" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="49" fill={`url(#${id}-ring)`} />
      <circle cx="50" cy="50" r="44" fill={`url(#${id}-cream)`} />
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="rgba(150, 108, 20, 0.35)"
        strokeWidth="0.7"
      />

      <g
        transform="translate(50 48) scale(1.34)"
        fill="#2d6b2b"
        stroke="#cfa133"
        strokeWidth="0.8"
      >
        {CLUSTER.map((transform) => (
          <path key={transform} d={LEAF} transform={transform} />
        ))}
      </g>
    </svg>
  );
}

/**
 * The full badge from the restaurant's logo — gold ring, four leaves,
 * MAYUR / RESTAURANT wordmark and the address band.
 */
export function LogoBadge({ size = 180, className }: LogoProps) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Mayur Restaurant — A-Block, Radhey Shopping Mall, above SBI Bank, Khokhra Circle, Maninagar East, Ahmedabad"
    >
      <defs>
        <linearGradient id={`${id}-ring`} x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#f7e6ab" />
          <stop offset="0.32" stopColor="#cfa133" />
          <stop offset="0.52" stopColor="#f4dc95" />
          <stop offset="0.76" stopColor="#b8881f" />
          <stop offset="1" stopColor="#ecd08a" />
        </linearGradient>
        <radialGradient id={`${id}-cream`} cx="0.34" cy="0.22" r="0.95">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="1" stopColor="#f3e8d1" />
        </radialGradient>
        <linearGradient id={`${id}-leaf`} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#3d8434" />
          <stop offset="1" stopColor="#1b5522" />
        </linearGradient>
        <linearGradient id={`${id}-band`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16552c" />
          <stop offset="1" stopColor="#0a2f16" />
        </linearGradient>
        <clipPath id={`${id}-disc`}>
          <circle cx="100" cy="100" r="89" />
        </clipPath>
      </defs>

      <circle cx="100" cy="100" r="99" fill={`url(#${id}-ring)`} />
      <circle cx="100" cy="100" r="89" fill={`url(#${id}-cream)`} />

      <g clipPath={`url(#${id}-disc)`}>
        {/* faint leaf watermark, as in the printed badge */}
        <g fill="#2d6b2b" opacity="0.07">
          <path d={LEAF} transform="translate(34 152) scale(2.7) rotate(-18)" />
          <path d={LEAF} transform="translate(166 152) scale(-2.7 2.7) rotate(18)" />
        </g>

        <path
          d="M0 148 Q100 122 200 148 L200 200 L0 200 Z"
          fill={`url(#${id}-band)`}
        />
        <path d="M0 148 Q100 122 200 148" fill="none" stroke="#e6c877" strokeWidth="1.5" />
      </g>

      <circle
        cx="100"
        cy="100"
        r="89"
        fill="none"
        stroke="rgba(255, 250, 232, 0.55)"
        strokeWidth="0.9"
      />
      <circle
        cx="100"
        cy="100"
        r="94.5"
        fill="none"
        stroke="rgba(120, 82, 10, 0.4)"
        strokeWidth="0.7"
      />

      <g
        transform="translate(100 48) scale(1.2)"
        fill={`url(#${id}-leaf)`}
        stroke="#cfa133"
        strokeWidth="0.85"
      >
        {CLUSTER.map((transform) => (
          <path key={transform} d={LEAF} transform={transform} />
        ))}
      </g>

      <text
        x="100"
        y="108"
        textAnchor="middle"
        fontFamily="Jost, 'Segoe UI', sans-serif"
        fontWeight="700"
        fontSize="37"
        letterSpacing="1.7"
        fill="#11431f"
        stroke="#cfa133"
        strokeWidth="2.4"
        paintOrder="stroke"
      >
        MAYUR
      </text>

      <path d="M28 126 H40 M160 126 H172" stroke="#c09030" strokeWidth="1.2" strokeLinecap="round" />
      <text
        x="100"
        y="130"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="600"
        fontSize="12.8"
        letterSpacing="2.6"
        fill="#0f3f1d"
      >
        RESTAURANT
      </text>

      <g transform="translate(93.8 139) scale(0.52)" fill="#f2d78f">
        <path d="M12 2c-4.4 0-8 3.5-8 7.9 0 5.6 8 12.1 8 12.1s8-6.5 8-12.1C20 5.5 16.4 2 12 2Z" />
        <circle cx="12" cy="9.9" r="2.9" fill="#0f3f1d" />
      </g>

      <g
        textAnchor="middle"
        fontFamily="Jost, 'Segoe UI', sans-serif"
        fontSize="5.7"
        letterSpacing="0.15"
        fill="#f7f0dd"
      >
        <text x="100" y="160">A-Block, Radhey Shopping Mall,</text>
        <text x="100" y="168">Above SBI Bank, Khokhra Circle,</text>
        <text x="100" y="176">Maninagar (East), Ahmedabad.</text>
      </g>
    </svg>
  );
}
