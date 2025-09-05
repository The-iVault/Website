import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [storageAmount, setStorageAmount] = useState(10);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingTiers = [
    {
      name: "Professional",
      description: "Perfect for growing teams and small enterprises",
      basePrice: 99,
      pricePerTB: 15,
      features: [
        "Up to 50TB storage",
        "Standard ARM Cortex-A76 performance",
        "AES-256 encryption",
        "99.9% uptime SLA",
        "Email support",
        "Basic analytics dashboard",
        "Standard backup & recovery"
      ],
      limitations: [
        "Limited to 100 users",
        "Standard support hours"
      ],
      popular: false,
      color: "border-border"
    },
    {
      name: "Enterprise",
      description: "Advanced features for large organizations",
      basePrice: 299,
      pricePerTB: 25,
      features: [
        "Unlimited storage",
        "Enhanced ARM performance",
        "Military-grade AES-256",
        "99.99% uptime SLA",
        "24/7 priority support",
        "Advanced analytics & reporting",
        "Real-time backup & instant recovery",
        "Custom integrations",
        "Dedicated account manager",
        "Compliance certifications (SOC 2, ISO 27001)"
      ],
      limitations: [],
      popular: true,
      color: "border-accent"
    },
    {
      name: "Enterprise Plus",
      description: "Maximum performance and security for mission-critical operations",
      basePrice: 599,
      pricePerTB: 35,
      features: [
        "Unlimited storage with premium SSD",
        "Maximum ARM Cortex-A76 performance",
        "Quantum-resistant encryption",
        "99.999% uptime SLA",
        "White-glove support & onboarding",
        "Custom analytics & AI insights",
        "Zero-downtime backup & recovery",
        "Full API access & custom development",
        "Dedicated infrastructure",
        "All compliance certifications",
        "On-premise hybrid options"
      ],
      limitations: [],
      popular: false,
      color: "border-success"
    }
  ];

  const calculatePrice = (tier) => {
    const basePrice = tier?.basePrice;
    const storagePrice = storageAmount * tier?.pricePerTB;
    const monthlyTotal = basePrice + storagePrice;
    
    if (billingCycle === 'annual') {
      return Math.round(monthlyTotal * 12 * 0.85); // 15% annual discount
    }
    return monthlyTotal;
  };

  const calculateSavings = (tier) => {
    // Mock competitor pricing (typically 40-60% higher)
    const competitorPrice = calculatePrice(tier) * 1.5;
    const ourPrice = calculatePrice(tier);
    return Math.round(competitorPrice - ourPrice);
  };

  const calculateROI = (tier) => {
    const monthlyCost = calculatePrice(tier);
    const productivityGain = storageAmount * 100; // $100 per TB in productivity gains
    const roi = Math.round(((productivityGain - monthlyCost) / monthlyCost) * 100);
    return Math.max(roi, 150); // Minimum 150% ROI
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Enterprise-Grade Pricing
            <span className="block text-accent">Built for Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing that scales with your business. No hidden fees, no vendor lock-in. 
            Calculate your ROI and see immediate cost savings.
          </p>
        </motion.div>

        {/* Storage Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-center text-foreground mb-8">
              Calculate Your Costs
            </h3>
            
            <div className="space-y-6">
              {/* Storage Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-foreground font-semibold">Storage Required</label>
                  <span className="text-accent font-bold text-xl">{storageAmount} TB</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={storageAmount}
                  onChange={(e) => setStorageAmount(parseInt(e?.target?.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #00D4FF 0%, #00D4FF ${storageAmount}%, #334155 ${storageAmount}%, #334155 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>1 TB</span>
                  <span>100 TB</span>
                </div>
              </div>

              {/* Billing Cycle */}
              <div>
                <label className="text-foreground font-semibold mb-4 block">Billing Cycle</label>
                <div className="flex bg-slate-800 rounded-lg p-1">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-200 ${
                      billingCycle === 'monthly' ?'bg-accent text-accent-foreground' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-200 relative ${
                      billingCycle === 'annual' ?'bg-accent text-accent-foreground' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Annual
                    <span className="absolute -top-2 -right-2 bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                      Save 15%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers?.map((tier, index) => (
            <motion.div
              key={tier?.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-card border-2 ${tier?.color} rounded-xl p-8 ${
                tier?.popular ? 'scale-105 shadow-2xl' : ''
              }`}
            >
              {tier?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{tier?.name}</h3>
                <p className="text-muted-foreground mb-6">{tier?.description}</p>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold text-foreground">
                    ${calculatePrice(tier)?.toLocaleString()}
                    <span className="text-lg text-muted-foreground font-normal">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-success">
                      Save ${Math.round(calculatePrice(tier) * 0.15)?.toLocaleString()} annually
                    </div>
                  )}
                </div>

                {/* ROI Calculator */}
                <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Projected ROI</div>
                  <div className="text-2xl font-bold text-success">{calculateROI(tier)}%</div>
                  <div className="text-xs text-muted-foreground">
                    Save ${calculateSavings(tier)?.toLocaleString()}/mo vs competitors
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {tier?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
                
                {tier?.limitations?.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-start">
                    <Icon name="X" size={16} className="text-warning mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={tier?.popular ? "default" : "outline"}
                size="lg"
                fullWidth
                className={tier?.popular ? "bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow" : "border-accent/50 text-accent hover:bg-accent/10"}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20 rounded-xl p-8"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-8">
            All Plans Include
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Military-Grade Security</h4>
              <p className="text-sm text-muted-foreground">AES-256 encryption with quantum resistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-success" />
              </div>
              <h4 className="font-bold text-foreground mb-2">10x Faster Performance</h4>
              <p className="text-sm text-muted-foreground">ARM Cortex-A76 with SSD storage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={32} className="text-warning" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Global Edge Network</h4>
              <p className="text-sm text-muted-foreground">Distributed nodes for optimal performance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-destructive" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Zero Data Loss</h4>
              <p className="text-sm text-muted-foreground">Guaranteed data integrity and recovery</p>
            </div>
          </div>
        </motion.div>

        {/* Custom Enterprise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              For enterprises with unique requirements, we offer custom pricing and dedicated infrastructure. 
              Contact our enterprise team for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-accent/50 text-accent hover:bg-accent/10"
                iconName="Phone"
                iconPosition="left"
              >
                Schedule Call
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                iconName="Mail"
                iconPosition="left"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;