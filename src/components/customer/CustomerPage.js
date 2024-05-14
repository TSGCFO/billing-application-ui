import React, { useState } from 'react';
import CustomerModal from './CustomerModal';

function CustomerPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <h2>Customer Management</h2>
      <button onClick={handleOpen}>Create Customer</button>
      <CustomerModal open={isModalOpen} handleClose={handleClose} />
    </div>
  );
}

export default CustomerPage;
