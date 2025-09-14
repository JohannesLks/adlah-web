import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Service', href: '#service' },
    { name: 'Documentation', href: 'https://docs.adlah.dev/dev/architecture/', external: true },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-700' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <Shield className="w-8 h-8 text-primary-500" />
              <div className="absolute inset-0 animate-pulse">
                <Shield className="w-8 h-8 text-primary-400 opacity-50" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">ADLAH</h1>
              <p className="text-xs text-dark-400 font-mono">v2.1.0</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.05 }}
                className="text-dark-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <span>{item.name}</span>
                {item.external && <ExternalLink className="w-3 h-3" />}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/JohannesLks/ADLAH"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="btn-primary"
            >
              GitHub
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dark-800 rounded-lg mt-2 p-4 border border-dark-700"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="block py-2 text-dark-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.name}</span>
                {item.external && <ExternalLink className="w-3 h-3" />}
              </a>
            ))}
            <a
              href="https://github.com/JohannesLks/ADLAH"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 btn-primary text-center"
            >
              GitHub
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;