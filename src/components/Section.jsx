export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="section anchor-section">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h1 className="section-title">{title}</h1>}
      {description && <p className="section-description">{description}</p>}
      {children}
    </section>
  );
}
