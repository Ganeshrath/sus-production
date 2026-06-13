import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Do What Matters.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-muted sm:text-xl"
          >
            Sayam provides simple, focused productivity tools with fair, transparent, pay-as-you-go pricing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              to="/mindlock"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore MindLock
            </Link>
            <Link
              to="/assignmate"
              className="text-sm font-semibold leading-6 text-foreground transition-colors hover:text-primary"
            >
              Learn about AssignMate <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-surface px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Products</h2>
            <p className="mt-4 text-lg text-muted">Tools designed to keep you focused and efficient.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* MindLock Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative flex flex-col rounded-[--radius-custom] border border-border bg-background p-8 shadow-sm transition-all hover:border-primary/50"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">MindLock</h3>
              <p className="mt-4 flex-1 text-muted">
                Android focus app that blocks short-form feeds and enforces scheduled focus blocks using Accessibility permissions.
              </p>
              <div className="mt-8 flex items-center gap-2">
                <Link
                  to="/mindlock"
                  className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* AssignMate Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative flex flex-col rounded-[--radius-custom] border border-border bg-background p-8 shadow-sm transition-all hover:border-primary/50"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">AssignMate</h3>
              <p className="mt-4 flex-1 text-muted">
                A customizable document builder. Pick a template, customize, preview with a watermark, and pay per document to download clean files.
              </p>
              <div className="mt-8 flex items-center gap-2">
                <Link
                  to="/assignmate"
                  className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Sayam Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Sayam?</h2>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'No Bloat', desc: 'Simple, focused tools without unnecessary features.' },
              { title: 'Fair Pricing', desc: 'Transparent pay-as-you-go or affordable subscriptions.' },
              { title: 'Privacy First', desc: 'Minimal data collection, clear consent before any tracking.' },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-white">{feature.title}</h4>
                  <p className="mt-2 text-sm text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
