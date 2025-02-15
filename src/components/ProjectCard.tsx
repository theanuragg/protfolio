'use client'

import React from 'react'
import { IconType } from 'react-icons'

interface ProjectCardProps {
  title: string
  description: string
  icon: IconType
}

export default function ProjectCard({ title, description, icon: Icon }: ProjectCardProps) {
  return (
    <div className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-5px] transition-all cursor-pointer">
      <Icon className="text-[#64ffda] text-3xl mb-4" />
      <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="flex justify-end mt-4">
        <button className="text-[#64ffda]">→</button>
      </div>
    </div>
  )
} 