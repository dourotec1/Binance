import React from 'react';
import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
          <button className="flex items-center hover:text-gray-300">
            <Globe className="h-4 w-4 mr-1" />
            English
          </button>
          <a href="#" className="hover:text-gray-300">Cookies</a>
          <a href="#" className="hover:text-gray-300">Terms</a>
          <a href="#" className="hover:text-gray-300">Privacy</a>
        </div>
      </div>
    </footer>
  );
}