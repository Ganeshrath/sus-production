import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Clock, Smartphone, AlertTriangle } from 'lucide-react';

export default function MindLock() {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: 'Feed Blocker',
      description: 'Automatically detects and blocks endless scrolling feeds on popular social media apps.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Scheduled Focus Blocks',
      description: 'Set strict focus times where distracting apps cannot be opened.'
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: 'Built to be Strict',
      description: 'Utilizes Android Accessibility permissions for robust enforcement that is difficult to bypass.'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              Android App
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              MindLock
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Reclaim your attention. MindLock is an uncompromising Android focus app that blocks short-form feeds and enforces scheduled focus blocks so you can get deep work done.
            </p>
            <div className="mt-10">
              <div className="rounded-[--radius-custom] border border-border bg-surface p-6">
                <h3 className="font-semibold text-white">Simple Subscription Outline</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">₹39</span>
                  <span className="text-sm text-muted">/month</span>
                </div>
                <div className="mt-1 text-sm text-muted">or ₹349 /year</div>
                <Link
                  to="/pricing"
                  className="mt-6 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  View Full Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="flex flex-col justify-center gap-8"
        >
          <h2 className="text-2xl font-bold text-white">Core Features</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface border border-border">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 rounded-[--radius-custom] border border-primary/20 bg-primary/5 p-6">
            <h3 className="flex items-center gap-2 font-semibold text-primary">
              <Shield className="h-5 w-5" /> Accessibility Disclosure
            </h3>
            <p className="mt-2 text-sm text-muted">
              MindLock requires the Android Accessibility Service permission to detect when distracting apps are launched and overlay a blocking screen. We do not transmit or store your screen content.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
