import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [currentBreach, setCurrentBreach] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const dataBreaches = [
    {
      company: "Equifax",
      year: "2017",
      affected: "147M",
      cost: "$4B",
      description: "Personal data of 147 million consumers compromised"
    },
    {
      company: "Yahoo",
      year: "2013-2014",
      affected: "3B",
      cost: "$350M",
      description: "All 3 billion user accounts compromised"
    },
    {
      company: "Capital One",
      year: "2019",
      affected: "100M",
      cost: "$270M",
      description: "Credit card applications and accounts breached"
    },
    {
      company: "Marriott",
      year: "2018",
      affected: "500M",
      cost: "$200M",
      description: "Guest reservation database compromised"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBreach((prev) => (prev + 1) % dataBreaches?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const simulateSlowLoading = () => {
    setIsSimulating(true);
    setLoadingProgress(0);
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSimulating(false);
            setLoadingProgress(0);
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 200);
  };

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Your Data is at Risk
            <span className="block text-destructive">Every Single Day</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional cloud storage leaves your enterprise vulnerable to breaches and frustrated with slow performance. 
            The cost of inaction is measured in millions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Data Breach Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card border border-destructive/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mr-4">
                  <Icon name="AlertTriangle" size={24} className="text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Major Data Breaches</h3>
                  <p className="text-muted-foreground">Fortune 500 companies affected</p>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  key={currentBreach}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-destructive/10 border border-destructive/30 rounded-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{dataBreaches?.[currentBreach]?.company}</h4>
                      <p className="text-destructive font-semibold">{dataBreaches?.[currentBreach]?.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-destructive">{dataBreaches?.[currentBreach]?.affected}</div>
                      <div className="text-sm text-muted-foreground">Users Affected</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{dataBreaches?.[currentBreach]?.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Cost:</span>
                    <span className="text-xl font-bold text-destructive">{dataBreaches?.[currentBreach]?.cost}</span>
                  </div>
                </motion.div>

                {/* Timeline Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {dataBreaches?.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentBreach ? 'bg-destructive' : 'bg-destructive/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card border border-warning/20 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="text-warning mr-2" />
                  <span className="text-foreground font-semibold">Breach Frequency</span>
                </div>
                <span className="text-warning font-bold">+67% in 2024</span>
              </div>
            </div>
          </motion.div>

          {/* Slow Loading Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card border border-warning/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mr-4">
                  <Icon name="Clock" size={24} className="text-warning" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Slow Cloud Storage</h3>
                  <p className="text-muted-foreground">Experience the frustration</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-foreground">Loading enterprise files...</span>
                    <span className="text-warning">{Math.round(loadingProgress)}%</span>
                  </div>
                  
                  <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
                    <motion.div
                      className="bg-warning h-3 rounded-full"
                      style={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {isSimulating && loadingProgress < 100 && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Loader2" size={16} className="animate-spin mr-2" />
                      <span>Still loading... This is taking forever!</span>
                    </div>
                  )}

                  {loadingProgress === 100 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center text-sm text-success"
                    >
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      <span>Finally loaded after {Math.round(loadingProgress/10)} seconds</span>
                    </motion.div>
                  )}
                </div>

                <button
                  onClick={simulateSlowLoading}
                  disabled={isSimulating}
                  className="w-full bg-warning/20 hover:bg-warning/30 border border-warning/50 text-warning font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
                >
                  {isSimulating ? 'Simulating Slow Loading...' : 'Experience Slow Cloud Storage'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-destructive mb-1">47%</div>
                <div className="text-sm text-muted-foreground">Productivity Lost</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-warning mb-1">$2.4M</div>
                <div className="text-sm text-muted-foreground">Avg Breach Cost</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-destructive/10 to-warning/10 border border-destructive/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Don't Let Your Enterprise Become the Next Statistic
            </h3>
            <p className="text-muted-foreground mb-6">
              Every day you delay upgrading your storage infrastructure is another day your data remains vulnerable 
              and your team remains frustrated with slow performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-success mr-2" />
                <span>Military-grade encryption</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Zap" size={16} className="text-accent mr-2" />
                <span>10x faster than traditional cloud</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                <span>Zero data loss guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;