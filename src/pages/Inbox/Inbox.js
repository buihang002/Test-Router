import React, { useState } from 'react';
import MessageCard from '../../components/MessageCard/MessageCard';
import MessageDetail from '../../components/MessageDetail/MessageDetail';
import styles from './Inbox.module.css';
import messages from '../../data/messages.json';
// import Navbar from '../../components/Navbar/Navbar';

const Inbox = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);
  
    const handleCardClick = (message) => {
      setSelectedMessage(message);
    };
  
    return (
      <div className={styles.container}>

        <div className={styles.leftPane}>

          <div className={styles.scrollable}>
            {messages.filter(msg => msg.folder === 'inbox').map(message => (
              <MessageCard key={message.id} message={message} onClick={handleCardClick} />
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
  
  
export default Inbox;
