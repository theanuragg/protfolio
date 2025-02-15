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
    <a href={href} className="group relative block overflow-hidden rounded-lg">
      <div className="relative h-[200px] w-full">
        {Icon && <Icon className="absolute top-4 right-4 text-xl text-blue-800 group-hover:text-gray-600 transition-colors duration-300" />}
        <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/60" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-white/90">{description}</p>
        </div>
      </div>
    </a>
  )
} 