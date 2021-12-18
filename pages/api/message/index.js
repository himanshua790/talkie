import { ValidateProps } from '@/api-lib/constants';
import { insertMessage } from '@/api-lib/db';
import { auths, database, validateBody } from '@/api-lib/middlewares';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.use(database);

handler.post(validateBody(ValidateProps.message), async (req, res) => {
  // if (!req.user) {
  //   return res.status(401).end();
  // }
  try {
    let resp = await insertMessage(req.db, req.body);
    // Store in mongo conversation collection
    console.log('message post request', resp);
    return res.status(200).json({ response: resp});
  } catch (error) {
    console.log('message ERROR post request', error);
    return res.status(404).json({ response: 'error' });
  }
});

export default handler;
