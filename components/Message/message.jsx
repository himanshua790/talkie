import React from 'react';
import Image from 'next/image';
import styles from './message.module.css';
const Message = ({ own }) => {
  const user = {
    username: 'John Doe',
    photo:
      'https://images.pexels.com/photos/9637308/pexels-photo-9637308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  };
  return (
    <div
      className={
        own
          ? `message own ${styles.message} ${styles.own}`
          : `message ${styles.message}  `
      }
    >
      <div className={styles.messageTop}>
        <div className={styles.imageContainer}>
          <Image
            src={user.photo}
            alt="test profile photo"
            layout="fill"
            className={styles.messageImg}
          />
        </div>
        <p className={styles.messageText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        </p>
      </div>
      <div className={styles.messageBottom}>1 hour ago</div>
    </div>
  );
};

export default Message;
