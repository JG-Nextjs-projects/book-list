// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '../../data/data.json'

export default async (req, res) => {
  const db = await data

  res.status(200).json(db)
}