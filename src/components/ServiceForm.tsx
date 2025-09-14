import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Shield, 
  Zap, 
  Globe,
  Users,
  Server,
  Clock,
  Star,
  Award,
  Rocket,
  Crown
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  serviceType: string;
  infrastructure: string;
  timeline: string;
  budget: string;
  requirements: string;
  additionalInfo?: string;
}

const ServiceForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const serviceTiers = [
    {
      name: 'Starter',
      icon: Shield,
      price: 'From $2,500',
      period: '/month',
      description: 'Perfect for small to medium organizations',
      features: [
        'Basic anomaly detection',
        'Up to 5 MADCAT sensors',
        'Standard ELK dashboard',
        'Email support (48h response)',
        '99.5% uptime SLA',
        'Basic threat reports'
      ],
      color: 'from-green-500 to-teal-600',
      badge: null,
      popular: false
    },
    {
      name: 'Professional',
      icon: Zap,
      price: 'From $7,500',
      period: '/month',
      description: 'Advanced protection for growing enterprises',
      features: [
        'Advanced ML models & RL orchestration',
        'Up to 25 MADCAT sensors',
        'Real-time Kibana dashboards',
        'Priority support (24h response)',
        '99.9% uptime SLA',
        'Custom integrations & APIs',
        'Advanced threat intelligence',
        'Dedicated account manager'
      ],
      color: 'from-blue-500 to-purple-600',
      badge: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: 'pricing',
      description: 'Complete ADLAH deployment for large organizations',
      features: [
        'Full ADLAH deployment & customization',
        'Unlimited MADCAT sensors',
        'Dedicated cloud infrastructure',
        '24/7 premium support & monitoring',
        '99.99% uptime SLA',
        'On-premise deployment options',
        'Custom ML model development',
        'White-label solutions',
        'Compliance certifications'
      ],
      color: 'from-red-500 to-rose-600',
      badge: 'Enterprise',
      popular: false
    }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send this data to your backend
      console.log('Form submitted:', data);
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="service" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-red-900/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center card border-gradient"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Request Received!
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Thank you for your interest in ADLAH Honeynet as a Service. 
              Our cybersecurity experts will contact you within 24 hours to discuss your requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Submit Another Request
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="service" className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-red-900/5" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
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
            <Rocket className="w-4 h-4 mr-2" />
            Honeynet as a Service
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="gradient-text">Deploy ADLAH</span>
            <br />
            <span className="text-white">Without Complexity</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Choose from our managed service tiers or request a custom enterprise solution. 
            Get advanced threat detection up and running in weeks, not months.
          </p>
        </motion.div>

        {/* Service Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {serviceTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`card-glow relative hover-lift ${tier.popular ? 'ring-2 ring-red-500/50 scale-105' : ''}`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className={`px-4 py-1 rounded-full text-sm font-bold text-white ${
                    tier.popular ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-gray-600 to-gray-700'
                  }`}>
                    {tier.badge}
                  </span>
                </div>
              )}
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tier.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <tier.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Header */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              
              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold text-red-400">{tier.price}</span>
                  <span className="text-gray-400 ml-2">{tier.period}</span>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700' 
                    : 'border-2 border-red-500/50 text-red-400 hover:bg-red-500/10'
                }`}
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
          id="contact-form"
        >
          <div className="card border-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-800/5" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  Request Custom Quote
                </h3>
                <p className="text-xl text-gray-300">
                  Get a tailored ADLAH deployment plan for your organization
                </p>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="form-input"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="form-input"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Company *
                    </label>
                    <input
                      {...register('company', { required: 'Company is required' })}
                      className="form-input"
                      placeholder="Acme Corporation"
                    />
                    {errors.company && (
                      <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.company.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Service Tier *
                    </label>
                    <select
                      {...register('serviceType', { required: 'Service type is required' })}
                      className="form-input"
                    >
                      <option value="">Select a service tier</option>
                      <option value="starter">Starter - $2,500/month</option>
                      <option value="professional">Professional - $7,500/month</option>
                      <option value="enterprise">Enterprise - Custom pricing</option>
                      <option value="custom">Custom solution</option>
                    </select>
                    {errors.serviceType && (
                      <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.serviceType.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Infrastructure */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Infrastructure Preference *
                    </label>
                    <select
                      {...register('infrastructure', { required: 'Infrastructure preference is required' })}
                      className="form-input"
                    >
                      <option value="">Select infrastructure</option>
                      <option value="cloud">Cloud-hosted (AWS/Azure/GCP)</option>
                      <option value="hybrid">Hybrid deployment</option>
                      <option value="onpremise">On-premise</option>
                      <option value="flexible">Flexible/Discuss</option>
                    </select>
                    {errors.infrastructure && (
                      <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.infrastructure.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Implementation Timeline *
                    </label>
                    <select
                      {...register('timeline', { required: 'Timeline is required' })}
                      className="form-input"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (&lt; 2 weeks)</option>
                      <option value="month">Within 1 month</option>
                      <option value="quarter">Within 3 months</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                    {errors.timeline && (
                      <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.timeline.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Monthly Budget Range *
                    </label>
                    <select
                      {...register('budget', { required: 'Budget range is required' })}
                      className="form-input"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">&lt; $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                    {errors.budget && (
                      <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.budget.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Specific Requirements *
                  </label>
                  <textarea
                    {...register('requirements', { required: 'Requirements are required' })}
                    rows={5}
                    className="form-textarea"
                    placeholder="Please describe your specific security requirements, compliance needs, expected traffic volume, integration requirements, etc."
                  />
                  {errors.requirements && (
                    <p className="mt-2 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.requirements.message}</span>
                    </p>
                  )}
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Additional Information
                  </label>
                  <textarea
                    {...register('additionalInfo')}
                    rows={4}
                    className="form-textarea"
                    placeholder="Any additional information that would help us provide a better quote..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  {submitError && (
                    <p className="mb-6 text-red-400 flex items-center justify-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{submitError}</span>
                    </p>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`btn-primary inline-flex items-center space-x-3 text-xl px-12 py-5 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Request Quote</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Users,
              title: 'Expert Support',
              description: 'Dedicated cybersecurity experts and ML engineers',
              color: 'from-blue-500 to-purple-600'
            },
            {
              icon: Server,
              title: 'Scalable Infrastructure',
              description: 'Auto-scaling cloud infrastructure with global presence',
              color: 'from-green-500 to-teal-600'
            },
            {
              icon: Clock,
              title: 'Rapid Deployment',
              description: 'Get up and running in as little as 2 weeks',
              color: 'from-red-500 to-rose-600'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${item.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceForm;