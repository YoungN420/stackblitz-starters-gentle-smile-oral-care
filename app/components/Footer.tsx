import Link from "next/link";
import { siteConfig } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <Link
              href="/"
              className="footer-logo"
              aria-label="Gentle Smiles Oral Care home"
            >
              <span>GS</span>

              <div>
                <strong>Gentle Smiles</strong>
                <small>Oral Care</small>
              </div>
            </Link>

            <p>
              Professional dental care focused on healthier,
              confident smiles in Meru, Kenya.
            </p>
          </div>

          <div className="footer-column">
            <span>EXPLORE</span>

            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#why-us">Why Us</Link>
            <Link href="#faq">FAQ</Link>
          </div>

          <div className="footer-column">
            <span>CONTACT</span>

            <a href="tel:+254702294105">
              +254 702 294 105
            </a>

            <a
              href="https://wa.me/254702294105"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <span>{siteConfig.location}</span>
            <span>{siteConfig.hours}</span>
          </div>

          <div className="footer-column footer-action">
            <span>READY TO VISIT?</span>

            <Link
              href="#appointment"
              className="footer-book"
            >
              Book Appointment
              <span>→</span>
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Gentle Smiles Oral Care.
            All rights reserved.
          </span>

          <span>
            Meru · Kenya
          </span>
        </div>

      </div>
    </footer>
  );
}