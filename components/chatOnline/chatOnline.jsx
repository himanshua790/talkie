import React from 'react';
import Image from 'next/image';
import styles from './chatOnline.module.css';
const chatOnline = () => {
  const user = {
    username: 'John Doe',
    photo:
      'https://images.pexels.com/photos/9637308/pexels-photo-9637308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  };
  return (
    <div className={styles.chatOnline}>
      <div className={styles.chatOnlineFriend}>
        <div className={styles.chatOnlineImgContainer}>
          <Image
            src={user.photo}
            alt="test profile photo"
            layout="fill"
            className={styles.chatOnlineImg}
          />
          <div className={styles.chatOnlineBadge}></div>
        </div>
        <span className={styles.chatOnlineName}>John Doe</span>
      </div>
    </div>
  );
};

export default chatOnline;
