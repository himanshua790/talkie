import React from 'react';
import Image from 'next/image';
import styles from './conversation.module.css';
const Conversations = (props) => {
  console.log('conversation props', styles.conversationImg);
  const user = {
    username: 'John Doe',
    photo:
      'https://images.pexels.com/photos/9637308/pexels-photo-9637308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  };
  return (
    <div className={styles.conversation}>
      <Image
        src={user.photo}
        alt="test profile photo"
        height="40px"
        width="40px"
        className={styles.conversationImg}
      />
      <span className={styles.conversationName}>{user?.username}</span>
    </div>
  );
};

export default Conversations;
