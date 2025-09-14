import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Network, ArrowRight, Github, BookOpen, Play, Star } from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { Icon: Shield, delay: 0, x: 150, y: 80, size: 'w-20 h-20' },
    { Icon: Brain, delay: 0.5, x: -120, y: 100, size: 'w-16 h-16' },
    { Icon: Network, delay: 1, x: 180, y: -80, size: 'w-18 h-18' },
    { Icon: Zap, delay: 1.5, x: -150, y: -60, size: 'w-14 h-14' },
  ];

  const stats = [
    { label: 'Detection Speed', value: '<100ms', icon: '⚡' },
    { label: 'Accuracy Rate', value: '99.7%', icon: '🎯' },
    { label: 'Auto-scaling', value: 'Infinite', icon: '🚀' },
    { label: 'Security', value: 'Military', icon: '🛡️' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-800/10" />
      
      {/* Floating Icons with Enhanced Animation */}
      {floatingIcons.map(({ Icon, delay, x, y, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1], 
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
            x: [0, x * 0.5, x, x * 0.3, 0],
            y: [0, y * 0.3, y, y * 0.7, 0],
          }}
          transition={{
            delay,
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            top: `${50 + y}px`,
          className={`absolute text-red-500/30 ${size} blur-sm hidden md:block`}
        >
          <Icon className="w-full h-full drop-shadow-2xl" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-900/40 to-red-800/30 border border-red-500/30 text-red-300 text-sm font-medium mb-8 backdrop-blur-xl"
          >
            <Star className="w-4 h-4 mr-2 text-red-400" />
            Enterprise-Grade Deep Learning Honeynet Framework
            <div className="ml-2 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-responsive-xl font-black mb-8 leading-none tracking-tight"
          >
            <span className="block">
              <span className="gradient-text glitch text-shadow" data-text="ADLAH">
                ADLAH
              </span>
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-4 text-white/90 font-light">
              Adaptive Deep Learning
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 gradient-text-alt font-medium">
              Anomaly Detection Honeynet
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed font-light">
              Revolutionary threat detection using 
              <span className="text-red-400 font-semibold"> unsupervised deep learning</span>, 
              <span className="text-red-400 font-semibold"> reinforcement learning orchestration</span>, 
              and <span className="text-red-400 font-semibold">adaptive honeypot clusters</span>.
            </p>
            <p className="text-lg text-gray-400 font-mono">
              First-flight anomaly detection • Real-time threat analysis • Military-grade security
            </p>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="card-glow text-center hover-lift group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-red-400 mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#service"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center space-x-3 text-lg px-10 py-5 pulse-glow"
            >
              <Play className="w-5 h-5" />
              <span>Deploy ADLAH</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://docs.adlah.dev/dev/architecture/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center space-x-3 text-lg px-10 py-5"
            >
              <BookOpen className="w-5 h-5" />
              <span>Documentation</span>
            </motion.a>

            <motion.a
              href="https://github.com/JohannesLks/ADLAH"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-3 text-lg px-6 py-3 rounded-xl border border-gray-600/50 hover:border-red-500/50 backdrop-blur-sm"
            >
              <Github className="w-5 h-5" />
              <span>View Source</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>GPLv3 Licensed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>2.3k+ GitHub Stars</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Production Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-14 border-2 border-red-500/50 rounded-full flex justify-center backdrop-blur-sm bg-red-500/10"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-4 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-3"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;