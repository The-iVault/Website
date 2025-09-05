import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SecuritySection = () => {
  const [activeFeature, setActiveFeature] = useState('encryption');

  const securityFeatures = {
    encryption: {
      title: "Hardware Encryption",
      // description: "AES-256, X86 encryption with quantum-resistant algorithms protecting your data at rest and in transit.",
      icon: "Shield",
      color: "text-success",
      details: [
        "AES-256 encryption standard",
        "Quantum-resistant algorithms",
        "End-to-end encryption",
        "Zero-knowledge architecture",
        "Hardware security modules (HSM)"
      ],
      metrics: {
        strength: "256-bit",
        compliance: "FIPS 140-2 Level 3",
        resistance: "Quantum-Safe"
      }
    },
    access: {
      title: "Advanced Access Control",
      // description: "Multi-factor authentication and role-based access control with enterprise-grade identity management.",
      icon: "Key",
      color: "text-accent",
      details: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Single sign-on (SSO) integration",
        "Biometric authentication",
        "Session management & monitoring"
      ],
      metrics: {
        strength: "MFA Required",
        compliance: "SOC 2 Type II",
        resistance: "Zero Trust"
      }
    },
    monitoring: {
      title: "Real-Time Monitoring",
      // description: "24/7 security monitoring with AI-powered threat detection and automated incident response.",
      icon: "Eye",
      color: "text-warning",
      details: [
        "24/7 security operations center",
        "AI-powered threat detection",
        "Real-time anomaly detection",
        "Automated incident response",
        "Comprehensive audit logging"
      ],
      metrics: {
        strength: "24/7 SOC",
        compliance: "ISO 27001",
        resistance: "AI-Powered"
      }
    },
    compliance: {
      title: "Enterprise Compliance",
      // description: "Comprehensive compliance with international standards and regulations for enterprise data protection.",
      icon: "FileCheck",
      color: "text-destructive",
      details: [
        "SOC 2 Type II certified",
        "ISO 27001 compliant",
        "GDPR & CCPA ready",
        "HIPAA compliant options",
        "Regular third-party audits"
      ],
      metrics: {
        strength: "Multi-Standard",
        compliance: "Certified",
        resistance: "Audit-Ready"
      }
    }
  };

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2",
      icon: "Shield",
      status: "Certified",
      color: "text-success"
    },
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: "Award",
      status: "Certified",
      color: "text-accent"
    },
    {
      name: "FIPS 140-2",
      description: "Federal Information Processing Standard",
      icon: "Lock",
      status: "Level 3",
      color: "text-warning"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation",
      icon: "Globe",
      status: "Compliant",
      color: "text-success"
    }
  ];

  const securityStats = [
    { label: "Security Incidents", value: "0", description: "Zero breaches since inception" },
    { label: "Uptime SLA", value: "99.99%", description: "Enterprise-grade availability" },
    { label: "Data Centers", value: "47", description: "Global distributed infrastructure" },
    { label: "Compliance Standards", value: "12+", description: "International certifications" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Enterprise Security
            <span className="block text-success">You Can Trust</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Physical security architecture with comprehensive compliance certifications. 
            Your data is protected by the same standards used by government and defense organizations.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Feature Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {Object.entries(securityFeatures)?.map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setActiveFeature(key)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeFeature === key
                    ? 'border-accent bg-accent/10' :'border-border bg-card hover:border-accent/50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    activeFeature === key ? 'bg-accent/20' : 'bg-slate-700'
                  }`}>
                    <Icon name={feature?.icon} size={24} className={feature?.color} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{feature?.title}</h3>
                    <p className="text-muted-foreground">{feature?.description}</p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`transition-transform duration-300 ${
                      activeFeature === key ? 'rotate-90 text-accent' : 'text-muted-foreground'
                    }`} 
                  />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Feature Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <Icon 
                    name={securityFeatures?.[activeFeature]?.icon} 
                    size={32} 
                    className={securityFeatures?.[activeFeature]?.color} 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{securityFeatures?.[activeFeature]?.title}</h3>
                  <p className="text-muted-foreground">{securityFeatures?.[activeFeature]?.description}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {securityFeatures?.[activeFeature]?.details?.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-success mr-3" />
                    <span className="text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {Object.entries(securityFeatures?.[activeFeature]?.metrics)?.map(([key, value]) => (
                  <div key={key} className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-accent mb-1">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-8">
            Security Certifications & Compliance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <motion.div
                key={cert?.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={32} className={cert?.color} />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{cert?.description}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  cert?.status === 'Certified' || cert?.status === 'Compliant' 
                    ? 'bg-success/20 text-success' :'bg-warning/20 text-warning'
                }`}>
                  <Icon name="CheckCircle" size={12} className="mr-1" />
                  {cert?.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-success/10 to-accent/10 border border-success/20 rounded-xl p-8"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-8">
            Security by the Numbers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityStats?.map((stat, index) => (
              <motion.div
                key={stat?.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-success mb-2">{stat?.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat?.label}</div>
                <div className="text-sm text-muted-foreground">{stat?.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ShieldCheck" size={40} className="text-success" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Our Security Promise
            </h3>
            <p className="text-muted-foreground mb-6">
              We guarantee the highest level of data protection with our zero-breach track record. 
              Your enterprise data is protected by military-grade security that exceeds industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-sm text-success">
                <Icon name="Shield" size={16} className="mr-2" />
                <span>Zero data breaches</span>
              </div>
              <div className="flex items-center text-sm text-accent">
                <Icon name="Lock" size={16} className="mr-2" />
                <span>Hardware encryption</span>
              </div>
              <div className="flex items-center text-sm text-warning">
                <Icon name="Eye" size={16} className="mr-2" />
                <span>24/7 monitoring</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;