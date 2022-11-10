import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Find the absolute path of the json directory
  const articleDirectory = path.join(
    process.cwd(),
    'data',
    'articles',
    `${req.query.article}.md`
  );
  //Read the json data file data.json
  try {
    const fileContents = await fs.readFile(articleDirectory, 'utf8');

    res.status(200).send(fileContents);
  } catch {
    res.status(400).send('File not found or readable');
  }
}
