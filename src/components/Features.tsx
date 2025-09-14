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
  Workflow,
  Server,
  Cloud,
  Gauge
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: 'Deep Learning Engine',
      description: 'Advanced autoencoder and LSTM models with intelligent heuristic fusion for unprecedented first-flight anomaly detection accuracy.',
      tech: ['Autoencoder Networks', 'LSTM Analysis', 'Heuristic Scoring', 'Neural Fusion'],
      color: 'from-blue-500 via-purple-500 to-indigo-600',
      stats: { accuracy: '99.7%', speed: '<100ms' },
      gradient: 'bg-gradient-to-br from-blue-900/20 to-purple-900/20'
    },
    {
      icon: Zap,
      title: 'RL Orchestration',
      description: 'Reinforcement learning-powered adaptive orchestration with intelligent pod spawning based on real-time threat assessment.',
      tech: ['Q-Learning', 'Dynamic Scaling', 'Threat Assessment', 'Resource Optimization'],
      color: 'from-yellow-400 via-orange-500 to-red-500',
      stats: { efficiency: '300%', scaling: 'Auto' },
      gradient: 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20'
    },
    {
      icon: Network,
      title: 'MADCAT Sensor Network',
      description: 'First-flight data capture with real-time network traffic analysis and intelligent preprocessing for maximum detection coverage.',
      tech: ['Traffic Analysis', 'Real-time Processing', 'Data Preprocessing', 'Network Monitoring'],
      color: 'from-green-400 via-teal-500 to-cyan-600',
      stats: { coverage: '360°', latency: '<10ms' },
      gradient: 'bg-gradient-to-br from-green-900/20 to-teal-900/20'
    },
    {
      icon: Database,
      title: 'ELK Stack Integration',
      description: 'Centralized data processing with Elasticsearch, Logstash, and Kibana for comprehensive threat intelligence and visualization.',
      tech: ['Elasticsearch', 'Logstash', 'Kibana', 'Data Pipeline'],
      color: 'from-purple-500 via-pink-500 to-rose-600',
      stats: { throughput: '10K TPS', storage: 'Unlimited' },
      gradient: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20'
    },
    {
      icon: Shield,
      title: 'Adaptive Honeypots',
      description: 'High-interaction containerized honeypots on Kubernetes with dynamic spawning and intelligent threat interaction capabilities.',
      tech: ['Kubernetes', 'Docker', 'Container Orchestration', 'Dynamic Spawning'],
      color: 'from-red-500 via-rose-500 to-pink-600',
      stats: { pods: 'Unlimited', uptime: '99.99%' },
      gradient: 'bg-gradient-to-br from-red-900/20 to-rose-900/20'
    },
    {
      icon: Lock,
      title: 'Military-Grade Security',
      description: 'End-to-end TLS encryption, role-based access control, comprehensive audit logging, and zero-trust architecture.',
      tech: ['TLS 1.3', 'RBAC', 'Audit Logging', 'Zero-Trust'],
      color: 'from-indigo-500 via-blue-500 to-cyan-600',
      stats: { encryption: 'AES-256', compliance: '100%' },
      gradient: 'bg-gradient-to-br from-indigo-900/20 to-blue-900/20'
    }
  ];

  const keyCapabilities = [
    {
      icon: Target,
      title: 'First-Flight Detection',
      value: '< 100ms',
      description: 'Ultra-fast anomaly detection on first contact',
      color: 'text-red-400',
      bgColor: 'from-red-500/20 to-red-600/20'
    },
    {
      icon: Cpu,
      title: 'Processing Power',
      value: '10K+ TPS',
      description: 'High-throughput transaction processing',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      value: '24/7/365',
      description: 'Continuous monitoring and threat detection',
      color: 'text-green-400',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: Settings,
      title: 'Adaptability',
      value: 'Auto-tune',
      description: 'Self-optimizing detection algorithms',
      color: 'text-purple-400',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: TrendingUp,
      title: 'Accuracy Rate',
      value: '99.7%',
      description: 'Industry-leading detection accuracy',
      color: 'text-yellow-400',
      bgColor: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      icon: Eye,
      title: 'Threat Visibility',
      value: '360°',
      description: 'Complete network visibility and monitoring',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-600/20'
    }
  ];

  const architectureComponents = [
    {
      icon: Server,
      title: 'Modular Design',
      description: 'Sensors, Hive (central), and Cluster components work independently for maximum scalability and reliability.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Activity,
      title: 'Real-time Processing',
      description: 'Sub-100ms detection latency with continuous learning and adaptation to emerging threat patterns.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Cloud,
      title: 'Centralized Intelligence',
      description: 'ELK stack integration provides comprehensive analytics, visualization, and historical threat intelligence.',
      color: 'from-red-500 to-rose-600'
    }
  ];

  const performanceMetrics = [
    { label: 'Detection Latency', value: '< 100ms', icon: Zap, color: 'text-yellow-400' },
    { label: 'Throughput', value: '10K+ TPS', icon: Gauge, color: 'text-green-400' },
    { label: 'Accuracy', value: '99.7%', icon: Target, color: 'text-red-400' },
    { label: 'Uptime', value: '99.9%', icon: Shield, color: 'text-blue-400' }
  ];

  return (
    <section id="features" className="py-32 relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 border border-red-500/30 text-red-300 text-sm font-medium mb-8 backdrop-blur-xl"
          >
            <Workflow className="w-5 h-5 mr-3" />
            <span className="font-semibold">Advanced Capabilities</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="gradient-text font-['Orbitron']">Next-Generation</span>
            <br />
            <span className="text-white font-light">Threat Detection</span>
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-32"
        >
          {keyCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card text-center group hover-lift cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${capability.bgColor} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <capability.icon className={`w-8 h-8 ${capability.color}`} />
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${capability.color} mb-3 font-['Orbitron'] stats-counter`}>
                  {capability.value}
                </div>
                <div className="font-semibold text-white mb-3 text-sm md:text-base group-hover:text-red-300 transition-colors">
                  {capability.title}
                </div>
                <div className="text-xs md:text-sm text-gray-400 leading-tight">
                  {capability.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="card-glow group hover-lift relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Feature Icon with Enhanced Design */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color} p-5 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                </div>
                
                {/* Feature Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-red-300 transition-colors duration-300 font-['Orbitron']">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Enhanced Stats */}
                <div className="flex space-x-8 mb-8">
                  {Object.entries(feature.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className={`text-2xl font-bold stats-counter mb-1`} 
                           style={{ color: `hsl(${statIndex * 60}, 70%, 60%)` }}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Tech Stack with Enhanced Design */}
                <div className="flex flex-wrap gap-3">
                  {feature.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-black/30 text-red-300 text-sm font-medium rounded-full border border-red-500/20 backdrop-blur-sm group-hover:border-red-400/40 group-hover:bg-red-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card cyber-border relative overflow-hidden mb-32"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-800/5" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text font-['Orbitron']">
              Enterprise Architecture
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {architectureComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-r ${component.color} p-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <component.icon className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors font-['Orbitron']">
                    {component.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {component.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text font-['Orbitron']">
            Performance Specifications
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group hover-lift cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <spec.icon className={`w-8 h-8 ${spec.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className={`text-3xl font-bold ${spec.color} mb-2 stats-counter font-['Orbitron']`}>
                  {spec.value}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                  {spec.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;