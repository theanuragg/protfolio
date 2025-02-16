'use client'

import React from 'react'
import ProjectCard from './ProjectCard'
import { FiDatabase } from 'react-icons/fi'
import { FaDiscord, FaMarkdown } from 'react-icons/fa'
import { BsRobot } from 'react-icons/bs'

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Gathering",
      description: "Your office, anywhere—customizable, collaborative, and built for every way your team works best.",
      icon: FiDatabase
    },
    {
      title: "CEX & DEX ",
      description: "Unlock the Best of Both Worlds—The Security and Control of DEX Meets the Speed and Liquidity of CEX.",
      icon: FiDatabase
    },
    {
      title: "Website Builder",
      description: "Build Websites Faster—Effortless, Scalable, and Customizable in Just a Few Clicks.",
      icon: FaMarkdown
    },
    {
      title: "Katha.io",
      description: "From Idea to Innovation—Share Your Build, Inspire the Future.",
      icon: FaDiscord
    },
    {
      title: "Aloom",
      description: "Record, Share, and Collaborate—Effortless Video Messaging for Seamless Communication.",
      icon: BsRobot
    },
    {
      title: "Gumi",
      description: "Explore Like a Local—Rent a Guider, Be a Guider, Discover Hidden Gems.",
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-2xl text-gray-300 font-bold mb-8">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
} 