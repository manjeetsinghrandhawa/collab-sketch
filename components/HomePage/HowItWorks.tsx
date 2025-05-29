

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Create a Workspace",
      description:
        "Sign up and instantly create your first collaborative document or design space.",
    },
    {
      title: "Invite Your Team",
      description:
        "Add collaborators by email or invite link — control permissions effortlessly.",
    },
    {
      title: "Start Collaborating",
      description:
        "Work together in real-time on documents, designs, and ideas from anywhere.",
    },
    {
      title: "Review & Share",
      description:
        "Track changes, leave comments, and export your work for presentations or deployment.",
    },
  ];

  return (
    <section className="py-20 bg-black/60 backdrop-blur-lg rounded-3xl max-w-6xl mx-auto px-6 mt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        🚀 How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl text-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-green-400">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-white/80">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
