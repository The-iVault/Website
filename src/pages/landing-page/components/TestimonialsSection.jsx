import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "CTO",
      company: "TechFlow Industries",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `iVault transformed our data infrastructure completely. We went from 5-minute file access times to under 30 seconds. The ROI was immediate - our development team's productivity increased by 340% in the first quarter alone.`,
      metrics: {
        improvement: "340%",
        timeSaved: "4.5min",
        roi: "280%"
      },
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "IT Director",
      company: "Global Finance Corp",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `Security was our biggest concern with cloud storage. iVault's military-grade encryption and zero-breach track record gave us the confidence to migrate our most sensitive financial data. The speed improvement was an unexpected bonus.`,
      metrics: {
        improvement: "450%",
        timeSaved: "6.2min",
        roi: "320%"
      },
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Chief Data Officer",
      company: "MedTech Solutions",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop&crop=center",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      content: `Handling patient data requires the highest security standards. iVault's HIPAA compliance and ARM architecture gave us 10x faster access to critical patient files while maintaining absolute security. It's revolutionized our emergency response times.`,
      metrics: {
        improvement: "520%",
        timeSaved: "8.1min",
        roi: "410%"
      },
      rating: 5
    }
  ];

  const companyLogos = [
    { name: "TechFlow", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "GlobalFinance", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop" },
    { name: "MedTech", logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=120&h=60&fit=crop" },
    { name: "DataCorp", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=60&fit=crop" },
    { name: "CloudTech", logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=120&h=60&fit=crop" },
    { name: "SecureNet", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

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
            Trusted by Enterprise Leaders
            <span className="block text-success">Proven Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fortune 500 CTOs and IT directors share how iVault transformed their data infrastructure 
            and delivered measurable ROI improvements.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-success/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                {/* Quote */}
                <div className="mb-8">
                  <Icon name="Quote" size={48} className="text-accent/30 mx-auto mb-6" />
                  <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
                    {testimonials?.[currentTestimonial]?.content}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-success/10 border border-success/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-success mb-1">
                      {testimonials?.[currentTestimonial]?.metrics?.improvement}
                    </div>
                    <div className="text-sm text-muted-foreground">Productivity Increase</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {testimonials?.[currentTestimonial]?.metrics?.timeSaved}
                    </div>
                    <div className="text-sm text-muted-foreground">Time Saved Per Access</div>
                  </div>
                  <div className="bg-warning/10 border border-warning/20 rounded-xl p-4">
                    <div className="text-2xl font-bold text-warning mb-1">
                      {testimonials?.[currentTestimonial]?.metrics?.roi}
                    </div>
                    <div className="text-sm text-muted-foreground">ROI in Q1</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative">
                    <Image
                      src={testimonials?.[currentTestimonial]?.avatar}
                      alt={testimonials?.[currentTestimonial]?.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center">
                      <Icon name="CheckCircle" size={12} className="text-background" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-foreground text-lg">
                      {testimonials?.[currentTestimonial]?.name}
                    </div>
                    <div className="text-accent font-semibold">
                      {testimonials?.[currentTestimonial]?.title}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials?.[currentTestimonial]?.company}
                    </div>
                  </div>
                  <div className="ml-4">
                    <Image
                      src={testimonials?.[currentTestimonial]?.logo}
                      alt={testimonials?.[currentTestimonial]?.company}
                      className="w-12 h-12 rounded-lg object-cover opacity-60"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-warning fill-current"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-16">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-200"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-16">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-200"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-accent' : 'bg-accent/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
            Trusted by 10,000+ Enterprise Customers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companyLogos?.map((company, index) => (
              <motion.div
                key={company?.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-colors duration-300 group-hover:scale-105 transform transition-transform">
                  <Image
                    src={company?.logo}
                    alt={company?.name}
                    className="w-full h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20 rounded-xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-success mb-2">99.99%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10,247+</div>
              <div className="text-muted-foreground">Enterprise Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">847TB</div>
              <div className="text-muted-foreground">Data Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">0</div>
              <div className="text-muted-foreground">Security Breaches</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;