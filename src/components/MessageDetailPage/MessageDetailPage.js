import React from 'react';
import { useParams } from 'react-router-dom';
import MessageDetail from '../MessageDetail/MessageDetail';
import messages from '../../data/messages.json';
import styles from './MessageDetailPage.module.css';
import MessageCard from '../MessageCard/MessageCard';

const MessageDetailPage = () => {
  const { messageId } = useParams();

  const message = messages.find(msg => msg.id === messageId);

  return (
    <>

    <div className={styles.container}>
        {/* <MessageCard message={message} /> */}
      <MessageDetail message={message} />
    </div>
    </>
  );
};

export default MessageDetailPage;
