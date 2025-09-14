import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Database, 
  Network, 
  Brain, 
  Zap,
  ArrowRight,
  Monitor,
  Cloud,
  Lock
} from 'lucide-react';

const Architecture = () => {
  const components = [
    {
      id: 'sensor',
      title: 'MADCAT Sensor',
      description: 'First-flight data capture',
      icon: Network,
      position: { x: 0, y: 0 },
      color: 'from-green-500 to-teal-600',
      details: ['Network Traffic Analysis', 'Real-time Monitoring', 'Data Preprocessing']
    },
    {
      id: 'ml',
      title: 'ML Engine',
      description: 'Deep learning models',
      icon: Brain,
      position: { x: 1, y: 0 },
      color: 'from-blue-500 to-purple-600',
      details: ['Autoencoder', 'LSTM Networks', 'Heuristic Fusion']
    },
    {
      id: 'orchestrator',
      title: 'RL Orchestrator',
      description: 'Adaptive pod spawning',
      icon: Zap,
      position: { x: 2, y: 0 },
      color: 'from-yellow-500 to-orange-600',
      details: ['Reinforcement Learning', 'Dynamic Scaling', 'Resource Management']
    },
    {
      id: 'hive',
      title: 'Central Hive',
      description: 'ELK stack processing',
      icon: Database,
      position: { x: 1, y: 1 },
      color: 'from-purple-500 to-pink-600',
      details: ['Elasticsearch', 'Logstash', 'Kibana Dashboard']
    },
    {
      id: 'honeypots',
      title: 'Honeypot Cluster',
      description: 'High-interaction pods',
      icon: Shield,
      position: { x: 0, y: 2 },
      color: 'from-red-500 to-rose-600',
      details: ['Kubernetes Pods', 'Container Orchestration', 'Threat Interaction']
    },
    {
      id: 'security',
      title: 'Security Layer',
      description: 'TLS & authentication',
      icon: Lock,
      position: { x: 2, y: 2 },
      color: 'from-indigo-500 to-blue-600',
      details: ['TLS Encryption', 'RBAC', 'Audit Logging']
    }
  ];

  const dataFlow = [
    { from: 'sensor', to: 'ml', label: 'Raw Data' },
    { from: 'ml', to: 'orchestrator', label: 'Anomaly Score' },
    { from: 'orchestrator', to: 'honeypots', label: 'Pod Spawn' },
    { from: 'ml', to: 'hive', label: 'Analysis Results' },
    { from: 'honeypots', to: 'hive', label: 'Interaction Logs' },
    { from: 'hive', to: 'security', label: 'Secure Access' }
  ];

  return (
    <section id="architecture" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">System Architecture</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A comprehensive view of ADLAH's modular architecture and data flow, 
            designed for scalability, security, and real-time threat detection.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {components.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  relative card-glow group cursor-pointer
                  ${component.position.x === 1 ? 'col-start-2' : ''}
                  ${component.position.y === 1 ? 'row-start-2' : ''}
                  ${component.position.y === 2 ? 'row-start-3' : ''}
                `}
                style={{
                  gridColumn: component.position.x + 1,
                  gridRow: component.position.y + 1
                }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${component.color} p-4 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <component.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-primary-400 transition-colors">
                  {component.title}
                </h3>
                
                <p className="text-dark-300 text-sm text-center mb-4">
                  {component.description}
                </p>
                
                <div className="space-y-1">
                  {component.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="text-xs text-primary-400 bg-dark-800 px-2 py-1 rounded text-center"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Data Flow Arrows - Hidden on mobile for clarity */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {dataFlow.map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.2 }}
                className="absolute"
              >
                {/* This would need custom positioning based on component positions */}
                {/* Simplified for demo - in production, calculate exact positions */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Flow Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              step: '01',
              title: 'Data Capture',
              description: 'MADCAT sensors capture first-flight network traffic and forward to ML engine for analysis.',
              icon: Monitor
            },
            {
              step: '02',
              title: 'Anomaly Detection',
              description: 'Deep learning models process data in real-time, generating anomaly scores and threat assessments.',
              icon: Brain
            },
            {
              step: '03',
              title: 'Adaptive Response',
              description: 'RL orchestrator spawns honeypot pods based on threat level, while data flows to central hive.',
              icon: Cloud
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary-500 transition-colors">
                    {step.step}
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <step.icon className="w-5 h-5 text-primary-400" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Performance Specifications
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Detection Latency', value: '< 100ms', icon: Zap },
              { label: 'Throughput', value: '10K+ TPS', icon: Server },
              { label: 'Accuracy', value: '99.7%', icon: Shield },
              { label: 'Uptime', value: '99.9%', icon: Monitor }
            ].map((spec, index) => (
              <div key={index} className="text-center group">
                <spec.icon className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:text-primary-400 transition-colors" />
                <div className="text-2xl font-bold text-primary-400 mb-1">
                  {spec.value}
                </div>
                <div className="text-sm text-dark-400 font-medium">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://docs.adlah.dev/dev/architecture/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Explore Technical Documentation</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;