// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../services/database'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(req.method)
  // console.log(req.query.id)
  await db.delDisciplina(Number(req.query.id))
  // res.redirect(307, '/disciplinas')
  // res.revalidate("/disciplinas")
  res.status(200)//.json({ name: 'John Doe' })
}
