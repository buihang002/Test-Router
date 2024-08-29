import React from 'react';
import styles from '../MessageDetail/MessageDetail.module.css';


const MessageDetail = ({ message }) => {
  return (
    <div className={styles.detail}>
      <div className={styles.header}>
        <img src={message.from.avatarUrl} alt={message.from.name} className={styles.avatar} />
        <div>
        <h3 className={styles.sender2}>{message.from.name} </h3>

          <p className={styles.sender}>{message.from.email}</p>
          <h3 className={styles.title}>{message.main.timestamp}</h3>

        </div>
        <div className={styles.sender3}>
        <p >{message.timestamp} </p>
        <div className={styles.sender3}>
        <button className={`${styles.button} ${styles.replyButton}`}>Reply</button>
      <button className={`${styles.button} ${styles.forwardButton}`}>Forward</button>
      <button className={`${styles.button} ${styles.deleteButton}`}>Delete</button>
      </div> </div>
      </div>

      <h3 className={styles.title}>{message.main.title}</h3>
      <p className={styles.content}>{message.main.content}</p>
    </div>
  );
};

export default MessageDetail;
