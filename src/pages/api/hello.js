// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (_, res) => {
  const body = { message: "Hello" };
  res.statusCode = 200;
  res.json(body);
};

export default handler;
/*
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/
