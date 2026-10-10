"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What dental services does Gentle Smiles Oral Care provide?",
    answer:
      "Gentle Smiles Oral Care provides a broad range of dental care, including consultations, cleaning, fillings, root canal treatment, tooth extraction, crowns and bridges, dentures, dental implants, veneers, braces and orthodontic care, children's dentistry, gum care, oral surgery and emergency dental care.",
  },
  {
    question: "Is Gentle Smiles Oral Care open 24 hours?",
    answer:
      "Yes. Gentle Smiles Oral Care is available 24 hours. If you need assistance, you can call or contact the clinic through WhatsApp using the contact details on this website.",
  },
  {
    question: "How can I book a dental appointment?",
    answer:
      "You can use the appointment form on this website. Enter your details, preferred date and time, and the service you are interested in. Your request will be prepared as a WhatsApp message for the Gentle Smiles team to review and confirm.",
  },
  {
    question: "Do you provide dental implants?",
    answer:
      "Yes. Dental implant treatment is among the services provided by Gentle Smiles Oral Care. The appropriate treatment option depends on an individual clinical assessment and consultation.",
  },
  {
    question: "Do you provide braces and orthodontic treatment?",
    answer:
      "Yes. Gentle Smiles Oral Care provides braces and orthodontic care. During a consultation, the dental team can assess your needs and discuss the appropriate treatment options.",
  },
  {
    question: "Do you provide veneers and cosmetic dentistry?",
    answer:
      "Yes. Cosmetic dental services, including veneers and teeth whitening, are available. Suitability depends on your individual dental condition and clinical assessment.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. Children's dental care is available at Gentle Smiles Oral Care. Parents or guardians can contact the clinic to arrange an appropriate consultation.",
  },
  {
    question: "Where is Gentle Smiles Oral Care located?",
    answer:
      "Gentle Smiles Oral Care is located in Equator, Meru, Kenya. You can contact the clinic by phone or WhatsApp for directions and additional location information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  }

  return (
    <section id="faq" className="faq section">
      <div className="container">

        <div className="faq-layout">

          {/* Heading */}
          <div className="faq-intro">
            <div className="eyebrow">
              <span />
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2>
              Questions?
              <br />
              <em>We&apos;ve got answers.</em>
            </h2>

            <p>
              Find answers to some of the common questions patients
              may have about Gentle Smiles Oral Care and our dental
              services.
            </p>

            <div className="faq-contact-card">
              <span>STILL HAVE A QUESTION?</span>

              <strong>
                Talk to the Gentle Smiles team.
              </strong>

              <a
                href="https://wa.me/254702294105"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Questions */}
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "faq-item-open" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>

                    <span className="faq-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    aria-hidden={!isOpen}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}