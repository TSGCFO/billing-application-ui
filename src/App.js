import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomerPage from './components/customer/CustomerPage';
import PricingPage from './components/pricing/PricingPage';
import InventoryPage from './components/inventory/InventoryPage';
import BillingPage from './components/billing/BillingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Our Billing Application</h1>
          <nav>
            <ul>
              <li><Link to="/customer">Customer</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/billing">Billing</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/billing" element={<BillingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
