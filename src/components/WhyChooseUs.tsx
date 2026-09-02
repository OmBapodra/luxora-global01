import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Package, MessageSquare, Grid } from 'lucide-react';
import { BackgroundIcons, whyChooseIcons } from './BackgroundIcons';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 mb-4 opacity-80" />,
    title: "Reliable Sourcing",
    description: "We focus on practical products suitable for wholesale retail requirements."
  },
  {
    icon: <Package className="w-6 h-6 mb-4 opacity-80" />,
    title: "Wholesale Focus",
    description: "Our process is designed around the needs of retailers and bulk buyers."
  },
  {
    icon: <MessageSquare className="w-6 h-6 mb-4 opacity-80" />,
    title: "Simple Communication",
    description: "A straightforward inquiry process keeps wholesale discussions clear and efficient."
  },
  {
    icon: <Grid className="w-6 h-6 mb-4 opacity-80" />,
    title: "Multiple Categories",
    description: "Source products across biodegradable goods, kitchenware, and automotive categories."
  }
];

export const WhyChooseUs: React.FC<{ className?: string }> = React.memo(({ className }) => {
  return (
    <section className={`relative py-24 px-6 md:px-12 ${className || ''}`}>
      <BackgroundIcons icons={whyChooseIcons} />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Retailers Choose Luxora Global
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              {feature.icon}
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
