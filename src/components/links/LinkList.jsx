import './link-list.css';

/*
  Glyphs carry no fill/stroke attributes: both are set on the <a> in CSS and
  inherit in, which is what lets a:visited recolor them (fill and stroke are
  on the small list of properties :visited is allowed to style).
*/

function LinkedInGlyph() {
  return (
    <svg className="glyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

/* Outlined CV: document with folded corner, person silhouette, two lines. */
function ResumeGlyph() {
  return (
    <svg className="glyph glyph--resume" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15 2.75H7A1.75 1.75 0 0 0 5.25 4.5v15A1.75 1.75 0 0 0 7 21.25h10a1.75 1.75 0 0 0 1.75-1.75V6.5L15 2.75Z" />
      <path d="M15 2.75V6.5h3.75" />
      <circle cx="11" cy="8.1" r="1.7" />
      <path d="M8 13.5a3 3 0 0 1 6 0" />
      <path d="M8.25 16.4h7.5M8.25 18.9h7.5" />
    </svg>
  );
}

function MailGlyph() {
  return (
    <svg className="glyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
}

/* The Hyperbolic H mark, path lifted from hyperbolic's brand SVG (904x353). */
function HyperbolicGlyph() {
  return (
    <svg className="glyph glyph--wide" viewBox="0 0 904 353" aria-hidden="true" focusable="false">
      <path d="M903.716 0C903.527 0.23431 903.336 0.468464 903.142 0.700195L607.526 353H483.067L591.154 224.187H232.547L124.459 353H0L296.201 0H420.648C420.459 0.23431 420.269 0.468464 420.074 0.700195L312.573 128.814H662.11C664.992 128.814 667.814 129.069 670.555 129.559L779.269 0H903.716Z" />
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
    Glyph: MailGlyph,
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
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
