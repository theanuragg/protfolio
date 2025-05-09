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
        "Your office, anywhere—customizable, collaborative, and built for every way your team works best.",
      icon: FiDatabase,
      href: "https://relayer.theaanurag.xyz/",
      github: "https://github.com/your-org/relayer",
      image: "/relayer.jpg"
    },
    {
      title: "uptime monitoring",
      description:
        "Unlock the Best of Both Worlds—The Security and Control of DEX Meets the Speed and Liquidity of CEX.",
      icon: FiDatabase,
      href: "https://uptime.theaanurag.xyz/",
      github: "https://github.com/theanuragg/UPtime-monitoring",
      image: "/uptime.JPG",
    },
    {
      title: "DCEX",
      description:
        "Build Websites Faster—Effortless, Scalable, and Customizable in Just a Few Clicks.",
      icon: FaMarkdown,
      href: "https://sitebuilder.example.com",
      github: "https://github.com/theanuragg/DCEX",
      image: "",
    },
    {
      title: "Photo Ai",
      description:
        "From Idea to Innovation—Share Your Build, Inspire the Future.",
      icon: FaDiscord,
      link: "https://vras-ai-theanurags-projects.vercel.app/",
      github: "https://github.com/theanuragg/photo-ai",
      image: "/photoai.JPG",
    },
    {
      title: "Debate Ai",
      description:
        "Record, Share, and Collaborate—Effortless Video Messaging for Seamless Communication.",
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
