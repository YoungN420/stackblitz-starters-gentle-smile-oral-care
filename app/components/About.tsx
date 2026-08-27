import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-visual">
            <div className="about-image-wrap">
              <Image
                src="/images/WhatsApp Image 2026-04-23 at 16.26.28.jpeg"
                alt="Clinical dental care at Gentle Smiles Oral Care"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="about-image"
              />
            </div>

            <div className="about-location-card">
              <span className="about-location-label">
                FIND US
              </span>

              <strong>
                Equator, Meru
              </strong>

              <span>
                Kenya
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="eyebrow">
              <span />
              ABOUT GENTLE SMILES
            </div>

            <h2>
              Dentistry built around
              <br />
              <em>your comfort.</em>
            </h2>

            <p className="about-lead">
              Gentle Smiles Oral Care is a dental clinic serving
              patients in Equator, Meru and the surrounding
              community.
            </p>

            <p>
              Our approach is centred on providing accessible,
              comprehensive dental care while making every visit
              as comfortable and straightforward as possible.
              Whether you need preventive care, restorative
              treatment, cosmetic dentistry, orthodontic care,
              implants or oral surgery, our services are designed
              to support your individual dental needs.
            </p>

            <p>
              We believe good dental care starts with understanding
              the patient. Your treatment should therefore begin
              with an appropriate clinical assessment and a clear
              discussion of the available options.
            </p>

            <div className="about-actions">
              <Link
                href="/services"
                className="button about-button"
              >
                Explore Our Services
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="#appointment"
                className="about-text-link"
              >
                Book a consultation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="about-principles">
          <div className="about-principle">
            <span className="principle-number">
              01
            </span>

            <div>
              <h3>
                Patient-first care
              </h3>

              <p>
                We focus on understanding your concerns
                and making your dental visit clear and
                comfortable.
              </p>
            </div>
          </div>

          <div className="about-principle">
            <span className="principle-number">
              02
            </span>

            <div>
              <h3>
                Comprehensive dentistry
              </h3>

              <p>
                A broad range of dental services makes it
                easier to find the appropriate care in one
                place.
              </p>
            </div>
          </div>

          <div className="about-principle">
            <span className="principle-number">
              03
            </span>

            <div>
              <h3>
                Clear treatment decisions
              </h3>

              <p>
                We encourage patients to understand their
                dental needs and available treatment options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}