import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Network, ArrowRight, Github, BookOpen, Play, Star, Target, Activity } from 'lucide-react';

const Hero = () => {
  const stats = [
    { label: 'Detection Speed', value: '<100ms', icon: '⚡', color: 'text-yellow-400' },
    { label: 'Accuracy Rate', value: '99.7%', icon: '🎯', color: 'text-green-400' },
    { label: 'Auto-scaling', value: 'Infinite', icon: '🚀', color: 'text-blue-400' },
    { label: 'Security', value: 'Military', icon: '🛡️', color: 'text-red-400' },
  ];

  const techHighlights = [
    { text: 'Deep Learning', color: 'text-blue-400' },
    { text: 'Reinforcement Learning', color: 'text-purple-400' },
    { text: 'Kubernetes', color: 'text-cyan-400' },
    { text: 'Real-time Analysis', color: 'text-green-400' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-7xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-900/40 via-red-800/30 to-red-900/40 border border-red-500/30 text-red-300 text-sm font-medium mb-12 backdrop-blur-xl shadow-2xl"
          >
            <Star className="w-5 h-5 mr-3 text-red-400" />
            <span className="font-semibold">Enterprise-Grade Deep Learning Honeynet Framework</span>
            <div className="ml-3 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight">
              <span className="block">
                <span className="gradient-text font-mono neon-text">
                  ADLAH
                </span>
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl mt-6 text-white/90 font-light">
                Adaptive Deep Learning
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-4 gradient-text-alt font-medium">
                Anomaly Detection Honeynet
              </span>
            </h1>

            {/* Tech Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {techHighlights.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`px-4 py-2 rounded-full bg-black/30 border border-white/10 ${tech.color} text-sm font-medium backdrop-blur-sm`}
                >
                  {tech.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <p className="text-xl md:text-3xl text-gray-300 mb-8 leading-relaxed font-light">
              Revolutionary threat detection using{' '}
              <span className="text-red-400 font-semibold neon-text">unsupervised deep learning</span>,{' '}
              <span className="text-blue-400 font-semibold">reinforcement learning orchestration</span>,{' '}
              and <span className="text-green-400 font-semibold">adaptive honeypot clusters</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-400 font-mono">
              <span className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-red-400" />
                First-flight anomaly detection
              </span>
              <span className="flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-400" />
                Real-time threat analysis
              </span>
              <span className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Military-grade security
              </span>
            </div>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="card hover-lift group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 stats-counter ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">
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
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
          >
            <motion.a
              href="#service"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center space-x-4 text-xl px-12 py-6 pulse-glow font-semibold"
            >
              <Play className="w-6 h-6" />
              <span>Deploy ADLAH</span>
              <ArrowRight className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://docs.adlah.dev/dev/architecture/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center space-x-4 text-xl px-12 py-6 font-semibold"
            >
              <BookOpen className="w-6 h-6" />
              <span>Documentation</span>
            </motion.a>

            <motion.a
              href="https://github.com/JohannesLks/ADLAH"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-3 text-xl px-8 py-4 rounded-xl border border-gray-600/50 hover:border-red-500/50 backdrop-blur-sm bg-black/20 hover:bg-black/40"
            >
              <Github className="w-6 h-6" />
              <span>View Source</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm mb-12"
          >
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-green-500" />
              <span>GPLv3 Licensed</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>2.3k+ GitHub Stars</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm">
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
          className="w-8 h-14 border-2 border-red-500/50 rounded-full flex justify-center backdrop-blur-sm bg-red-500/10 shadow-lg"
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