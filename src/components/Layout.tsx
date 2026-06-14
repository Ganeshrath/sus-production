import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'MindLock', path: '/mindlock' },
    { name: 'AssignMate', path: '/assignmate' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="text-xl font-bold tracking-tight text-white">Sayam</span>
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-surface px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border md:hidden"
            >
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-xl font-bold tracking-tight text-white">Sayam</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={cn(
                          "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-border/50",
                          location.pathname === link.path ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-background py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <span className="text-lg font-bold tracking-tight text-white">Sayam</span>
              <p className="mt-4 text-sm text-muted">
                Sayam.<br />
                Do What Matters.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Products</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/mindlock" className="text-sm text-muted transition-colors hover:text-primary">MindLock</Link>
                </li>
                <li>
                  <Link to="/assignmate" className="text-sm text-muted transition-colors hover:text-primary">AssignMate</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="/privacy-policy" className="text-sm text-muted transition-colors hover:text-primary">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="text-sm text-muted transition-colors hover:text-primary">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/refund-policy" className="text-sm text-muted transition-colors hover:text-primary">Refund & Cancellation</a>
                </li>
                <li>
                  <a href="/shipping-and-delivery" className="text-sm text-muted transition-colors hover:text-primary">Shipping & Delivery</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="/contact" className="text-sm text-muted transition-colors hover:text-primary">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center md:flex md:items-center md:justify-between md:text-left">
            <p className="text-sm text-muted">
              &copy; 2026 Ganesh Rathor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
