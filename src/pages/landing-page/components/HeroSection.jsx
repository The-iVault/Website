import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [vaultOpen, setVaultOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVaultOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    const demoSection = document.getElementById('demo-form');
    if (demoSection) {
      demoSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-background via-slate-900 to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-success/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
              >
                <Icon name="Shield" size={16} className="text-accent mr-2" />
                <span className="text-sm font-mono text-accent">YOUR DATA. YOUR STORAGE. YOUR CONTROL.</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-tight"
              >
                Next-Gen
                <span className="block text-accent">Network Integrated Storage</span>
                <span className="block">System</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                iVault combines dedicated SSD storage, ARM Cortex-A76 processor, and custom hardware to deliver lightning-fast performance with uncompromising privacy — all accessible through a seamless multi-device interface.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* <Button
                variant="default"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-bold px-8 py-4 text-lg"
                onClick={handleGetStarted}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Secure Your Data Today
              </Button> */}
              <Button
                variant="outline"
                size="lg"
                className="border-accent/50 text-accent hover:bg-accent/10 px-8 py-4 text-lg"
                onClick={handleLearnMore}
                iconName="Info"
                iconPosition="left"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border"
            >
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Icon name="Zap" size={20} className="text-accent mr-2" />
                  <span className="font-semibold text-foreground">Ultra-Fast SSD</span>
                </div>
                <div className="text-sm text-muted-foreground">Dedicated solid-state drives</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Icon name="Shield" size={20} className="text-success mr-2" />
                  <span className="font-semibold text-foreground">Hardware Security</span>
                </div>
                <div className="text-sm text-muted-foreground">End-to-end encryption</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Icon name="Smartphone" size={20} className="text-warning mr-2" />
                  <span className="font-semibold text-foreground">Multi-Platform</span>
                </div>
                <div className="text-sm text-muted-foreground">Works everywhere</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3D Vault Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Vault Door */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full border-4 border-accent/30 shadow-2xl"
                animate={{
                  rotateY: vaultOpen ? -90 : 0,
                  scale: vaultOpen ? 0.8 : 1
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Vault Handle */}
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-16 h-16 bg-accent rounded-full border-4 border-accent-foreground flex items-center justify-center">
                  <Icon name="Lock" size={24} className="text-accent-foreground" />
                </div>
                
                {/* Vault Details */}
                <div className="absolute inset-4 border-2 border-accent/20 rounded-full"></div>
                <div className="absolute inset-8 border border-accent/10 rounded-full"></div>
              </motion.div>

              {/* Secure Data Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: vaultOpen ? 1 : 0, 
                  scale: vaultOpen ? 1 : 0 
                }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-80 h-80 relative">
                  {/* Data Nodes */}
                  {[...Array(8)]?.map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-success rounded-full"
                      style={{
                        top: `${50 + 35 * Math.cos(i * Math.PI / 4)}%`,
                        left: `${50 + 35 * Math.sin(i * Math.PI / 4)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                  
                  {/* Central Core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent rounded-full flex items-center justify-center border-4 border-success">
                    <Icon name="Database" size={24} className="text-accent-foreground" />
                  </div>
                  
                  {/* Connection Lines */}
                  {[...Array(8)]?.map((_, i) => (
                    <motion.div
                      key={`line-${i}`}
                      className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-accent to-success origin-left"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: vaultOpen ? 1 : 0 }}
                      transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <Icon name="ChevronDown" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;