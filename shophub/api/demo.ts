import { VercelRequest, VercelResponse } from '@vercel/node';

interface DemoResponse {
  message: string;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const response: DemoResponse = {
    message: 'Hello from Vercel serverless function',
  };
  res.status(200).json(response);
}
