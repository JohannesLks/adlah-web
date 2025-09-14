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
  Clock
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
      price: 'From $2,500/month',
      features: [
        'Basic anomaly detection',
        'Up to 5 sensors',
        'Standard reporting',
        'Email support',
        '99.5% uptime SLA'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Professional',
      icon: Zap,
      price: 'From $7,500/month',
      features: [
        'Advanced ML models',
        'Up to 25 sensors',
        'Real-time dashboards',
        'Priority support',
        '99.9% uptime SLA',
        'Custom integrations'
      ],
      color: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Globe,
      price: 'Custom pricing',
      features: [
        'Full ADLAH deployment',
        'Unlimited sensors',
        'Dedicated infrastructure',
        '24/7 support',
        '99.99% uptime SLA',
        'On-premise options',
        'Custom development'
      ],
      color: 'from-red-500 to-rose-600'
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
      <section id="service" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center card"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-dark-300 mb-6">
              We've received your request for ADLAH Honeynet as a Service. 
              Our team will contact you within 24 hours to discuss your requirements.
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
    <section id="service" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Honeynet as a Service</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Deploy ADLAH's advanced threat detection capabilities without the complexity. 
            Choose from our managed service tiers or request a custom enterprise solution.
          </p>
        </motion.div>

        {/* Service Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {serviceTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`card-glow relative ${tier.popular ? 'ring-2 ring-primary-500' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tier.color} p-3 mb-4`}>
                <tier.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-primary-400 mb-6">{tier.price}</div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Request a Custom Quote
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="form-input"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
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
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Company *
                  </label>
                  <input
                    {...register('company', { required: 'Company is required' })}
                    className="form-input"
                    placeholder="Acme Corporation"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.company.message}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
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
                  <label className="block text-sm font-medium text-dark-300 mb-2">
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
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.serviceType.message}</span>
                    </p>
                  )}
                </div>

                {/* Infrastructure */}
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
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
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.infrastructure.message}</span>
                    </p>
                  )}
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Implementation Timeline *
                  </label>
                  <select
                    {...register('timeline', { required: 'Timeline is required' })}
                    className="form-input"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (< 2 weeks)</option>
                    <option value="month">Within 1 month</option>
                    <option value="quarter">Within 3 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.timeline.message}</span>
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Monthly Budget Range *
                  </label>
                  <select
                    {...register('budget', { required: 'Budget range is required' })}
                    className="form-input"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.budget.message}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Specific Requirements *
                </label>
                <textarea
                  {...register('requirements', { required: 'Requirements are required' })}
                  rows={4}
                  className="form-textarea"
                  placeholder="Please describe your specific security requirements, compliance needs, expected traffic volume, integration requirements, etc."
                />
                {errors.requirements && (
                  <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.requirements.message}</span>
                  </p>
                )}
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  {...register('additionalInfo')}
                  rows={3}
                  className="form-textarea"
                  placeholder="Any additional information that would help us provide a better quote..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                {submitError && (
                  <p className="mb-4 text-red-400 flex items-center justify-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{submitError}</span>
                  </p>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Request Quote</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Users,
              title: 'Expert Support',
              description: 'Dedicated cybersecurity experts and ML engineers'
            },
            {
              icon: Server,
              title: 'Scalable Infrastructure',
              description: 'Auto-scaling cloud infrastructure with global presence'
            },
            {
              icon: Clock,
              title: 'Rapid Deployment',
              description: 'Get up and running in as little as 2 weeks'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <item.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-dark-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceForm;