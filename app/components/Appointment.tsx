"use client";

import { FormEvent, useState } from "react";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");

    const whatsappMessage = `
Hello Gentle Smiles Oral Care,

I would like to request a dental appointment.

*Patient details*
Name: ${name}
Phone: ${phone}

*Appointment details*
Preferred date: ${date}
Preferred time: ${time}
Service: ${service}

*Additional information*
${message || "No additional information provided."}

Please let me know if this appointment time is available.

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/254702294105?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank");

    form.reset();
  }

  return (
    <section id="appointment" className="appointment section">
      <div className="container">
        <div className="appointment-box">

          {/* Left side */}
          <div className="appointment-copy">
            <div className="eyebrow light">
              <span />
              BOOK YOUR VISIT
            </div>

            <h2>
              Your smile
              <br />
              deserves <em>care.</em>
            </h2>

            <p>
              Request an appointment with Gentle Smiles Oral Care.
              Tell us what you need and your preferred time, and our
              team can help you with the next step.
            </p>

            <div className="appointment-contact">
              <a href="tel:+254702294105">
                <span>CALL</span>
                +254 702 294 105
              </a>

              <a
                href="https://wa.me/254702294105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>WHATSAPP</span>
                Chat with us
              </a>
            </div>

            <div className="appointment-hours">
              <span>AVAILABILITY</span>
              <strong>Open 24 hours</strong>
            </div>
          </div>

          {/* Right side */}
          <form
            className="appointment-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+254..."
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Preferred date
                <input
                  type="date"
                  name="date"
                  required
                />
              </label>

              <label>
                Preferred time
                <input
                  type="time"
                  name="time"
                  required
                />
              </label>
            </div>

            <label>
              Service
              <select
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option>Dental Consultation</option>
                <option>Dental Cleaning</option>
                <option>Teeth Whitening</option>
                <option>Dental Fillings</option>
                <option>Root Canal Treatment</option>
                <option>Tooth Extraction</option>
                <option>Crowns & Bridges</option>
                <option>Dentures</option>
                <option>Dental Implants</option>
                <option>Dental Veneers</option>
                <option>Braces & Orthodontics</option>
                <option>Children's Dentistry</option>
                <option>Gum Care</option>
                <option>Oral Surgery</option>
                <option>Emergency Dental Care</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Tell us about your visit
              <textarea
                name="message"
                rows={4}
                placeholder="How can we help?"
              />
            </label>

            <button
              type="submit"
              className="button form-button"
            >
              Send Appointment Request
              <span aria-hidden="true">→</span>
            </button>

            {submitted && (
              <p className="form-success">
                Your request has been prepared for WhatsApp.
                Please complete the message in WhatsApp to send it
                to Gentle Smiles Oral Care.
              </p>
            )}

            <small className="form-note">
              Your appointment request will be sent to the Gentle
              Smiles Oral Care WhatsApp number for confirmation.
            </small>
          </form>

        </div>
      </div>
    </section>
  );
}