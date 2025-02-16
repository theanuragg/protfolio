'use client'

import React from 'react'
import { IconType } from 'react-icons'

interface ProjectCardProps {
  title: string
  description: string
  icon?: IconType
  href?: string
}

export default function ProjectCard({ title, description, icon: Icon, href = "#" }: ProjectCardProps) {
  return (
    <a href={href} className="group relative block overflow-hidden rounded-lg bg-gradient-to-r from-[#0924bd] via-[#1c5da7] to-[#0924bd] shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-[200px] w-full">
        {Icon && <Icon className="absolute top-4 right-4 text-xl text-white transition-colors duration-300 group-hover:text-gray-600" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-white/30">{description}</p>
        </div>
      </div>
    </a>
  )
} 