function SectionHeading({ number, title, description, tone = 'heading-dark' }) {
  return (
    <div className="section-heading">
      <div className="section-heading-title">
        <span className={`section-number ${tone}`}>{number}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading
