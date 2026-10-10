export default function WhyUs() {
  const reasons = [
    {
      number: "01",
      title: "Patient-first approach",
      description:
        "Every visit starts with listening to your concerns and understanding what you need from your dental care.",
    },
    {
      number: "02",
      title: "Comprehensive care",
      description:
        "From preventive and restorative dentistry to orthodontics, implants, cosmetic care and oral surgery.",
    },
    {
      number: "03",
      title: "Comfort matters",
      description:
        "We aim to make your dental experience clear, calm and as comfortable as possible from consultation to treatment.",
    },
    {
      number: "04",
      title: "Care when you need it",
      description:
        "Gentle Smiles Oral Care is available 24 hours, giving patients access to dental support whenever they need it.",
    },
  ];

  return (
    <section id="why-us" className="why-us section">
      <div className="container">

        <div className="why-us-header">
          <div>
            <div className="eyebrow why-us-eyebrow">
              <span />
              WHY GENTLE SMILES
            </div>

            <h2>
              Most Gentle Oral Care.
              <br />
              <em>Care you can trust.</em>
            </h2>
          </div>

          <p>
            Good dentistry is about more than a procedure. It is
            about understanding the patient, explaining the options
            and providing appropriate care at every stage.
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason) => (
            <article
              className="why-us-card"
              key={reason.number}
            >
              <span className="why-us-number">
                {reason.number}
              </span>

              <div className="why-us-card-content">
                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>

              <span
                className="why-us-card-line"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <div className="why-us-bottom">
          <div className="why-us-statement">
            <span>OUR APPROACH</span>

            <strong>
              Clear communication.
              <br />
              Appropriate care.
              <br />
              Healthier smiles.
            </strong>
          </div>

          <div className="why-us-location">
            <span>GENTLE SMILES ORAL CARE</span>

            <p>
              Equator · Meru · Kenya
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}