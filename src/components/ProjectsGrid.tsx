'use client'

import React from 'react'
import ProjectCard from './ProjectCard'
import { FiDatabase, FiMessageSquare } from 'react-icons/fi'
import { FaDiscord, FaMarkdown } from 'react-icons/fa'
import { BsRobot } from 'react-icons/bs'

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Supermemory",
      description: "AI second brain for your team. Supermemory is a tool that helps you capture, organize, and retrieve information from your team's conversations and documents.",
      icon: FiDatabase
    },
    {
      title: "Supermemory DB",
      description: "Vector database I made for Supermemory. Fully serverless and infinitely scalable by using Cloudflare R2 and Durable objects.",
      icon: FiDatabase
    },
    {
      title: "Markdownr",
      description: "Convert text to LLM-ready markdown with one click. Supermemory helper tool.",
      icon: FaMarkdown
    },
    {
      title: "Discord Bot to Portfolio",
      description: "A discord bot that creates a website for your server.",
      icon: FaDiscord
    },
    {
      title: "Redish",
      description: "Super fast drop-in replacement of the in memory key value data Redis, made in Golang",
      icon: BsRobot
    },
    {
      title: "Lecture Chat",
      description: "A Virtual TA that listens to the lecture and answers your doubts in real time.",
      icon: FiMessageSquare
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Latest projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
} 