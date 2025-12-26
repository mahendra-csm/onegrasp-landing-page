import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  items: string[];
  className?: string;
  columns?: 1 | 2;
};

const Column: React.FC<{ items: string[]; className?: string }> = ({ items, className }) => {
  const accentColors = ['#0ea5a4', '#0ea5a4', '#7c3aed', '#f97316', '#ec4899', '#06b6d4'];

  return (
    <div className={`grid gap-5 ${className || ''}`}>
      {items.map((item, idx) => (
        <motion.div
          key={`${item}-${idx}`}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          className="group flex items-center gap-4 rounded-2xl p-5 shadow-xl bg-background/60 border border-border transition-transform hover:-translate-y-1 hover:shadow-2xl"
        >
          <span
            className="w-1.5 h-10 rounded"
            style={{ background: accentColors[idx % accentColors.length] }}
            aria-hidden
          />
          <div className="flex-1">
            <div className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-all duration-220">
              {item}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const VerticalTimeline: React.FC<Props> = ({ items, className, columns = 1 }) => {
  if (columns === 2) {
    const half = Math.ceil(items.length / 2);
    const left = items.slice(0, half);
    const right = items.slice(half);

    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${className || ''}`}>
        <div className="min-h-[220px] flex flex-col justify-between">
          <Column items={left} />
        </div>
        <div className="min-h-[220px] flex flex-col justify-between">
          <Column items={right} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Column items={items} className={className} />
    </div>
  );
};

export default VerticalTimeline;
