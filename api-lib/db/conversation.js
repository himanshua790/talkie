export async function insertConversation(db, { members }) {
  const data = {
    members,
    createdAt: new Date(),
  };
  console.log('insertconversation', members);
  let resp = await db.collection('conversation').insertOne(data);
  console.log('Response on converstion insert', resp);
  return data;
}

export async function findConversation(db, userId) {
  // let resp =  await.collection("conversation").find
  const filter = {
    members: {
      $in: [`${userId}`],
    },
  };
  let resp = await db.collection('conversation').find(filter);
  console.log('Response on converstion find', resp.toArray());
  return resp.toArray();
}
