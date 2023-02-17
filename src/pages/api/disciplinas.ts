// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../services/database'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db.setDisciplina(req.body.nome)
  res.redirect(307, '/disciplinas')
  // res.status(200).json({ name: 'John Doe' })
}
