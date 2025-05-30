"use client";

import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative w-full">
      <Navbar />
      
      {/* Full-width section for children */}
      <section className="w-full min-h-screen pt-36">
        {children}
      </section>

    </main>
  );
};

export default Layout;
