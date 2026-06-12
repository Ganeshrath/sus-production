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
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <p>We believe in transparent billing. Please read our refund and cancellation rules carefully before making a purchase.</p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">1. MindLock Subscription Cancellations</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>You can cancel your MindLock Pro subscription at any time. When you cancel voluntarily, you will continue to have access to the Pro features until the end of your current paid billing period.</p>
             <p>We do not routinely offer prorated refunds for mid-cycle cancellations of active subscriptions.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. AssignMate Per-Document Purchases</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>Because AssignMate provides a fully featured, watermarked preview before you pay, <strong>all AssignMate document purchases are generally final and non-refundable</strong> once the clean file is successfully delivered or generated.</p>
             <p>Please review your watermarked preview carefully to ensure formatting and contents are correct before checking out via Razorpay.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">3. Exceptional Circumstances</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>In the event of a technical failure on our end (e.g., your payment succeeds but the document fails to generate or deliver entirely, or the app crashes preventing access), please contact support within 7 days.</p>
             <p>We will review logs and, if a failure is verified, issue a full refund to your original payment method via Razorpay within 5-7 business days.</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">4. Contacting Support</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>To request a refund under technical failure, please email: <strong>rathorganesh35@gmail.com</strong> providing your Razorpay payment ID and a description of the issue.</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
