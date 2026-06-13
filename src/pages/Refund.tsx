import { motion } from 'motion/react';

export default function Refund() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-blue max-w-none"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Refund & Cancellation Policy</h1>
        
        <div className="text-muted text-sm mb-8 space-y-4">
          <p>Last updated: June 2026</p>
          <p>At Sayam, we want you to be completely satisfied with our focus and productivity tools. We offer a transparent window for refund requests.</p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">1. 3-Day Money-Back Guarantee</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>We provide a strict <strong className="text-white">3-day refund policy</strong> from the date of your initial transaction or subscription purchase. If you find that our Pro features do not meet your expectations, you are entitled to request a full refund within this 72-hour window.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. How to Request a Refund</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>To initiate a refund request, you must reach out directly via email.</p>
             <ul className="list-disc pl-5 space-y-2">
               <li>There are no automated refund or cancellation buttons built directly inside the mobile application interface.</li>
               <li>Send an explicit refund request email to our official support address: <strong className="text-white">rathorganesh35@gmail.com</strong>.</li>
               <li>Please include your account login email and the Razorpay transaction payment reference ID to expedite processing.</li>
             </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">3. Processing and Timelines</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>Once your email request is received and verified to be within the 3-day eligible window:</p>
             <ul className="list-disc pl-5 space-y-2">
               <li>Your access to the Pro features will be deactivated.</li>
               <li>The refund will be initiated immediately on our dashboard.</li>
               <li>Per standard banking and payment aggregator timelines, the refunded amount will reflect back in your original payment source (Bank Account, UPI, or Card) within <strong className="text-white">5 to 7 working days</strong>.</li>
             </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
