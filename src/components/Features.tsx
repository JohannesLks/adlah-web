import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Network, 
  Database, 
  Lock, 
  Activity, 
  Layers,
  Target,
  Cpu,
  Globe,
  Settings,
  TrendingUp,
  Eye,
  Workflow
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: 'Deep Learning Engine',
      description: 'Advanced autoencoder and LSTM models with intelligent heuristic fusion for unprecedented first-flight anomaly detection accuracy.',
      tech: ['Autoencoder Networks', 'LSTM Analysis', 'Heuristic Scoring', 'Neural Fusion'],
      color: 'from-blue-500 via-purple-500 to-indigo-600',
      stats: { accuracy: '99.7%', speed: '&lt;100ms' }
    },
    {
      icon: Zap,
      title: 'RL Orchestration',
      description: 'Reinforcement learning-powered adaptive orchestration with intelligent pod spawning based on real-time threat assessment.',
      tech: ['Q-Learning', 'Dynamic Scaling', 'Threat Assessment', 'Resource Optimization'],
      color: 'from-yellow-400 via-orange-500 to-red-500',
      stats: { efficiency: '300%', scaling: 'Auto' }
    },
    {
      icon: Network,
      title: 'MADCAT Sensor Network',
      description: 'First-flight data capture with real-time network traffic analysis and intelligent preprocessing for maximum detection coverage.',
      tech: ['Traffic Analysis', 'Real-time Processing', 'Data Preprocessing', 'Network Monitoring'],
      color: 'from-green-400 via-teal-500 to-cyan-600',
      stats: { coverage: '360°', latency: '&lt;10ms' }
    },
    {
      icon: Database,
      title: 'ELK Stack Integration',
      description: 'Centralized data processing with Elasticsearch, Logstash, and Kibana for comprehensive threat intelligence and visualization.',
      tech: ['Elasticsearch', 'Logstash', 'Kibana', 'Data Pipeline'],
      color: 'from-purple-500 via-pink-500 to-rose-600',
      stats: { throughput: '10K TPS', storage: 'Unlimited' }
    },
    {
      icon: Shield,
      title: 'Adaptive Honeypots',
      description: 'High-interaction containerized honeypots on Kubernetes with dynamic spawning and intelligent threat interaction capabilities.',
      tech: ['Kubernetes', 'Docker', 'Container Orchestration', 'Dynamic Spawning'],
      color: 'from-red-500 via-rose-500 to-pink-600',
      stats: { pods: 'Unlimited', uptime: '99.99%' }
    },
    {
      icon: Lock,
      title: 'Military-Grade Security',
      description: 'End-to-end TLS encryption, role-based access control, comprehensive audit logging, and zero-trust architecture.',
      tech: ['TLS 1.3', 'RBAC', 'Audit Logging', 'Zero-Trust'],
      color: 'from-indigo-500 via-blue-500 to-cyan-600',
      stats: { encryption: 'AES-256', compliance: '100%' }
    }
  ];

  const keyCapabilities = [
    {
      icon: Target,
      title: 'First-Flight Detection',
      value: '&lt; 100ms',
      description: 'Ultra-fast anomaly detection on first contact',
      color: 'text-red-400'
    },
    {
      icon: Cpu,
      title: 'Processing Power',
      value: '10K+ TPS',
      description: 'High-throughput transaction processing',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      value: '24/7/365',
      description: 'Continuous monitoring and threat detection',
      color: 'text-green-400'
    },
    {
      icon: Settings,
      title: 'Adaptability',
      value: 'Auto-tune',
      description: 'Self-optimizing detection algorithms',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Accuracy Rate',
      value: '99.7%',
      description: 'Industry-leading detection accuracy',
      color: 'text-yellow-400'
    },
    {
      icon: Eye,
      title: 'Threat Visibility',
      value: '360°',
      description: 'Complete network visibility and monitoring',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-900/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6"
          >
            <Workflow className="w-4 h-4 mr-2" />
            Advanced Capabilities
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="gradient-text">Next-Generation</span>
            <br />
            <span className="text-white">Threat Detection</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            ADLAH combines cutting-edge machine learning with enterprise-grade security 
            to deliver unparalleled threat detection and response capabilities.
          </p>
        </motion.div>

        {/* Key Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24"
        >
          {keyCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card text-center group hover-lift cursor-pointer"
            >
              <capability.icon className={`w-10 h-10 ${capability.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <div className={`text-2xl md:text-3xl font-bold ${capability.color} mb-2 font-mono`}>
                {capability.value}
              </div>
              <div className="font-semibold text-white mb-2 text-sm md:text-base">
                {capability.title}
              </div>
              <div className="text-xs md:text-sm text-gray-400 leading-tight">
                {capability.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="card-glow group hover-lift relative overflow-hidden"
            >
              {/* Feature Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
              </div>
              
              {/* Feature Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="flex space-x-6 mb-6">
                {Object.entries(feature.stats).map(([key, value], statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-xl font-bold text-red-400 font-mono" dangerouslySetInnerHTML={{ __html: value }} />
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{key}</div>
                  </div>
                ))}
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {feature.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800/50 text-red-300 text-sm font-medium rounded-full border border-gray-700/50 backdrop-blur-sm group-hover:border-red-500/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Overlay Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Technical Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card border-gradient relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-800/5" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Enterprise Architecture
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-5 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">Modular Design</h4>
                <p className="text-gray-300 leading-relaxed">
                  Sensors, Hive (central), and Cluster components work independently 
                  for maximum scalability and reliability.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-green-500 to-teal-600 p-5 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">Real-time Processing</h4>
                <p className="text-gray-300 leading-relaxed">
                  Sub-100ms detection latency with continuous learning and 
                  adaptation to emerging threat patterns.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 p-5 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">Centralized Intelligence</h4>
                <p className="text-gray-300 leading-relaxed">
                  ELK stack integration provides comprehensive analytics, 
                  visualization, and historical threat intelligence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;