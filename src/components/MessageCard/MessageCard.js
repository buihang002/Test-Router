import React from 'react';
import styles from '../MessageCard/MessageCard.module.css';

const MessageCard = ({ message, onClick }) => {
    return (
        <div className={styles.card} onClick={() => onClick(message)}>
      <div className={styles.header}>
        <img src={message.from.avatarUrl} alt={message.from.name} className={styles.avatar} />
        <div>
          <h3 className={styles.title}>{message.main.title}</h3>
          <p className={styles.sender}>{message.from.name} to {message.to.name}</p>
        </div>
      </div>
      <p className={styles.content}>{message.main.content.substring(0, 100)}...</p>
    </div>
    );
  };
  

export default MessageCard;


