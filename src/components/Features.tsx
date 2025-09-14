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
  Settings
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Deep Learning Detection',
      description: 'Autoencoder + LSTM models with heuristic fusion for first-flight anomaly detection',
      tech: ['Autoencoder', 'LSTM', 'Heuristic Scoring'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Reinforcement Learning',
      description: 'Adaptive orchestration with intelligent pod spawning based on threat assessment',
      tech: ['RL Orchestration', 'Dynamic Scaling', 'Threat Assessment'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Network,
      title: 'MADCAT Sensor',
      description: 'First-flight data capture with real-time network traffic analysis',
      tech: ['Network Monitoring', 'Traffic Analysis', 'Real-time Processing'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Database,
      title: 'ELK Stack Integration',
      description: 'Centralized data processing with Elasticsearch, Logstash, and Kibana',
      tech: ['Elasticsearch', 'Logstash', 'Kibana'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'High-Interaction Honeypots',
      description: 'Containerized workloads on Kubernetes for scalable threat interaction',
      tech: ['Kubernetes', 'Docker', 'Container Orchestration'],
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Lock,
      title: 'Security-First Design',
      description: 'TLS log forwarding, authentication, role-based access, and audit trails',
      tech: ['TLS Encryption', 'RBAC', 'Audit Logging'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const keyCapabilities = [
    {
      icon: Target,
      title: 'First-Flight Detection',
      value: '< 100ms',
      description: 'Ultra-fast anomaly detection on first contact'
    },
    {
      icon: Cpu,
      title: 'Processing Power',
      value: '10K+ TPS',
      description: 'High-throughput transaction processing'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      value: '24/7',
      description: 'Continuous monitoring and threat detection'
    },
    {
      icon: Settings,
      title: 'Adaptability',
      value: 'Auto-tune',
      description: 'Self-optimizing detection algorithms'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Advanced Capabilities</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            ADLAH combines cutting-edge machine learning with enterprise-grade security 
            to deliver unparalleled threat detection and response capabilities.
          </p>
        </motion.div>

        {/* Key Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {keyCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <capability.icon className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:text-primary-400 transition-colors" />
              <div className="text-2xl font-bold text-primary-400 mb-1">
                {capability.value}
              </div>
              <div className="font-semibold text-white mb-2">
                {capability.title}
              </div>
              <div className="text-sm text-dark-400">
                {capability.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-glow group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-dark-300 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {feature.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-dark-700 text-primary-400 text-xs font-medium rounded-full border border-dark-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 card"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Technical Architecture
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Layers className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Modular Design</h4>
              <p className="text-dark-300 text-sm">
                Sensors, Hive (central), and Cluster components work independently 
                for maximum scalability and reliability.
              </p>
            </div>
            
            <div className="text-center">
              <Activity className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Real-time Processing</h4>
              <p className="text-dark-300 text-sm">
                Sub-100ms detection latency with continuous learning and 
                adaptation to emerging threat patterns.
              </p>
            </div>
            
            <div className="text-center">
              <Database className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Centralized Intelligence</h4>
              <p className="text-dark-300 text-sm">
                ELK stack integration provides comprehensive analytics, 
                visualization, and historical threat intelligence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;