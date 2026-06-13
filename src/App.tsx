/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MindLock from './pages/MindLock';
import AssignMate from './pages/AssignMate';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Shipping from './pages/Shipping';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mindlock" element={<MindLock />} />
          <Route path="assignmate" element={<AssignMate />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund" element={<Refund />} />
          <Route path="shipping-and-delivery" element={<Shipping />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
