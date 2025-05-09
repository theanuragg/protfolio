"use client";

import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Web Developer & Community Manager ",
      company: "Algo Prep (Remote)",
      period: "Aug 2023 – Dec 2024",
      points: [
        "Designed and developed the company's web infrastructure with modern tech stacks.",
        "Led community engagement across Discord and Twitter, driving a 4x increase in active participation.",
        "Planned and executed technical events, AMAs, and open-source contributor drives.",
      ],
    },
    {
      title: "Freelance Web3 Community Manager",
      company: "Remote",
      period: "Mar 2021 – June 2023",
      points: [
        "Managed 38+ Discord communities for NFT projects.",
        "Hosted AMAs, giveaways, and content for Twitter and Telegram.",
        "Built and scaled India's largest NFT server in 2022.",
      ],
    },
  ];

  return (
    <section className="py-16  text-white" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-20 font-pixel text-green-400">
           Work Experience
        </h2>

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <div key={i} className=" pl-6">
              <h3 className="text-2xl font-semibold text-pink-400">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {exp.company} · {exp.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
