import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center">
        <Image
          src="/logo.jpg"
          alt="ITIPANDAM"
          width={120}
          height={60}
          className="h-8 w-auto"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex space-x-3">
          <a
            href="https://www.instagram.com/itipandam.lk/"
            className="text-gray-600 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};
