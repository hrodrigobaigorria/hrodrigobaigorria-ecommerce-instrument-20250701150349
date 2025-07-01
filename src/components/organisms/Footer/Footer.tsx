import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MusicStore. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Contact us: <a href="mailto:contact@musicstore.com" className="underline hover:text-orange-400">contact@musicstore.com</a>
        </p>
        <p className="mt-2 text-sm">
          Phone: <a href="tel:+1234567890" className="underline hover:text-orange-400">+1 (234) 567-890</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
