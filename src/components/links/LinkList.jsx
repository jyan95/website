import './link-list.css';

/*
  Outline glyph set. No fill/stroke attributes on the shapes: stroke color is
  set on the <a> in CSS and inherits in, which is what lets a:visited recolor
  them (stroke is on the small list of properties :visited is allowed to
  style). vector-effect keeps the line weight in screen pixels, so all four
  glyphs share the same fine line no matter their viewBox scale -- without it
  the H mark's 904-unit-wide box would render its stroke invisibly thin.
*/

/* The Kinetik K mark, paths from the 2026 rebrand logo icon (20x21.163). */
function KinetikGlyph() {
  return (
    <svg
      className="glyph"
      viewBox="0 0 20 21.163"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5.82473 6.05383V0H0V11.8475C1.29503 9.86515 3.16477 7.8828 5.82473 6.05189V6.05383Z"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M5.82473 20.969H0C0 15.7947 2.59395 11.4514 7.71 8.05754C12.3096 5.00733 12.8125 3.17642 12.8125 0H18.6372C18.6372 5.75677 16.6199 9.13512 10.9311 12.9115C7.44789 15.222 5.82667 17.7829 5.82667 20.969H5.82473Z"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="15.5328"
        cy="17.6682"
        r="3.4948"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function LinkedInGlyph() {
  return (
    <svg
      className="glyph"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4z"
        vectorEffect="non-scaling-stroke"
      />
      <rect
        x="2"
        y="9"
        width="4"
        height="12"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="4" cy="4" r="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* Outlined CV: document with folded corner, person silhouette, two lines. */
function ResumeGlyph() {
  return (
    <svg
      className="glyph"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15.5 2H4.5v20h15V6L15.5 2Z" vectorEffect="non-scaling-stroke" />
      <path d="M15.5 2v4h4" vectorEffect="non-scaling-stroke" />
      <circle cx="12" cy="9" r="2" vectorEffect="non-scaling-stroke" />
      <path d="M8.5 15a3.5 3.5 0 0 1 7 0" vectorEffect="non-scaling-stroke" />
      <path d="M8 17.75h8M8 19.9h8" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* The Gmail M-envelope silhouette (it's a gmail address), stroked as line art. */
function GmailGlyph() {
  return (
    <svg
      className="glyph"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        vectorEffect="non-scaling-stroke"
      />
      {/* seams where the flap overlaps the columns */}
      <path d="M5.455 4.64V11.73" vectorEffect="non-scaling-stroke" />
      <path d="M18.545 4.64V11.73" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* The Hyperbolic H mark, path lifted from hyperbolic's brand SVG (904x353). */
function HyperbolicGlyph() {
  return (
    <svg
      className="glyph glyph--h"
      viewBox="0 0 904 353"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M903.716 0C903.527 0.23431 903.336 0.468464 903.142 0.700195L607.526 353H483.067L591.154 224.187H232.547L124.459 353H0L296.201 0H420.648C420.459 0.23431 420.269 0.468464 420.074 0.700195L312.573 128.814H662.11C664.992 128.814 667.814 129.069 670.555 129.559L779.269 0H903.716Z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const LINKS = [
  {
    href: 'https://kinetik.care/',
    ariaLabel: 'Kinetik (opens in new tab)',
    external: true,
    Glyph: KinetikGlyph,
  },
  {
    href: 'https://www.linkedin.com/in/joshua-yan/',
    ariaLabel: 'LinkedIn profile (opens in new tab)',
    external: true,
    Glyph: LinkedInGlyph,
  },
  {
    href: '/resume.pdf',
    ariaLabel: 'Resume PDF (opens in new tab)',
    external: true,
    Glyph: ResumeGlyph,
  },
  {
    href: 'mailto:jyan0602@gmail.com',
    ariaLabel: 'Email Joshua',
    external: false,
    Glyph: GmailGlyph,
  },
  {
    href: 'https://hyperbolic.nyc/',
    ariaLabel: 'Hyperbolic (opens in new tab)',
    external: true,
    Glyph: HyperbolicGlyph,
  },
];

function LinkList() {
  return (
    <nav className="link-nav" aria-label="Contact and profile links">
      <ul className="link-list">
        {LINKS.map(({ href, ariaLabel, external, Glyph }) => (
          <li key={href}>
            <a
              href={href}
              aria-label={ariaLabel}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <Glyph />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LinkList;
