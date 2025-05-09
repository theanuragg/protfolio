"use client";

import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  icon?: IconType;
  href?: string;
  github?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  icon: Icon,
  href,
  github,
  image,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all shadow-md hover:shadow-lg">
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
          <p className="text-sm text-white/60">{description}</p>
          {image && (
            <div className="relative h-40 w-full rounded-xl overflow-hidden mt-4">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transition-transform group-hover:scale-105 duration-300"
                priority
              />
            </div>
          )}
        </div>

        {(href || github) && (
          <div className="flex gap-4 mt-4">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline flex items-center gap-1"
              >
                <FiExternalLink /> Live
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1"
              >
                <FiGithub /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
