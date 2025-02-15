'use client'

import React from 'react'
import AchievementCard from './AchievementCard'

export default function Achievements() {
  const achievements = [
    {
      title: "Made web 3 community",
      imageSrc: "/birth.jpg",
      href: "#",
    },
    {
      title: "Editor @Being human",
      imageSrc: "/frnds.jpg",
      href: "#",
    },
    {
      title: "Community Manager @Algoprep",
      imageSrc: "/L.jpg",
      href: "#",
    },
    {
      title: "Manage upscaling of 1000+ discord servers",
      imageSrc: "/as.jpg",
      href: "#",
    },
    {
      title: "Buildspace participant S5",
      imageSrc: "/fun.jpg",
      href: "#",
    },
    {
      title: "build crazy websites for homies",
      imageSrc: "/dwag.jpg",
      href: "#",
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-2xl font-serif mb-8 text-gray-100">
        Achievements
        <div className="h-1 w-10 bg-[#64ffda] mt-2 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 font-sans md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            imageSrc={achievement.imageSrc}
            href={achievement.href}
          />
        ))}
      </div>
    </section>
  )
} 