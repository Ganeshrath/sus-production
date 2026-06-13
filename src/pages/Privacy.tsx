import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert prose-blue max-w-none"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="text-muted text-sm mb-8 space-y-4">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <p>Ganesh Rathore ("we", "our", or "us") operates the Sayam applications, including MindLock and AssignMate.</p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p><strong>Account Information:</strong> If you create an account, we may collect your email address and an encrypted password hash.</p>
             <p><strong>Payment Information:</strong> Our payments are processed securely via Razorpay. We do not store your credit card or full payment credentials on our servers.</p>
             <p><strong>Usage Data:</strong> We may collect generic diagnostics and usage metadata to improve the apps.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">2. MindLock Accessibility Disclosure</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>MindLock utilizes the Android Accessibility Service permission in order to detect when distracting, short-form feed applications are launched, and overlay a blocking screen when a focus session is active.</p>
             <p><strong>We do NOT collect, transmit, or store:</strong> the content of your screen, your inputs, or your personal messages. The permission is strictly used locally on your device to identify the package name of the active foreground app and enforce blocking rules.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">3. AssignMate Data Handling</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>Documents generated via AssignMate are tied to your session or account. We may briefly store intermediate data to render the PDF/PPTX formats. We do not use your generated document contents for training or marketing purposes.</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">4. Contact Us</h2>
          <div className="text-muted space-y-4 text-sm leading-relaxed">
             <p>If you have any questions about this Privacy Policy, please contact us at rathorganesh35@gmail.com.</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
