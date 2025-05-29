"use client";

import { useState } from "react";

export default function FAQCards() {
  const faqs = [
    {
      question: "What is Collab-Sketch?",
      answer:
        "A collaborative real-time editor for documents, designs and project files where teams can build ideas together.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes — the core platform is free! Premium plans are coming soon for advanced features.",
    },
    {
      question: "Can I invite my team?",
      answer:
        "Absolutely. Create a project and share the invite link to start working together in seconds.",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        🙋 FAQs — Hover to Reveal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group group-hover:translate-z-10 hover:translate-z-[10] hover:scale-105 hover:shadow-2xl relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-60 flex items-center justify-center cursor-pointer overflow-hidden shadow-xl border border-white/10 transition-all duration-500 perspective-1000  "
          >
            {/* Card Content Wrapper */}
            <div
              className="relative w-full h-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:rotate-z-12 group-hover:rotate-y-12 group-hover:scale-105"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Question */}
              <h3 className="text-2xl text-white font-semibold text-center transition-all duration-500 group-hover:-translate-y-20 group-hover:opacity-0 group-hover:translate-z-16">
                {faq.question}
              </h3>

              {/* Answer */}
              <p className="absolute px-6 text-white/90 text-center text-lg opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[10] group-hover:translate-z-32">
                {faq.answer}
              </p>
            </div>

            {/* Optional border or effect */}
            {/* <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none transition-all duration-500 group-hover:h-[120px] group-hover:opacity-100 opacity-0"></div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
