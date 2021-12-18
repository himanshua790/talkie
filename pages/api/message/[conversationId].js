import { auths, database, validateBody } from '@/api-lib/middlewares';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';
import { findMessage } from '@/api-lib/db';
const handler = nc(ncOpts);

handler.use(database);

handler.get(async (req, res) => {
  console.log('conversationId', req.query.conversationId);
  let resp = await findMessage(req.db, req.query.conversationId);
  res.status(200).json(resp);
});

export default handler;
