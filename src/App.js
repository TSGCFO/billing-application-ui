import React, { useState } from 'react';
import CustomerModal from './components/CustomerModal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false); // State to control the modal

  const handleOpen = () => setModalOpen(true); // Function to open the modal
  const handleClose = () => setModalOpen(false); // Function to close the modal

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Billing Application</h1>
        <button onClick={handleOpen}>Create Customer</button>  {/* Button to open the modal */}
        <CustomerModal open={isModalOpen} handleClose={handleClose} />
      </header>
    </div>
  );
}

export default App;
