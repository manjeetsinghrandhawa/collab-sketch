"use client";
import FAQSection from "@/components/HomePage/FAQSection";
import Footer from "@/components/HomePage/Footer";
import HowItWorks from "@/components/HomePage/HowItWorks";
import SimpleSteps from "@/components/HomePage/HowItWorks";
import TechStack from "@/components/HomePage/TechStack";
import React, { useEffect, useRef } from "react";

const HomePage: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    cards.forEach((card) => {
      if (!card) return;

      const content = card.querySelector(".card-content") as HTMLDivElement;
      const rotationFactor = parseFloat(card.getAttribute("data-rotation-factor") || "2");

      if (!isTouchDevice) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = (rotationFactor * (x - centerX)) / centerX;
          const rotateX = (-rotationFactor * (y - centerY)) / centerY;

          content.style.transform = `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
          `;

          card.style.setProperty("--x", `${(x / rect.width) * 100}%`);
          card.style.setProperty("--y", `${(y / rect.height) * 100}%`);
        };

        const handleMouseLeave = () => {
          content.style.transform = "rotateX(0) rotateY(0)";
          content.style.transition = "transform 0.5s ease";
          setTimeout(() => {
            content.style.transition = "";
          }, 500);
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
      }

      const randomDelay = Math.random() * 2;
      card.style.animation = `cardFloat 4s infinite alternate ease-in-out ${randomDelay}s`;
    });
  }, []);

  return (
    <>
      <style>{`
        :root {
           --color-bg: #050505;
          --color-text: #ffffff;
          --color-primary: #ff3366;
          --color-secondary: #3366ff;
          --color-tertiary: #33ddff;
          --color-accent: #ffcc00;
          --card-radius: 16px; 
          --card-bg: rgba(255, 255, 255, 0.03);
          --card-border: rgba(255, 255, 255, 0.1);
          --card-shadow: 0 15px 30px -12px rgba(0, 0, 0, 0.5);
          --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        * {
          margin: 0; padding: 0; box-sizing: border-box;
        }
        body {
          font-family: "Inter", sans-serif;
          background-color: var(--color-bg);
          color: var(--color-text);
          min-height: 100vh;
          overflow-x: hidden;
          line-height: 1.5;
        }
        .background {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          z-index: -1; overflow: hidden;
        }
        .gradient-blob {
          position: absolute; border-radius: 100%;
          filter: blur(40px); opacity: 0.3;
          animation: float 20s infinite alternate ease-in-out;
        }
        .gradient-blob:nth-child(1) {
          background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
          width: 150vw; height: 150vw; top: -100%; left: -25%;
          animation-delay: 0s;
        }
        .gradient-blob:nth-child(2) {
          background: linear-gradient(to right, var(--color-tertiary), var(--color-secondary));
          width: 150vw; height: 150vw; bottom: -100%; right: -25%;
          animation-delay: -5s;
        }
        .gradient-blob:nth-child(3) {
          background: linear-gradient(to right, var(--color-accent), var(--color-primary));
          width: 100vw; height: 100vw; top: 30%; left: -50%;
          animation-delay: -10s;
        }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(2%, 2%) scale(1.02); }
          100% { transform: translate(-2%, -2%) scale(0.98); }
        }
        @keyframes cardFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-5px); }
        }
        @media (min-width: 768px) {
          @keyframes cardFloat {
            0% { transform: translateY(0); }
            100% { transform: translateY(-8px); }
          }
        }
        @media (min-width: 1024px) {
          @keyframes cardFloat {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
          }
        }
        main {
          width: 100%;
          
          position: relative;
          z-index: 1;
        }
        h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          text-align: center;
          background: linear-gradient(to right, var(--color-text), rgba(255,255,255,0.7));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          text-align: center;
          opacity: 0.8;
          margin-bottom: 3rem;
        }
        .cards-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          perspective: 1000px;
        }
        .card {
          position: relative;
          height: 320px;
          border-radius: var(--card-radius);
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          box-shadow: var(--card-shadow);
          transform-style: preserve-3d;
          transition: var(--transition);
          overflow: hidden;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card:hover::before { opacity: 1; }
        .card-content {
          height: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.5s ease;
        }
        .card h2 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          background: linear-gradient(to right, var(--color-text), rgba(255,255,255,0.8));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .card p {
          flex: 1;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-button {
          padding: 0.6rem 1.2rem;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.3) 50%);
          background-size: 200% 100%;
          background-position: left bottom;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 100px;
          color: var(--color-text);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.5s ease;
        }

        .card-button:hover {
          background-position: right bottom;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transform: translate(2px, 2px);
          transition: all 0.5s ease;
        }

        .card-icon {
          font-size: 1.25rem;
          opacity: 0.7;
        }
        .card:hover .card-icon {
          transform: translateX(5px);
          opacity: 1;
        }
      `}</style>

      <div className="background">
        <div className="gradient-blob" />
        <div className="gradient-blob" />
        <div className="gradient-blob" />
      </div>

      <main className="max-w-5xl justify-center mx-auto px-6 pt-20 pb-10">
        <h1>Collab-Sketch</h1>
        <p className="subtitle">
          Real-time collaborative document and design editing for modern teams and creators.
        </p>

        <div className="cards-container">
          <div
            className="card"
            data-rotation-factor="2"
            ref={(el) => { cardRefs.current[0] = el; }}
          >
            <div className="card-content">
              <h2>Collaborative Documents</h2>
              <p>
                Create, edit, and share documents with your team in real-time. 
                See live changes, leave comments, and work together seamlessly 
                from anywhere.
              </p>
              <div className="card-footer">
                <button className="card-button">Start Writing</button>
                <div className="card-icon">→</div>
              </div>
            </div>
          </div>

          <div
            className="card"
            data-rotation-factor="2"
            ref={(el) => { cardRefs.current[1] = el; }}
          >
            <div className="card-content">
              <h2>Design Workspace</h2>
              <p>
                Collaborate on wireframes, UI mockups, and sketches inside 
                a shared canvas. Figma-style tools for your entire product team — 
                all in your browser.
              </p>
              <div className="card-footer">
                <button className="card-button">Design Together</button>
                <div className="card-icon">→</div>
              </div>
            </div>
          </div>

          <div
            className="card"
            data-rotation-factor="2"
            ref={(el) => { cardRefs.current[2] = el; }}
          >
            <div className="card-content">
              <h2>Live Chat & Video</h2>
              <p>
                Stay connected with built-in live chat and video calls. Discuss 
                ideas, review designs, and collaborate without leaving your workspace.
              </p>
              <div className="card-footer">
                <button className="card-button">Connect Now</button>
                <div className="card-icon">→</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
  maxWidth: "900px",
  margin: "6rem auto 3rem",
  textAlign: "center",
  padding: "0 1.5rem"
}}>
  <h2 style={{
    fontSize: "2.2rem",
    fontWeight: "800",
    marginBottom: "1.5rem",
    background: "linear-gradient(to right, var(--color-text), rgba(255,255,255,0.7))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}>
    Empower Your Ideas, Together.
  </h2>

  <p style={{ opacity: 0.9, fontSize: "1.2rem", lineHeight: "1.9", marginBottom: "1rem", justifyContent: "center" }}>
    Welcome to <strong>Collab-Sketch</strong> — your ultimate real-time collaboration platform designed for modern thinkers, creators, developers, and teams. Say goodbye to static, single-player workspaces and hello to dynamic, multiplayer environments where ideas come to life instantly.
  </p>

  <p style={{ opacity: 0.85, fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1rem",  justifyContent: "center" }}>
    Whether you're drafting content, building product roadmaps, or sketching UI/UX designs, Collab-Sketch brings everyone into the same virtual space — no downloads, no outdated files, no version conflicts. Everything updates live as you type, draw, and brainstorm. 
  </p>

  <p style={{ opacity: 0.8, fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "1rem", justifyContent: "center" }}>
    Dive into intuitive, distraction-free document editors, collaborative whiteboards, and interactive design workspaces. Plan projects, take meeting notes, co-author blog posts, or wireframe your next big idea together. With integrated video calls, team chat, and version history, your workspace is as agile as your imagination.
  </p>

  <p style={{ opacity: 0.8, fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "1rem", justifyContent: "center" }}>
    Powered by cutting-edge technologies like Next.js, WebRTC, Socket.IO, and AWS Cloud, Collab-Sketch ensures your collaboration experience is fast, secure, and effortlessly scalable. Whether you're working solo or with a global team, your ideas stay connected, organized, and alive.
  </p>

  <p style={{ opacity: 0.8, fontSize: "1.05rem", lineHeight: "1.75", justifyContent: "center" }}>
    Join thousands of creators redefining teamwork. Break the barriers of location, device, and time. It’s not just a workspace — it’s a canvas for your collective genius.
  </p>

  <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
    <button className="card-button" style={{ fontSize: "1.05rem", padding: "0.9rem 2.2rem" }}>
      🚀 Start Collaborating Free
    </button>
  </div>
</div>

      <HowItWorks />

      <TechStack />

      <FAQSection />

      </main>

      <Footer />
    </>
  );
};

export default HomePage;
