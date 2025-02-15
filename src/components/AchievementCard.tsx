'use client'

import React from 'react'
import Image from 'next/image'

interface AchievementCardProps {
  title: string
  imageSrc: string
  href?: string
}

export default function AchievementCard({ title, imageSrc, href = "#" }: AchievementCardProps) {
  return (
    <a href={href} className="group relative block overflow-hidden rounded-lg">
      <div className="relative h-[200px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/60" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="mt-2 text-white/90">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm">
              View →
            </span>
          </div>
        </div>
      </div>
    </a>
  )
} 