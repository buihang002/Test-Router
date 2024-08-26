import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Inbox from './pages/Inbox/Inbox';
import Sent from './pages/Sent/Sent';
import Reminder from './pages/Reminder/Reminder';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Navbar />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/sent" element={<Sent/>} />

            <Route path="/reminder" element={<Reminder/>} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
