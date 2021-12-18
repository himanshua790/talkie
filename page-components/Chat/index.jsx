import { Spacer } from '@/components/Layout';
import styles from './Chat.module.css';
import ChatBox from './ChatBox';

export const Chat = () => {
  return (
    <div className={styles.root}>
      <Spacer size={1} axis="horizontal" />
      <ChatBox />
    </div>
  );
};
