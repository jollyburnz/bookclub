import type { NextApiRequest, NextApiResponse } from 'next';
import fetch, { Response } from 'node-fetch';
import { MailerLiteSuccessResponse, MailerLiteErrorResponse } from '../../types/mailerlite';
require('dotenv').config();

type Data = MailerLiteSuccessResponse | MailerLiteErrorResponse | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    try {
      const response: Response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': apiKey as string,
        },
        body: JSON.stringify({
          email: email,
          groups: [groupId],
        }),
      });

      const data: Data = await response.json();

      if (response.ok) {
        return res.status(200).json({ message: 'Subscribed successfully' });
      } else {
        console.error('MailerLite API error:', data);
        return res.status(500).json({ message: 'Failed to subscribe', error: data });
      }
    } catch (error: any) {
      console.error('Error calling MailerLite API:', error);
      return res.status(500).json({ message: 'Failed to subscribe', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}