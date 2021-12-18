import { auths, database, validateBody } from '@/api-lib/middlewares';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';
import { findConversation } from '@/api-lib/db';
const handler = nc(ncOpts);

handler.use(database);

handler.get(async (req, res) => {
  console.log('userid', req.query.userId);
  let resp = await findConversation(req.db, req.query.userId);
  res.status(200).json(resp);
});

export default handler;
