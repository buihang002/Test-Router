import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
// import Inbox from '../pages/Inbox/Inbox';
import Inbox from '../pages/Inbox/Inbox'
import Sent from '../pages/Sent/Sent';
import Reminder from '../pages/Reminder/Reminder';
import Spam from '../pages/Spam/Spam';
import Junks from '../pages/Junks/Junks'
import Drafts from '../pages/Drafts/Drafts';
import MessageDetail from '../components/MessageDetail/MessageDetail';
import MessageDetailPage from '../components/MessageDetailPage/MessageDetailPage';
// import MessageDetailPage from '../components/MessageDetailPage/MessageDetailPage';
const AppRoutes = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Navbar />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/inbox/:messageId" element={<MessageDetailPage />} />
            <Route path="/reminder" element={<Reminder/>} /> 
            <Route path="/reminder/:messageId" element={<MessageDetailPage />} />

            <Route path="/spam" element={<Spam/>} /> 
            <Route path="/junks" element={<Junks/>} /> 
            <Route path="/drafts" element={<Drafts/>} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppRoutes;
