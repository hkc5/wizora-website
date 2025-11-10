import { Link } from "react-router-dom";
import { InstagramLogo, TwitterLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">W</span>
              </div>
              <span className="text-xl font-light tracking-tight">Wizora</span>
            </div>
            <p className="text-sm opacity-70">
              Your AI-powered companion for astrology and self-reflection.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <InstagramLogo size={20} weight="light" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <TwitterLogo size={20} weight="light" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <LinkedinLogo size={20} weight="light" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">© 2025 Wizora. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Privacy
            </a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
