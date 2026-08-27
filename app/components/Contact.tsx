export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <div>
            <div className="eyebrow">
              <span />
              GET IN TOUCH
            </div>

            <h2>
              Let's take care
              <br />
              of your <em>smile.</em>
            </h2>
          </div>

          <p>
            Have a question, need directions or want to arrange a
            dental consultation? Contact Gentle Smiles Oral Care
            directly and our team will help you with the next step.
          </p>
        </div>

        <div className="contact-grid">

          {/* Phone */}
          <a
            href="tel:+254702294105"
            className="contact-card"
          >
            <div className="contact-card-top">
              <span>01</span>
              <span className="contact-arrow">↗</span>
            </div>

            <div>
              <span className="contact-label">CALL US</span>

              <h3>+254 702 294 105</h3>

              <p>
                Speak directly with Gentle Smiles Oral Care.
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254702294105"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-top">
              <span>02</span>
              <span className="contact-arrow">↗</span>
            </div>

            <div>
              <span className="contact-label">WHATSAPP</span>

              <h3>Chat with us</h3>

              <p>
                Send us a message and ask about your dental needs.
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="contact-card contact-card-static">
            <div className="contact-card-top">
              <span>03</span>
            </div>

            <div>
              <span className="contact-label">LOCATION</span>

              <h3>Meru Equator</h3>

              <p>
                Meru, Kenya. Contact us for directions and
                additional location information.
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="contact-card contact-card-static">
            <div className="contact-card-top">
              <span>04</span>
            </div>

            <div>
              <span className="contact-label">AVAILABILITY</span>

              <h3>Open 24 hours</h3>

              <p>
                Gentle Smiles Oral Care is available around the
                clock.
              </p>
            </div>
          </div>

        </div>

        <div className="contact-bottom">
          <span>GENTLE SMILES ORAL CARE</span>

          <strong>
            Dental care in
            <br />
            Meru, Kenya.
          </strong>

          <a href="#appointment">
            Book an appointment
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}