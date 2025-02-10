import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
require('dotenv').config();

const sheets = google.sheets('v4');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON || '{}'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const client: google.auth.OAuth2Client = await auth.getClient(); // Explicit type casting
      sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:C',
      }, (err, response) => {
        if (err) {
          console.error('Error fetching data from Google Sheet:', err);
          res.status(500).json({ error: 'Failed to fetch data' });
        } else {
          const books = response.data.values.map((row: string[]) => ({
            title: row[0],
            author: row[1],
            description: row[2],
          }));
          res.status(200).json({ books });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
