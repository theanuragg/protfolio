"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { FiDatabase } from "react-icons/fi";
import { FaDiscord, FaMarkdown } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Relayer",
      description:
        "Relayer is a visual interface that shows how accounts are connected and interact over time. Designed for devs, users, and analysts, it brings context to raw on-chain data without needing to sift through complex transaction logs.",
      icon: FiDatabase,
      href: "https://relayer.theaanurag.xyz/",
      github: "https://github.com/your-org/relayer",
      image: "/relayer.JPG"
    },
    {
      title: "Uptime Monitoring",
      description:
        "A platform to monitor website latency and get instant alerts when it's down. Stay informed and ensure your services are always up.",
      icon: FiDatabase,
      href: "https://uptime.theaanurag.xyz/",
      github: "https://github.com/theanuragg/UPtime-monitoring",
      image: "/uptime.JPG",
    },
    {
      title: "DCEX",
      description:
        "A platform to swap and perform transactions using Jupiter aggregator on Solana. Simple, fast, and secure DeFi experience.",
      icon: FaMarkdown,
      href: "",
      github: "https://github.com/theanuragg/DCEX",
      image: "/crypto.JPG",
    },
    {
      title: "Photo Ai",
      description:
        "An app to create AI-generated images using Flux AI. Bring your imagination to life in seconds.",
      icon: FaDiscord,
      link: "https://vras-ai-theanurags-projects.vercel.app/",
      github: "https://github.com/theanuragg/photo-ai",
      image: "/photoai.JPG",
    },
    {
      title: "Debate Ai",
      description:
        "A normal AI chatbot with an extra feature to debate on topics using AI. Sharpen your arguments and get AI-driven opinions.",
      icon: BsRobot,
      href: "https://ai.theaanurag.xyz/",
      github: "https://github.com/theanuragg/AI",
      image: "/ai.JPG",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-pixel text-green-400 mb-10">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
