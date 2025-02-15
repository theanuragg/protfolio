"use client";

import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function Header() {
  return (
    <header className="py-16">
      <div className="max-w-3xl">
        <div className="pixel-art-name font-pixel mb-4">
          ANURAG
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          I make <span className="text-green-400">full-stack</span> products that people <span className="text-pink-400">love</span>.
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Developer, Open Source Enthusiast, and Community Builder. 
          Crafting code while building bridges in tech communities.
        </p>
        <p className="text-gray-400 text-lg mb-6">
          Currently building cool stuff in Open Source and managing communities @ <span className="text-purple-400">AlgoPrep</span>. 
          Passionate about making tech more accessible and fun.
        </p>
        <p className="text-gray-400 text-lg mb-8">
          Cooking up <span className="text-green-400">epic projects</span> and contributing to <span className="text-pink-400">open source</span> 24/7.
        </p>

        <div className="social-links flex gap-5 mb-8">
          <a href="https://github.com/theanuragg" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={22} />
          </a>
          <a href="https://x.com/theaanuragg" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter size={22} />
          </a>
          <a href="https://www.linkedin.com/in/anurag-singh-2b7bb624a/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <FaDiscord size={22} />
          </a>
        </div>
      </div>
    </header>
  );
}
