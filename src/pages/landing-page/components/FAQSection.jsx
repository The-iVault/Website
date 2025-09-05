import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How does iVault's security compare to traditional cloud providers?",
      answer: `iVault uses military-grade AES-256 encryption with quantum-resistant algorithms, which is significantly more advanced than standard cloud providers. Our ARM Cortex-A76 architecture includes hardware-level security features that traditional x86 systems lack.\n\nKey differences:\n• Hardware Security Modules (HSM) for key management\n• Zero-knowledge architecture - we can't access your data\n• Quantum-resistant encryption algorithms\n• 24/7 SOC monitoring with AI threat detection\n• Zero security breaches since inception`,
      category: "Security"
    },
    {
      question: "What makes iVault 10x faster than traditional cloud storage?",
      answer: `Our performance advantage comes from three key innovations:\n\n1. **Enterprise SSD Storage**: We use only high-performance NVMe SSDs instead of traditional HDDs\n2. **ARM Cortex-A76 Architecture**: More efficient processing with lower latency than x86 systems\n3. **Distributed Edge Network**: 47 global data centers with intelligent routing\n\nTypical access times:\n• Traditional cloud: 150-300ms\n• iVault: 15-30ms\n• Performance improvement: 10x faster on average`,
      category: "Performance"
    },
    {
      question: "Is iVault compliant with enterprise regulations like GDPR and HIPAA?",
      answer: `Yes, iVault maintains comprehensive compliance with major international standards:\n\n**Current Certifications:**\n• SOC 2 Type II certified\n• ISO 27001 compliant\n• GDPR ready with data residency options\n• HIPAA compliant configurations available\n• FIPS 140-2 Level 3 certified\n\nWe undergo regular third-party audits and provide detailed compliance documentation for enterprise customers. Our legal team works directly with your compliance officers to ensure all requirements are met.`,
      category: "Compliance"
    },
    {
      question: "How does pricing work and what's included?",answer: `Our pricing is transparent with no hidden fees:\n\n**Base Plans Include:**\n• ARM Cortex-A76 processing power\n• Military-grade encryption\n• 24/7 support (varies by tier)\n• Global CDN access\n• Backup and recovery\n\n**Pricing Structure:**\n• Professional: $99/mo base + $15/TB\n• Enterprise: $299/mo base + $25/TB\n• Enterprise Plus: $599/mo base + $35/TB\n\n**Annual Discount:** 15% off when billed annually\n**No Additional Costs:** No bandwidth fees, API charges, or hidden costs`,
      category: "Pricing"
    },
    {
      question: "Can I migrate from my current cloud provider without downtime?",
      answer: `Yes, we offer zero-downtime migration services:\n\n**Migration Process:**\n1. **Assessment**: Our team analyzes your current setup\n2. **Planning**: Custom migration strategy with timeline\n3. **Parallel Setup**: iVault environment configured alongside existing system\n4. **Gradual Transfer**: Data migrated in phases during low-usage periods\n5. **Cutover**: Seamless switch with DNS updates\n\n**What's Included:**\n• Dedicated migration specialist\n• 24/7 support during migration\n• Rollback plan if needed\n• Performance optimization post-migration\n• Typical migration time: 2-7 days depending on data volume`,
      category: "Migration"
    },
    {
      question: "What kind of support do you provide for enterprise customers?",
      answer: `Enterprise customers receive comprehensive support:\n\n**Enterprise Support Includes:**\n• Dedicated account manager\n• 24/7 priority support with <1 hour response\n• Direct phone and email access\n• Quarterly business reviews\n• Custom integration assistance\n• On-site training available\n\n**Enterprise Plus Support:**\n• White-glove onboarding\n• Dedicated technical architect\n• Custom development support\n• 15-minute response time SLA\n• Direct access to engineering team\n\nAll enterprise customers get access to our customer portal with real-time system status, usage analytics, and support ticket tracking.`,
      category: "Support"
    }
  ];

  const categories = ["All", "Security", "Performance", "Compliance", "Pricing", "Migration", "Support"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs = activeCategory === "All" 
    ? faqs 
    : faqs?.filter(faq => faq?.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
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
            Frequently Asked Questions
            <span className="block text-accent">Get the Answers You Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Common questions from CTOs and IT decision makers about iVault's security, 
            performance, and enterprise features.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {filteredFAQs?.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-accent font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq?.question}</h3>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    {faq?.category}
                  </span>
                  <Icon
                    name="ChevronDown"
                    size={20}
                    className={`text-muted-foreground transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? 'auto' : 0,
                  opacity: openFAQ === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <div className="pl-12">
                    <div className="prose prose-invert max-w-none">
                      {faq?.answer?.split('\n')?.map((paragraph, pIndex) => {
                        if (paragraph?.startsWith('•')) {
                          return (
                            <div key={pIndex} className="flex items-start mb-2">
                              <Icon name="CheckCircle" size={16} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{paragraph?.substring(2)}</span>
                            </div>
                          );
                        } else if (paragraph?.includes('**') && paragraph?.includes(':**')) {
                          const [title, ...content] = paragraph?.split(':**');
                          return (
                            <div key={pIndex} className="mb-3">
                              <h4 className="text-foreground font-semibold mb-1">
                                {title?.replace(/\*\*/g, '')}:
                              </h4>
                              {content?.length > 0 && (
                                <p className="text-muted-foreground">{content?.join(':**')}</p>
                              )}
                            </div>
                          );
                        } else if (paragraph?.includes('**')) {
                          return (
                            <p key={pIndex} className="text-muted-foreground mb-3">
                              {paragraph?.split('**')?.map((part, partIndex) => 
                                partIndex % 2 === 1 ? (
                                  <strong key={partIndex} className="text-foreground">{part}</strong>
                                ) : (
                                  part
                                )
                              )}
                            </p>
                          );
                        } else if (paragraph?.trim()) {
                          return (
                            <p key={pIndex} className="text-muted-foreground mb-3">
                              {paragraph}
                            </p>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our enterprise team is ready to answer your specific questions about security, 
              compliance, migration, and custom requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Clock" size={16} className="text-accent mr-2" />
                <span>24/7 Enterprise Support</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Phone" size={16} className="text-success mr-2" />
                <span>Direct CTO Hotline</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Mail" size={16} className="text-warning mr-2" />
                <span>Priority Email Response</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;