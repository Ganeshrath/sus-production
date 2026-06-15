import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Scroll, Clock, Calendar, EyeOff, Lock } from 'lucide-react';

export default function MindLock() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Per-App Blocking',
      description: 'Select any app to block. A breathing pause and intent form appear before every session — so every open is intentional.'
    },
    {
      icon: <Scroll className="h-6 w-6 text-primary" />,
      title: 'Doom Scroll Guard',
      description: 'Detects Instagram Reels, YouTube Shorts and TikTok. Shows awareness banner and auto-blocks after your set threshold.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Focus Mode & Challenges',
      description: 'Timed focus sessions with hard blocks. Earn XP, build streaks, and level up from Distracted to Mindful Master.'
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: 'Scheduled Blocking',
      description: 'Set recurring block schedules by day and time. Social apps blocked automatically at night or during study hours.'
    },
    {
      icon: <EyeOff className="h-6 w-6 text-primary" />,
      title: 'Content Filter',
      description: 'Local VPN DNS blocks 500+ adult domains. Forces SafeSearch on Google, YouTube and Bing. No data leaves your device.'
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: 'Strict Lock Mode',
      description: 'Activate for 1–30 days. Prevents uninstall, disables settings access, requires PIN + time expiry to deactivate.'
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
              Reclaim your attention. MindLock is an uncompromising Android focus app that blocks distracting apps, guards against doom scrolling, and visualizes the real impact on your brain health.
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
              MindLock uses Android Accessibility Service to detect when distracting apps are launched and display a blocking overlay. It does NOT read, store, or transmit your screen content. VPN is used locally for DNS filtering only — no traffic is routed through external servers.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
