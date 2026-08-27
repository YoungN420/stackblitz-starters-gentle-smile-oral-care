import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/site";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <Image
          src="/images/WhatsApp Image 2026-04-23 at 16.25.21 (1).jpeg"
          alt="Dental treatment environment at Gentle Smiles Oral Care"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />

        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            {siteConfig.location}
          </div>

          <h1>
            A healthier smile
            <br />
            starts with <em>care.</em>
          </h1>

          <p className="hero-description">
            Comprehensive dental care for children and adults,
            delivered with comfort, precision and a patient-first
            approach.
          </p>

          <div className="hero-actions">
            <Link
              href="#appointment"
              className="button button-primary"
            >
              Book an Appointment
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-light"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-item">
              <strong>24/7</strong>
              <span>Always open</span>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <strong>Complete</strong>
              <span>Dental care</span>
            </div>

            <div className="hero-trust-divider" />

            <div className="hero-trust-item">
              <strong>Meru</strong>
              <span>Equator, Kenya</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>GENTLE SMILES ORAL CARE</span>

          <span className="hero-scroll">
            SCROLL TO EXPLORE
            <span aria-hidden="true">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}