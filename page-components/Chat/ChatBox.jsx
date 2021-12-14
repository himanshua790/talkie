import React from 'react';

// import { Avatar } from '@/components/Avatar';
// import { Button } from '@/components/Button';
// import { Input } from '@/components/Input';
import { Container, Wrapper } from '@/components/Layout';
import { LoadingDots } from '@/components/LoadingDots';
import { Text, TextLink } from '@/components/Text';
// import { fetcher } from '@/lib/fetch';
// import { usePostPages } from '@/lib/post';
import { useCurrentUser } from '@/lib/user';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
// import toast from 'react-hot-toast';
import styles from './Chat.module.css';
import { Conversation } from '@/components/Conversations';
import { Message } from '@/components/Message';
import { ChatOnline } from '@/components/chatOnline';
//TODO CHECK FEED for same structure
const Messenger = (props) => {
  console.log('Messenger Props', props);
  return (
    <>
      <div className={styles.messenger}>
        <div className={styles.chatMenu}>
          <div className={styles.chatMenuWrapper}>
            <input
              placeholder="Search for friends"
              className={styles.chatMenuInput}
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className={styles.chatBox}>
          <div className={styles.chatBoxWrapper}>
            <div className={styles.chatBoxTop}>
              <Message />
              <Message own={true} />
              <Message />
              <Message />
            </div>
          </div>
          <div className={styles.chatBoxBottom}>
            <textarea
              className={styles.chatMessageInput}
              placeholder="write something here....."
            ></textarea>
            <button className={styles.chatSubmitButton}>Send</button>
          </div>
        </div>
        <div className={styles.chatOnline}>
          <div className={styles.chatOnlineWrapper}>
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

const ChatBox = () => {
  const { data, error } = useCurrentUser();
  const loading = !data && !error;
  return (
    <div className={styles.root}>
      {loading ? (
        <LoadingDots>Loading</LoadingDots>
      ) : data?.user ? (
        <Messenger user={data.user} />
      ) : (
        <Text color="secondary">
          Please{' '}
          <Link href="/login" passHref>
            <TextLink color="link" variant="highlight">
              sign in
            </TextLink>
          </Link>{' '}
          to post
        </Text>
      )}
    </div>
  );
};

export default ChatBox;
