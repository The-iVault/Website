import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", href: "https://www.instagram.com/ivault_official/profilecard/?igsh=MXBieGd2ZDQzYnc0bA==" },
    { name: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/company/the-ivault/" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side: Logo, Info, Contact, Socials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/images/The_iVault_bg.png" 
                  alt="iVault Logo" 
                  className="w-25 h-20 object-contain"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                Network Integrated storage System with 10x faster performance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Mail" size={16} className="mr-3 text-accent" />
                  <span>enquiry.ivault@gmail.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Phone" size={16} className="mr-3 text-accent" />
                  <span>+91 7826936660</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mr-3 text-accent" />
                  <span>Thanjavur, Tamilnadu</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.href}
                    className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors duration-200"
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 lg:text-right"
            >
              <h3 className="text-lg font-heading font-bold text-foreground mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks?.company?.map((link) => (
                  <li key={link?.name}>
                    <a
                      href={link?.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground mb-3">
            © {currentYear} The iVault. All rights reserved.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            {footerLinks?.legal?.map((link) => (
              <a
                key={link?.name}
                href={link?.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {link?.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
