"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function Header() {
  return (
    <header className="py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: Text Content */}
        <div className="flex-1">
          <div className="pixel-art-name font-pixel mb-4">ANURAG</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I make <span className="text-green-400">full-stack</span> products
            that people <span className="text-pink-400">love</span>.
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Currently contributing to
            <span className="text-purple-400"> open-source </span> projects
            crafting functional and delightful digital products. Always
            building, learning, and growing tech communities.
          </p>
          <p className="text-gray-400 text-lg mb-8">
            Cooking up <span className="text-green-400">epic projects</span> and
            contributing to <span className="text-pink-400">open source</span>{" "}
            24/7.
          </p>

          <div className="social-links flex gap-5 mb-8">
            <a
              href="https://github.com/theanuragg"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://x.com/theaanuragg"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-singh-2b7bb624a/"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <FaDiscord size={22} />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-48 h-48 md:w-80 md:h-80 relative animate-pixel">
          <Image
            src="/anime.png"
            alt="Anurag Pixel"
            fill
            className="object-contain image-rendering-pixelated"
            priority
          />
        </div>
      </div>
    </header>
  );
}
