import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-muted">
            Have questions about MindLock, AssignMate, or our pricing? Get in touch using the details below. We typically respond within 24 hours.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex gap-x-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface border border-border">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Email Address</h3>
                <p className="mt-2 text-sm text-muted">
                  The quickest way to reach me for support and inquiries.
                </p>
                <p className="mt-4">
                  <a href="mailto:rathorganesh35@gmail.com" className="text-primary hover:text-primary-hover font-medium">
                    rathorganesh35@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface border border-border">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Phone Support</h3>
                <p className="mt-2 text-sm text-muted">
                  Available Mon-Fri, 10am to 6pm IST.
                </p>
                <p className="mt-4">
                  <a href="tel:+91XXXXXXXXXX" className="text-primary hover:text-primary-hover font-medium">
                    +91 XX XXXX XXXX
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface border border-border">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Operator Address</h3>
                <p className="mt-2 text-sm text-muted line-clamp-3">
                  Ganesh Rathore<br />
                  Jhansi, Uttar Pradesh<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="flex flex-col justify-center"
        >
          <div className="rounded-[--radius-custom] border border-border bg-surface p-8 shadow-sm">
             <h2 className="text-xl font-bold text-white mb-6">About the Operator</h2>
             <p className="text-sm text-muted mb-4 leading-relaxed">
               Sayam is operated independently by Ganesh Rathore. 
               The goal is to provide reliable, distraction-free productivity tools that respect user time and privacy.
             </p>
             <p className="text-sm text-muted leading-relaxed">
               All products are built with the intention of fair pricing—you either pay a modest transparent subscription for ongoing utilities, or a strictly per-use fee for generated assets. 
               No hidden costs.
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
