import { Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div>
            <h3 className="text-3xl uppercase text-white mb-4 tracking-wider">
              ARDEN VALE
            </h3>
            <p className="text-neutral-400">
              Content Creator & Brand Storyteller
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#about" className="hover:text-red-600 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-600 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-red-600 transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="bg-neutral-800 p-3 hover:bg-red-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 p-3 hover:bg-red-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 p-3 hover:bg-red-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="text-neutral-400 text-sm">
              hello@ardenvale.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © 2025 Arden Vale. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-red-600 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-600 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
