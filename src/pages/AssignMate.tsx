import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layers, Edit3, Eye, Download } from 'lucide-react';

export default function AssignMate() {
  const steps = [
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: '1. Pick a Template',
      description: 'Choose from a variety of professionally designed assignment and document templates.'
    },
    {
      icon: <Edit3 className="h-6 w-6 text-primary" />,
      title: '2. Customize',
      description: 'Fill in your details, tweak the content, and format the structure directly in your browser.'
    },
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: '3. Free Preview',
      description: 'Generate a watermarked preview for free. Check your work before committing to anything.'
    },
    {
      icon: <Download className="h-6 w-6 text-primary" />,
      title: '4. Pay to Download',
      description: 'Pay a small, transparent per-document fee to instantly download the clean, watermark-free PDF/PPT.'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AssignMate</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            The customizable document builder. Stop wrestling with formatting—just pick, write, and download.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">How It Works</h2>
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex gap-4">
                  {idx !== steps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-[-16px] w-[2px] bg-border" />
                  )}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface border border-border shadow-sm">
                    {step.icon}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-[--radius-custom] border border-border bg-surface p-8 shadow-sm">
              <h3 className="text-xl font-bold text-white">Starting At</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">₹29</span>
                <span className="text-sm font-medium text-muted">/ document</span>
              </div>
              <p className="mt-4 text-sm text-muted">
                Our base pricing strictly scales via size. For documents 20 pages or less, the fixed cost is ₹29. 
              </p>
              
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex justify-between">
                  <span>Up to 20 pages</span>
                  <b>₹29</b>
                </li>
                <li className="flex justify-between">
                  <span>21 - 30 pages</span>
                  <b>₹39</b>
                </li>
                <li className="flex justify-between">
                  <span>31 - 40 pages</span>
                  <b>₹49</b>
                </li>
                <li className="flex justify-between text-muted mt-2 border-t border-border pt-2">
                  <span>Additional 10 pages</span>
                  <b>+ ₹10</b>
                </li>
              </ul>

              <Link
                to="/pricing"
                className="mt-8 block w-full rounded-md bg-white/10 px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Compare Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
