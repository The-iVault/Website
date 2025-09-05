import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-success/10 to-accent/10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="CheckCircle" size={48} className="text-success" />
            </div>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Welcome to iVault!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your interest in iVault. We'll be in touch soon with more information about securing your digital life.
            </p>
            
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">What's Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-accent font-bold text-sm">1</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Product Information</h4>
                    <p className="text-muted-foreground">Receive detailed specifications and pricing information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-accent font-bold text-sm">2</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Personal Consultation</h4>
                    <p className="text-muted-foreground">Schedule a call to discuss your specific storage needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-accent font-bold text-sm">3</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Custom Setup</h4>
                    <p className="text-muted-foreground">Get your iVault system configured for optimal performance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/5 to-success/5">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                  Secure Your Digital Life Today
                  <span className="block text-accent">With iVault</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  <em>"Secure your digital life today with iVault — the vault that's always with you."</em>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join thousands who trust iVault for their most important data. Experience the perfect balance of speed, security, and convenience.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Lightning-Fast Performance</h3>
                    <p className="text-muted-foreground">Ultra-fast SSD performance with ARM Cortex-A76 processing power</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Uncompromising Security</h3>
                    <p className="text-muted-foreground">Encryption with physical firewall integration</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Smartphone" size={24} className="text-warning" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Universal Access</h3>
                    <p className="text-muted-foreground">Seamless integration across all your devices and platforms</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-border rounded-xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Get Started with iVault
                  </h3>
                  <p className="text-muted-foreground">
                    Enter your email to learn more about iVault and stay updated on availability
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    required
                    description="We'll send you product updates and availability notifications"
                  />

                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Icon name="Info" size={16} className="text-accent mr-2" />
                      <span className="text-sm font-semibold text-foreground">What you'll receive:</span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Icon name="CheckCircle" size={12} className="text-success mr-2" />
                        <span>Product specifications and pricing</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="CheckCircle" size={12} className="text-success mr-2" />
                        <span>Early access notifications</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="CheckCircle" size={12} className="text-success mr-2" />
                        <span>Setup and installation guides</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="CheckCircle" size={12} className="text-success mr-2" />
                        <span>Exclusive offers and updates</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isLoading}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-bold"
                    iconName={isLoading ? "Loader2" : "ArrowRight"}
                    iconPosition="right"
                  >
                    {isLoading ? 'Securing Your Spot...' : 'Secure Your Digital Life'}
                  </Button>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to receive product updates. 
                      No spam, unsubscribe anytime.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;