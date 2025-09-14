import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Github, 
  ExternalLink, 
  Mail, 
  FileText,
  BookOpen,
  Users,
  Zap
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Architecture', href: '#architecture' },
      { name: 'Service Plans', href: '#service' },
      { name: 'Pricing', href: '#service' }
    ],
    resources: [
      { name: 'Documentation', href: 'https://docs.adlah.dev/dev/architecture/', external: true },
      { name: 'GitHub Repository', href: 'https://github.com/JohannesLks/ADLAH', external: true },
      { name: 'Installation Guide', href: 'https://docs.adlah.dev/dev/installation/', external: true },
      { name: 'API Reference', href: 'https://docs.adlah.dev/dev/api/', external: true }
    ],
    support: [
      { name: 'Contact Us', href: '#service' },
      { name: 'Technical Support', href: 'mailto:support@adlah.dev' },
      { name: 'Community', href: 'https://github.com/JohannesLks/ADLAH/discussions', external: true },
      { name: 'Bug Reports', href: 'https://github.com/JohannesLks/ADLAH/issues', external: true }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'License (GPLv3)', href: 'https://github.com/JohannesLks/ADLAH/blob/main/LICENSE', external: true },
      { name: 'Security Policy', href: '/security' }
    ]
  };

  const stats = [
    { label: 'Detection Speed', value: '< 100ms', icon: Zap },
    { label: 'Accuracy Rate', value: '99.7%', icon: Shield },
    { label: 'Contributors', value: '15+', icon: Users },
    { label: 'GitHub Stars', value: '2.3k+', icon: Github }
  ];

  return (
    <footer className="relative bg-dark-900 border-t border-dark-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Shield className="w-10 h-10 text-primary-500" />
                  <div className="absolute inset-0 animate-pulse">
                    <Shield className="w-10 h-10 text-primary-400 opacity-50" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">ADLAH</h3>
                  <p className="text-sm text-dark-400 font-mono">v2.1.0</p>
                </div>
              </div>
              
              <p className="text-dark-300 mb-6 leading-relaxed">
                Adaptive Deep Learning Anomaly Detection Honeynet - 
                Advanced threat detection using machine learning, 
                reinforcement learning orchestration, and scalable honeypots.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-800 rounded-lg p-3 border border-dark-700 hover:border-primary-600/50 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <stat.icon className="w-4 h-4 text-primary-500 group-hover:text-primary-400 transition-colors" />
                      <span className="text-lg font-bold text-primary-400">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs text-dark-400">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/JohannesLks/ADLAH"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:contact@adlah.dev"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://docs.adlah.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      whileHover={{ x: 5 }}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-200 flex items-center space-x-1 group"
                    >
                      <span>{link.name}</span>
                      {link.external && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-dark-400 text-sm"
            >
              © 2024 ADLAH Project. Licensed under{' '}
              <a
                href="https://github.com/JohannesLks/ADLAH/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                GPLv3
              </a>
              . Built with ❤️ for cybersecurity.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 text-sm text-dark-400"
            >
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>System Status: Operational</span>
              </span>
              <span>|</span>
              <span>Last Updated: Dec 2024</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </footer>
  );
};

export default Footer;