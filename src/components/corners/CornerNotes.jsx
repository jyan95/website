import './corner-notes.css';

/*
  Editorial corner furniture. Nothing here says more than the LinkedIn
  profile and kinetik.care already do publicly, and it deliberately does not
  name hyperbolic.nyc -- that stays visible only in its own rendered link
  (see docs/superpowers/specs/2026-08-01-brutalist-redesign-design.md).

  Natural case in the markup, uppercased in CSS, so assistive tech reads the
  words instead of spelling them out.
*/
const NOTES = [
  { text: 'New York', corner: 'tr' },
  { text: 'Software', corner: 'bl' },
  { text: '2026', corner: 'br' },
];

function CornerNotes() {
  return (
    <aside className="corner-notes">
      {NOTES.map(({ text, corner }) => (
        <p key={corner} className={`corner-note corner-note--${corner}`}>
          {text}
        </p>
      ))}
    </aside>
  );
}

export default CornerNotes;
