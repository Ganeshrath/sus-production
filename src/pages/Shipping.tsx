import { motion } from 'motion/react';

export default function Shipping() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-blue max-w-none"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Shipping & Delivery Policy</h1>
        
        <div className="text-muted text-sm mb-8 space-y-4">
          <p>Last updated: June 2026</p>
          <p>Sayam provides digital tools, mobile applications, and software-as-a-service (SaaS) products (including MindLock and AssignMate).</p>
        </div>

        <section className="mb-8">
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>
               <strong className="text-white">Delivery Timeline:</strong> Because our products are entirely digital, no physical shipping or logistics are involved. Upon a successful payment transaction via our payment gateway partner, your premium features or subscription tiers are provisioned and unlocked instantly.
             </p>
             <p>
               <strong className="text-white">Access Method:</strong> To unlock your Pro features, simply log into the Sayam mobile application using the same account credential utilized during your purchase.
             </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>
               If you experience any technical delays or synchronization issues after payment execution, please contact us immediately at <strong>rathorganesh35@gmail.com</strong> with your transaction reference ID.
             </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
