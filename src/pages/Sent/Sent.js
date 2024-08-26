import React, { useState } from 'react';
import MessageCard from '../../components/MessageCard/MessageCard';
import MessageDetail from '../../components/MessageDetail/MessageDetail';
import styles from './Sent.module.css';  
import messages from '../../data/messages.json';
// import Navbar from '../../components/Navbar/Navbar';

const Sent = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleCardClick = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <div className={styles.scrollable}>
          {messages.filter(msg => msg.folder === 'sent').map(message => (
            <MessageCard key={message.id} message={message} onClick={() => handleCardClick(message)} />
          ))}
        </div>
      </div>

      <div className={styles.rightPane}>
        {selectedMessage ? (
          <MessageDetail message={selectedMessage} />
        ) : (
          <div className={styles.placeholder}>Please choose an email</div>
        )}
      </div>
    </div>
  );
};

export default Sent;
