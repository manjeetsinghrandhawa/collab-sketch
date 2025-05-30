"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white py-12 w-[100%]">
      <div className=" mx-auto px-6 flex  md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-6 pl-20">
          <Image
            src="/assets/icons/collab-sketch-icon.svg" // replace with your logo path
            alt="Collab-Sketch Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <p className="text-white/70 text-sm max-w-xs">
            Collaborate in real-time with your team. Documents, designs and projects — all in one place.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mr-40  ">
          
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="#techstack" className="hover:underline">Features</a></li>
              <li><a href="#faqsection" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#" className="hover:underline">GitHub</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/50 text-xs">
        © 2025 Collab-Sketch. All rights reserved.
      </div>
    </footer>
  );
}
