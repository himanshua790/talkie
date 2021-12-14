import { Chat } from '@/page-components/Chat';
import Head from 'next/head';

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <Chat />
    </>
  );
};

export default FeedPage;
