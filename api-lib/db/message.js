export async function insertMessage(db, { conversationId, sender, text }) {
  const data = {
    conversationId: conversationId,
    sender: sender,
    text: text,
    createdAt: new Date(),
  };
  console.log('insert message :', conversationId, sender, text);
  let resp = await db.collection('message').insertOne(data);
  console.log('Response on message insert', resp);
  data._id = resp.insertedId;
  return data;
}

export async function findMessage(db, conversationId) {
  // let resp =  await.collection("conversation").find
  const filter = {
    conversationId: `${conversationId}`,
  };
  let resp = await db.collection('message').find(filter);
  console.log('Response on converstion find', resp.toArray());
  return resp.toArray();
}
