import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SolutionSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const coreFeatures = [
    {
      title: "Ultra-Fast SSD Performance",
      description: "Dedicated solid-state drives for rapid read/write speeds.",
      icon: "Zap",
      color: "text-accent",
      bgColor: "bg-accent/20"
    },
    {
      title: "Intelligent Processing",
      description: "Arm Cortex-A76 chip optimizes data handling, encryption, and compression.",
      icon: "Cpu",
      color: "text-success",
      bgColor: "bg-success/20"
    },
    {
      title: "End-to-End Security",
      description: "Encryption with physical firewall integration.",
      icon: "Shield",
      color: "text-warning",
      bgColor: "bg-warning/20"
    },
    {
      title: "Hybrid Access",
      description: "Store locally, sync to cloud, and access anywhere with low latency.",
      icon: "Cloud",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20"
    },
    {
      title: "Multi-Platform Integration",
      description: "Works with Android TV, PCs, smartphones, and enterprise networks.",
      icon: "Smartphone",
      color: "text-purple-400",
      bgColor: "bg-purple-400/20"
    },
    {
      title: "Scalable Storage",
      description: "Expand as your needs grow without downtime.",
      icon: "TrendingUp",
      color: "text-green-400",
      bgColor: "bg-green-400/20"
    }
  ];

  const workingSteps = [
    {
      step: 1,
      title: "Secure Upload",
      description: "Data is instantly encrypted on-device.",
      icon: "Upload"
    },
    {
      step: 2,
      title: "Optimized Storage",
      description: "Smart allocation between SSD and cloud backup.",
      icon: "Database"
    },
    {
      step: 3,
      title: "On-Demand Access",
      description: "Stream or retrieve files instantly from any device.",
      icon: "Download"
    },
    {
      step: 4,
      title: "Continuous Protection",
      description: "Automated backups, health monitoring, and threat defense.",
      icon: "Shield"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            About iVault
            <span className="block text-accent">Next-Era Data Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            iVault is a <strong className="text-foreground">cloud-connected, high-speed Network Integrated Storage system</strong> built for the next era of data security and accessibility. It combines dedicated SSD storage, an Arm Cortex-A76 processor, and custom hardware to deliver lightning-fast performance with uncompromising privacy — all accessible through a seamless multi-device interface.
          </p>
        </motion.div>

        {/* Core Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">Core Features</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures?.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300 cursor-pointer"
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-12 h-12 ${feature?.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <Icon name={feature?.icon} size={24} className={feature?.color} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{feature?.title}</h4>
                <p className="text-muted-foreground">{feature?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">How It Works</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {workingSteps?.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold">{step?.step}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{step?.title}</h4>
                    <p className="text-muted-foreground">{step?.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why iVault is Different */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">Why iVault is Different</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8 text-center"
            >
              <Icon name="Shield" size={48} className="text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-4">Physical + Digital Security</h4>
              <p className="text-muted-foreground">Unlike standard cloud drives, iVault integrates hardware-level security.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 rounded-xl p-8 text-center"
            >
              <Icon name="Key" size={48} className="text-success mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-4">Zero Data Lock-In</h4>
              <p className="text-muted-foreground">Full control over your files, no hidden restrictions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 rounded-xl p-8 text-center"
            >
              <Icon name="Zap" size={48} className="text-warning mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-4">High-Speed Hybrid Architecture</h4>
              <p className="text-muted-foreground">Balances speed, security, and scalability.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Target Users */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">Perfect For</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <Icon name="User" size={32} className="text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-4">Individuals</h4>
              <p className="text-muted-foreground">Personal data backup, media storage, and streaming.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <Icon name="Users" size={32} className="text-green-400 mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-4">Small Businesses</h4>
              <p className="text-muted-foreground">Secure client data, team collaboration, and file sharing.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <Icon name="Building" size={32} className="text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-4">Enterprises</h4>
              <p className="text-muted-foreground">High-performance storage with compliance-ready security.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;