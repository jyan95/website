import './link-list.css';

/*
  Outline glyph set. No fill/stroke attributes on the shapes: stroke color is
  set on the <a> in CSS and inherits in, which is what lets a:visited recolor
  them (stroke is on the small list of properties :visited is allowed to
  style). vector-effect keeps the line weight in screen pixels, so all four
  glyphs share the same fine line no matter their viewBox scale -- without it
  the H mark's 904-unit-wide box would render its stroke invisibly thin.
*/

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
      <rect x="2" y="9" width="4" height="12" vectorEffect="non-scaling-stroke" />
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
      <path
        d="M15 2.75H7A1.75 1.75 0 0 0 5.25 4.5v15A1.75 1.75 0 0 0 7 21.25h10a1.75 1.75 0 0 0 1.75-1.75V6.5L15 2.75Z"
        vectorEffect="non-scaling-stroke"
      />
      <path d="M15 2.75V6.5h3.75" vectorEffect="non-scaling-stroke" />
      <circle cx="11" cy="8.1" r="1.7" vectorEffect="non-scaling-stroke" />
      <path d="M8 13.5a3 3 0 0 1 6 0" vectorEffect="non-scaling-stroke" />
      <path d="M8.25 16.4h7.5M8.25 18.9h7.5" vectorEffect="non-scaling-stroke" />
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
    </svg>
  );
}

/* The Hyperbolic H mark, path lifted from hyperbolic's brand SVG (904x353). */
function HyperbolicGlyph() {
  return (
    <svg
      className="glyph"
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
