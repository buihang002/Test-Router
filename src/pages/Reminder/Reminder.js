import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MessageCard from '../../components/MessageCard/MessageCard';
import styles from './Reminder.module.css';
import messages from '../../data/messages.json';
import MessageDetail from '../../components/MessageDetail/MessageDetail';
import MessageDetailPage from '../../components/MessageDetailPage/MessageDetailPage';

const Reminder= () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const messageId = location.pathname.split('/').pop();
    const message = messages.find(msg => msg.id === messageId);
    if (message) {
      setSelectedMessage(message);
    } else {
      setSelectedMessage(null); 
    }
  }, [location]);

  const handleCardClick = (message) => {
    setSelectedMessage(message); 
    navigate(`/reminder/${message.id}`, { replace: true }); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <div className={styles.scrollable}>
          {messages.filter(msg => msg.folder === 'reminder').map((message) => (
            <MessageCard 
              key={message.id} 
              message={message} 
              onClick={() => handleCardClick(message)} 
            />
          ))}
        </div>
      </div>

      <div className={styles.rightPane}>
        {/* {selectedMessage ? (
          <MessageDetailPage message={selectedMessage} />
        ) : (
          <div className={styles.placeholder}>Please choose an email</div>
        )} */}
      </div>
    </div>
  );
};

export default Reminder;
