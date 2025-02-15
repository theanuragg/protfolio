'use client'

import React from 'react'
import AchievementCard from './AchievementCard'

export default function Achievements() {
  const achievements = [
    {
      title: "Buildspace $5 Grant",
      imageSrc: "/path/to/buildspace-image.jpg",
      href: "#",
    },
    {
      title: "Patent (pending) @ Cloudflare",
      imageSrc: "/path/to/cloudflare-image.jpg",
      href: "#",
    },
    {
      title: "Mentor @ Calhacks",
      imageSrc: "/path/to/calhacks-image.jpg",
      href: "#",
    },
    {
      title: "Neo Scholar finalist",
      imageSrc: "/path/to/neo-image.jpg",
      href: "#",
    },
    {
      title: "Winner #2, Calhacks",
      imageSrc: "/path/to/winner-calhacks-image.jpg",
      href: "#",
    },
    {
      title: "Winner #2, Sunhacks",
      imageSrc: "/path/to/winner-sunhacks-image.jpg",
      href: "#",
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-100">
        Achievements
        <div className="h-1 w-10 bg-[#64ffda] mt-2 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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