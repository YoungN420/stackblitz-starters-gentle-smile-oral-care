"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/site";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`site-header ${
          scrolled ? "site-header-scrolled" : ""
        }`}
      >
        <div className="header-container">
          <Link
            href="/"
            className="brand"
            aria-label={`${siteConfig.name} home`}
            onClick={closeMenu}
          >
            <span className="brand-logo">
              <Image
                src="/images/WhatsApp Image 2026-04-23 at 16.22.16.jpeg"
                alt="Gentle Smiles Oral Care"
                width={72}
                height={72}
                priority
              />
            </span>

            <span className="brand-name">
              <strong>Gentle Smiles</strong>
              <small>Oral Care</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="header-whatsapp"
            >
              WhatsApp
            </a>

            <Link
              href="#appointment"
              className="header-book"
            >
              Book Appointment
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            className={`mobile-menu-button ${
              menuOpen ? "mobile-menu-button-open" : ""
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-visible" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-actions">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-whatsapp"
            onClick={closeMenu}
          >
            WhatsApp
          </a>

          <Link
            href="#appointment"
            className="mobile-book"
            onClick={closeMenu}
          >
            Book an Appointment
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mobile-contact">
          <span>{siteConfig.location}</span>
          <a href={`tel:${siteConfig.phoneRaw}`}>
            {siteConfig.phone}
          </a>
          <span>{siteConfig.hours}</span>
        </div>
      </div>
    </>
  );
}