import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin, Pizza } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-gradient-to-b from-stone-900/95 to-stone-950/98 backdrop-blur-sm text-white shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Pizza className="h-6 w-6 text-primary-400" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                PizzaFlow
              </h3>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed mb-6">
              Your go-to platform for fresh, delicious pizza delivered straight to your door. 
              Quality ingredients, fast delivery, and unbeatable taste - every single time.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/zacktam12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary-500 hover:scale-110 transition-all duration-200"
                title="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/zekariastamiru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary-500 hover:scale-110 transition-all duration-200"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:zekariastamiru12@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary-500 hover:scale-110 transition-all duration-200"
                title="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-stone-300 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-primary-400 group-hover:w-2 transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-stone-300 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-primary-400 group-hover:w-2 transition-all"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-stone-300 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-primary-400 group-hover:w-2 transition-all"></span>
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/order/new" className="text-stone-300 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 rounded-full bg-primary-400 group-hover:w-2 transition-all"></span>
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                  <Phone className="h-4 w-4 text-primary-400" />
                </div>
                <a href="tel:+251703922596" className="hover:text-primary-400 transition-colors">
                  +251 703 922 596
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <a href="mailto:zekariastamiru12@gmail.com" className="hover:text-primary-400 transition-colors break-all">
                  zekariastamiru12@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                  <MapPin className="h-4 w-4 text-primary-400" />
                </div>
                <span className="leading-relaxed">Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-400">
            &copy; {currentYear} PizzaFlow. All rights reserved.
          </p>
          <p className="text-sm text-stone-400">
            Crafted with <span className="text-red-500">❤️</span> by{" "}
            <a 
              href="https://github.com/zacktam12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              Zekarias Tamiru
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

