import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SpeedBenchmarkSection = () => {
  const [selectedProvider, setSelectedProvider] = useState('aws');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState({ traditional: 0, ivault: 0 });
  const [completed, setCompleted] = useState(false);

  const providers = {
    aws: {
      name: "Amazon S3",
      logo: "Cloud",
      speed: 280,
      color: "text-orange-400"
    },
    google: {
      name: "Google Cloud",
      logo: "Globe",
      speed: 320,
      color: "text-blue-400"
    },
    azure: {
      name: "Microsoft Azure",
      logo: "Server",
      speed: 250,
      color: "text-blue-500"
    }
  };

  const runBenchmark = () => {
    setIsRunning(true);
    setCompleted(false);
    setProgress({ traditional: 0, ivault: 0 });

    // Simulate traditional cloud loading (slow)
    const traditionalInterval = setInterval(() => {
      setProgress(prev => {
        const newTraditional = prev?.traditional + Math.random() * 2;
        if (newTraditional >= 100) {
          clearInterval(traditionalInterval);
          return { ...prev, traditional: 100 };
        }
        return { ...prev, traditional: newTraditional };
      });
    }, 100);

    // Simulate iVault loading (fast)
    setTimeout(() => {
      const ivaultInterval = setInterval(() => {
        setProgress(prev => {
          const newIvault = prev?.ivault + Math.random() * 15;
          if (newIvault >= 100) {
            clearInterval(ivaultInterval);
            setCompleted(true);
            setIsRunning(false);
            return { ...prev, ivault: 100 };
          }
          return { ...prev, ivault: newIvault };
        });
      }, 50);
    }, 2000);
  };

  const resetBenchmark = () => {
    setProgress({ traditional: 0, ivault: 0 });
    setCompleted(false);
    setIsRunning(false);
  };

  return (
    <section id="speed-benchmark" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            See the Speed Difference
            <span className="block text-accent">Interactive Benchmark</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare iVault's performance against leading cloud providers. 
            Experience the 10x speed improvement that transforms enterprise productivity.
          </p>
        </motion.div>

        {/* Provider Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-heading font-bold text-center text-foreground mb-8">
            Choose Your Current Provider
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(providers)?.map(([key, provider]) => (
              <button
                key={key}
                onClick={() => setSelectedProvider(key)}
                className={`flex items-center px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedProvider === key
                    ? 'border-accent bg-accent/10 text-accent' :'border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground'
                }`}
              >
                <Icon name={provider?.logo} size={24} className="mr-3" />
                <span className="font-semibold">{provider?.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Benchmark Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Cloud */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon name={providers?.[selectedProvider]?.logo} size={24} className={`${providers?.[selectedProvider]?.color} mr-3`} />
                    <h4 className="text-xl font-bold text-foreground">{providers?.[selectedProvider]?.name}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Avg Speed</div>
                    <div className="text-lg font-bold text-warning">{providers?.[selectedProvider]?.speed}ms</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Loading Progress</span>
                    <span className="text-foreground">{Math.round(progress?.traditional)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-4">
                    <motion.div
                      className="bg-warning h-4 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${progress?.traditional}%` }}
                      transition={{ duration: 0.2 }}
                    >
                      {progress?.traditional > 10 && (
                        <Icon name="Loader2" size={12} className="animate-spin text-warning-foreground" />
                      )}
                    </motion.div>
                  </div>
                </div>

                {progress?.traditional === 100 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-warning/10 border border-warning/30 rounded-lg p-4"
                  >
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={20} className="text-warning mr-2" />
                      <span className="text-warning font-semibold">Completed in {(providers?.[selectedProvider]?.speed / 100)?.toFixed(1)}s</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* iVault */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon name="Zap" size={24} className="text-accent mr-3" />
                    <h4 className="text-xl font-bold text-foreground">iVault SSD-ARM</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Avg Speed</div>
                    <div className="text-lg font-bold text-success">25ms</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Loading Progress</span>
                    <span className="text-foreground">{Math.round(progress?.ivault)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-4">
                    <motion.div
                      className="bg-gradient-to-r from-accent to-success h-4 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${progress?.ivault}%` }}
                      transition={{ duration: 0.2 }}
                    >
                      {progress?.ivault > 10 && progress?.ivault < 100 && (
                        <Icon name="Zap" size={12} className="text-accent-foreground" />
                      )}
                    </motion.div>
                  </div>
                </div>

                {progress?.ivault === 100 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-success/10 border border-success/30 rounded-lg p-4"
                  >
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={20} className="text-success mr-2" />
                      <span className="text-success font-semibold">Completed in 0.25s</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="default"
                size="lg"
                onClick={runBenchmark}
                disabled={isRunning}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                iconName={isRunning ? "Loader2" : "Play"}
                iconPosition="left"
              >
                {isRunning ? 'Running Benchmark...' : 'Start Benchmark'}
              </Button>
              
              {(completed || progress?.traditional > 0) && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={resetBenchmark}
                  className="border-accent/50 text-accent hover:bg-accent/10 px-8"
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Reset
                </Button>
              )}
            </div>

            {/* Results Summary */}
            {completed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 bg-gradient-to-r from-success/10 to-accent/10 border border-success/30 rounded-xl p-6"
              >
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-foreground mb-4">Benchmark Results</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-success mb-1">
                        {Math.round((providers?.[selectedProvider]?.speed / 25) * 10) / 10}x
                      </div>
                      <div className="text-sm text-muted-foreground">Faster Performance</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-1">
                        {((providers?.[selectedProvider]?.speed - 25) / 1000)?.toFixed(1)}s
                      </div>
                      <div className="text-sm text-muted-foreground">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-warning mb-1">
                        {Math.round(((providers?.[selectedProvider]?.speed - 25) / providers?.[selectedProvider]?.speed) * 100)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Productivity Gain</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Cpu" size={32} className="text-accent" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">ARM Cortex-A76</h4>
            <p className="text-muted-foreground">64-bit architecture with advanced power efficiency and performance optimization</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="HardDrive" size={32} className="text-success" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Enterprise SSD</h4>
            <p className="text-muted-foreground">NVMe SSD storage with 3D NAND technology for maximum throughput and reliability</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Network" size={32} className="text-warning" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Distributed Network</h4>
            <p className="text-muted-foreground">Global edge nodes with intelligent routing for optimal performance worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedBenchmarkSection;