import React from 'react';
import styles from '../MessageDetail/MessageDetail.module.css';


const MessageDetail = ({ message }) => {
  return (
    <div className={styles.detail}>
      <div className={styles.header}>
        <img src={message.from.avatarUrl} alt={message.from.name} className={styles.avatar} />
        <div>
          <h3 className={styles.title}>{message.main.title}</h3>
          <p className={styles.sender}>{message.from.name} to {message.to.name}</p>
        </div>
      </div>
      <p className={styles.content}>{message.main.content}</p>
    </div>
  );
};

export default MessageDetail;
