import Image from "next/image";
import Link from "next/link";

export default function ClinicGallery() {
  return (
    <section className="clinic-gallery section" id="clinic">
      <div className="container">
        <div className="clinic-gallery-heading">
          <div>
            <span className="eyebrow">
              <span />
              INSIDE GENTLE SMILES
            </span>

            <h2>
              Care that puts
              <br />
              <em>you first.</em>
            </h2>
          </div>

          <p>
            A welcoming environment, dedicated dental care and a
            personal approach to helping every patient feel more
            comfortable about their smile.
          </p>
        </div>

        <div className="clinic-gallery-grid">
          <figure className="clinic-gallery-main">
            <div className="clinic-gallery-image">
              <Image
                src="/images/IMG-20260927-WA0083.jpg"
                alt="Dental professional providing treatment to a patient at Gentle Smiles Oral Care"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <figcaption>
              <span>01</span>
              <div>
                <strong>Personalised dental care</strong>
                <p>Care focused on each patient's needs.</p>
              </div>
            </figcaption>
          </figure>

          <figure className="clinic-gallery-secondary">
            <div className="clinic-gallery-image">
              <Image
                src="/images/IMG-20260927-WA0084.jpg"
                alt="Dental treatment taking place in a clinical setting"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <figcaption>
              <span>02</span>
              <div>
                <strong>Your smile matters</strong>
                <p>A patient-centred approach to oral care.</p>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="clinic-gallery-bottom">
          <p>
            Have a dental concern or need a consultation?
          </p>

          <div className="clinic-gallery-actions">
            <Link href="/#appointment" className="button">
              Book an Appointment <span>→</span>
            </Link>

            <a
              href="https://wa.me/254702294105"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}