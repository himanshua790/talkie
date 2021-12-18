import { ValidateProps } from '@/api-lib/constants';
import { findPosts, insertConversation } from '@/api-lib/db';
import { auths, database, validateBody } from '@/api-lib/middlewares';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.use(database);

handler.post(
  validateBody({
    type: 'object',
    properties: {
      content: ValidateProps.conversation.content,
    },
  }),
  async (req, res) => {
    // if (!req.user) {
    //   return res.status(401).end();
    // }
    try {
      let resp = await insertConversation(req.db, {
        members: [req.body.senderId, req.body.receiverId],
      });
      // Store in mongo conversation collection
      console.log('conversation post request', resp);
      return res.status(200).json({ response: resp });
    } catch (error) {
      console.log('conversation ERROR post request', error);
      return res.status(404).json({ response: 'error' });
    }
  }
);

export default handler;
