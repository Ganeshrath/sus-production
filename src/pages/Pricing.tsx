import { Check, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "",
      subprice: "Always free",
      badge: null,
      features: [
        "Block up to 5 apps",
        "1 scheduled block",
        "Focus sessions up to 1 hour",
        "Today's brain stats only",
        "Basic doom scroll awareness"
      ],
      delay: 0
    },
    {
      name: "Pro",
      price: "₹39",
      period: "/ month",
      subprice: "or ₹349 / year",
      saveText: " (save 25%)",
      badge: "Most Popular",
      badgeClass: "bg-primary/10 text-primary",
      features: [
        "Unlimited app blocking",
        "All focus challenges + XP system",
        "Doom Scroll Guard with custom threshold",
        "Scheduled blocking (unlimited)",
        "30-day brain health history",
        "Strict Lock Mode",
        "Content Filter + adult domain blocking",
        "Cancel anytime"
      ],
      delay: 0.1,
      popular: true
    },
    {
      name: "Premium",
      price: "₹99",
      period: "/ month",
      subprice: "or ₹899 / year",
      saveText: " (save 25%)",
      badge: "Power Users",
      badgeClass: "bg-white/10 text-white",
      features: [
        "Everything in Pro",
        "365-day brain health history",
        "CSV export of all stats",
        "Unlimited custom categories",
        "Priority support",
        "Cancel anytime"
      ],
      delay: 0.2
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Fair, transparent pricing</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Whether you need daily focus tools or a one-time assignment builder, we have a plan that fits.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: plan.delay }}
            className={`flex flex-col rounded-[--radius-custom] border bg-surface p-8 shadow-sm relative ${
              plan.popular ? 'border-primary' : 'border-border'
            }`}
          >
            {plan.badge ? (
              <div className={`mb-4 inline-flex self-start rounded-full px-3 py-1 text-sm font-semibold ${plan.badgeClass}`}>
                {plan.badge}
              </div>
            ) : (
              <div className="h-[28px] mb-4" />
            )}
            
            <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
            
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-muted">{plan.period}</span>}
              </div>
              <div className="text-sm text-muted">
                {plan.subprice}
                {plan.saveText && <span className="font-semibold text-foreground">{plan.saveText}</span>}
              </div>
            </div>

            <ul className="mt-8 flex-1 space-y-4">
              {plan.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex gap-3 text-sm text-foreground">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Accessibility Disclosure Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 mx-auto max-w-3xl rounded-[--radius-custom] border border-primary/20 bg-primary/5 p-6"
      >
        <h3 className="flex items-center gap-2 font-semibold text-primary">
          <Shield className="h-5 w-5" /> Accessibility Disclosure
        </h3>
        <p className="mt-2 text-sm text-muted">
          MindLock uses Android Accessibility Service to detect when distracting apps are launched and display a blocking overlay. It does NOT read, store, or transmit your screen content. VPN is used locally for DNS filtering only — no traffic is routed through external servers.
        </p>
      </motion.div>
    </div>
  );
}
