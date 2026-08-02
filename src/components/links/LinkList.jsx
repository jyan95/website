import './link-list.css';

const LINKS = [
  {
    label: 'linkedin.com/in/joshua-yan',
    href: 'https://www.linkedin.com/in/joshua-yan/',
    external: true,
  },
  {
    label: 'jyan0602@gmail.com',
    href: 'mailto:jyan0602@gmail.com',
    external: false,
  },
  {
    label: 'joshuayan.com/resume.pdf',
    href: '/resume.pdf',
    external: true,
  },
  {
    label: 'hyperbolic.nyc',
    href: 'https://hyperbolic.nyc/',
    external: true,
  },
];

function LinkList() {
  return (
    <nav className="link-nav" aria-label="Contact and profile links">
      <ul className="link-list">
        {LINKS.map(({ label, href, external }) => (
          <li key={href}>
            <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {label}
              {external && <span className="sr-only"> (opens in new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LinkList;
