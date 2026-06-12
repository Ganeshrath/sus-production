import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Pricing() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Fair, transparent pricing</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Whether you need daily focus tools or a one-time assignment builder, we have a plan that fits.
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        {/* MindLock Plan */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="flex flex-col rounded-[--radius-custom] border border-border bg-surface p-8 shadow-sm"
        >
          <div className="mb-4 inline-flex self-start rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            MindLock Pro
          </div>
          <h2 className="text-2xl font-bold text-white">Subscription</h2>
          <p className="mt-2 text-muted text-sm">Full access to strict app blocking and scheduled focus sessions.</p>
          
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">₹39</span>
              <span className="text-muted">/ month</span>
            </div>
            <div className="text-sm text-muted">or <span className="font-semibold text-foreground">₹349 / year</span> (save ~25%)</div>
          </div>

          <ul className="mt-8 flex-1 space-y-4">
            {['Block short-form video feeds', 'Scheduled focus blocks', 'Accessibility-enforced strict mode', 'Cancel anytime'].map((feature, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AssignMate Plan */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="flex flex-col rounded-[--radius-custom] border border-border bg-surface p-8 shadow-sm"
        >
          <div className="mb-4 inline-flex self-start rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
            AssignMate
          </div>
          <h2 className="text-2xl font-bold text-white">Pay-as-you-go</h2>
          <p className="mt-2 text-muted text-sm">Design and preview for free. Pay only when you download a clean file.</p>
          
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">₹29</span>
              <span className="text-muted">starting price</span>
            </div>
            <div className="text-sm text-muted">per document</div>
          </div>

          <div className="mt-8 flex-1 border border-border rounded-lg overflow-hidden text-sm">
            <div className="bg-background px-4 py-3 border-b border-border font-semibold flex justify-between">
              <span>Document Size</span>
              <span>Price</span>
            </div>
            <div className="px-4 py-3 border-b border-border flex justify-between">
              <span>Up to 20 pages</span>
              <span className="font-medium text-white">₹29</span>
            </div>
            <div className="px-4 py-3 border-b border-border flex justify-between">
              <span>21 - 30 pages</span>
              <span className="font-medium text-white">₹39</span>
            </div>
            <div className="px-4 py-3 border-b border-border flex justify-between">
              <span>31 - 40 pages</span>
              <span className="font-medium text-white">₹49</span>
            </div>
            <div className="px-4 py-3 bg-background flex justify-between text-muted">
              <span>Additional 10 pages</span>
              <span>+ ₹10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
