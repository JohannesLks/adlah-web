import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Network, ArrowRight, Github, BookOpen } from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { Icon: Shield, delay: 0, x: 100, y: 50 },
    { Icon: Brain, delay: 0.5, x: -80, y: 80 },
    { Icon: Network, delay: 1, x: 120, y: -60 },
    { Icon: Zap, delay: 1.5, x: -100, y: -40 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            x: [0, x, 0],
            y: [0, y, 0],
          }}
          transition={{
            delay,
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute text-primary-500"
        >
          <Icon className="w-16 h-16 md:w-24 md:h-24" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-900/30 border border-primary-700/50 text-primary-300 text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4 mr-2" />
            Advanced Deep Learning Honeynet Framework
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text glitch" data-text="ADLAH">
              ADLAH
            </span>
            <br />
            <span className="text-white">
              Adaptive Deep Learning
            </span>
            <br />
            <span className="text-primary-400">
              Anomaly Detection
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Real-time threat detection and dynamic behavior analysis using 
            <span className="text-primary-400 font-semibold"> unsupervised deep learning</span>, 
            <span className="text-primary-400 font-semibold"> reinforcement learning orchestration</span>, 
            and <span className="text-primary-400 font-semibold">scalable honeypots</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto"
          >
            {[
              { label: 'First-flight Detection', value: '< 100ms' },
              { label: 'Accuracy Rate', value: '99.7%' },
              { label: 'Adaptive Pods', value: 'Auto-scale' },
              { label: 'TLS Security', value: 'End-to-end' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#service"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://docs.adlah.dev/dev/architecture/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <BookOpen className="w-5 h-5" />
              <span>Documentation</span>
            </motion.a>

            <motion.a
              href="https://github.com/JohannesLks/ADLAH"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-dark-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 text-lg px-4 py-2"
            >
              <Github className="w-5 h-5" />
              <span>View Source</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;