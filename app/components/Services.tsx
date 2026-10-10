import Link from "next/link";

const featuredServices = [
  {
    number: "01",
    category: "PREVENTIVE",
    title: "Dental Cleaning",
    description:
      "Professional cleaning and preventive care to help maintain healthy teeth and gums at GSOC,Meru.",
  },
  {
    number: "02",
    category: "RESTORATIVE",
    title: "Root Canal Treatment",
    description:
      "Treatment focused on preserving teeth affected by deep decay or infection.",
  },
  {
    number: "03",
    category: "COSMETIC",
    title: "Teeth Cleaning and Whitening",
    description:
      "Having tough stains on your teeth?Worry less.Restore a confident smile through proffessional cleaning and teeth whitening.",
  },
  {
    number: "04",
    category: "ORTHODONTICS",
    title: "Braces",
    description:
      "Orthodontic care to help improve tooth alignment and your overall bite.",
  },
  {
    number: "05",
    category: "IMPLANT DENTISTRY",
    title: "Dental Implants",
    description:
      "Tooth-replacement treatment using dental implants where clinically appropriate.",
  },
  {
    number: "06",
    category: "COSMETIC",
    title: "Dental Veneers",
    description:
      "Aesthetic treatment that can improve the appearance of selected teeth.",
  },
  {
    number: "07",
    category: "ORAL SURGERY",
    title: "Oral Surgery",
    description:
      "Surgical dental procedures provided following appropriate clinical assessment.",
  },
  {
    number: "08",
    category: "TOOTH REPLACEMENT",
    title: "Dentures",
    description:
      "Tooth-replacement options designed to restore oral function and confidence.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">

        {/* Heading */}
        <div className="services-heading">
          <div>
            <div className="eyebrow">
              <span />
              OUR DENTAL SERVICES
            </div>

            <h2>
              Complete care for
              <br />
              <em>your smile.</em>
            </h2>
          </div>

          <div className="services-intro">
            <p>
              From preventive dentistry to restorative, cosmetic,
              orthodontic, implant and surgical care, Gentle Smiles
              Oral Care provides a broad range of dental services in
              Equator, Meru.
            </p>

            <Link href="/services" className="services-all-link">
              View all services
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Service cards */}
        <div className="services-grid">
          {featuredServices.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>
              </div>

              <div className="service-card-content">
                <span className="service-category">
                  {service.category}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <Link
                href={`/services/${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="service-card-link"
              >
                Learn more
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      {/* Additional services */}
        <div className="services-bottom">
          <div>
            <span className="services-bottom-label">
              ALSO AVAILABLE
            </span>

            <p>
              Dental consultations · Tooth extraction · Dental
              fillings · Crowns & bridges · Children dentistry ·
              Gum care · Dental jewellery · Emergency dental care
            </p>
          </div>
          <Link href="#appointment" className="button services-button" > Book an Appointment <span>→</span> </Link> </div> </div> </section>

    
  );
}