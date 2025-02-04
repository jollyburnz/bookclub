import type { NextApiRequest, NextApiResponse } from 'next';
import fetch, { Response } from 'node-fetch';
require('dotenv').config();

type Data =  { message: string, error?: any };

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
      console.log(apiKey, 'apikey');
      const response: Response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey as string}`,
        },
        body: JSON.stringify({
          email: email,
          groups: [groupId],
        }),
      });

      const data = await response.json();

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
