"use client";

import Image from "next/image";

export default function TechStack() {
  const techs = [
    { src: "/assets/images/nextjs.png", alt: "Next.js" },
    { src: "/assets/images/react.png", alt: "React" },
    { src: "/assets/images/node-js.png", alt: "Node.js" },
    { src: "/assets/images/mongodb.svg", alt: "MongoDB" },
    { src: "/assets/images/clerk.png", alt: "Clerk" },
    { src: "/assets/images/socket-io.png", alt: "Socket.IO" },
    { src: "/assets/images/framer-motion.png", alt: "Framer Motion" },
    { src: "/assets/images/tailwindcss.png", alt: "Tailwind CSS" },
  ];

  const radius = 300;
  const step = 360 / techs.length;

  return (
    <section id="techstack"
     className="py-20 relative overflow-hidden bg-black/60 backdrop-blur-lg rounded-3xl max-w-6xl mx-auto px-6 mt-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        💻 Powered By
      </h2>
      <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
        <div className="absolute w-[500px] h-[500px] transform-style-preserve-3d animate-rotate3D flex items-center justify-center">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="w-24 h-24 p-2 flex items-center justify-center bg-white/10 rounded-xl border border-white/10 shadow-lg backdrop-blur-md absolute"
              style={{
                transform: `rotateY(${index * step}deg) translateZ(${radius}px)`,
              }}
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
