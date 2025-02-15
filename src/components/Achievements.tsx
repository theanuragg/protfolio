'use client'

import React from 'react'

export default function Achievements() {
  const achievements = [
    {
      title: "Buildspace $5 Grant",
    },
    {
      title: "Patent (pending) @ Cloudflare",
    },
    {
      title: "Mentor @ Calhacks",
    },
    {
      title: "Neo Scholar finalist",
    },
    {
      title: "Winner #2, Calhacks",
    },
    {
      title: "Winner #2, Sunhacks",
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-[#112240] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
} 