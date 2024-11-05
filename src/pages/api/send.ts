import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/email-template';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Destructure content, senderName, and senderEmail from the request body
  const { content, senderName, senderEmail } = req.body;

  if (!content || !senderName || !senderEmail) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
    from: 'Contact form <onboarding@resend.dev>',
    to: 'magnusgiverin@icloud.com',
      subject: 'Contact from ' + senderName,
      react: EmailTemplate({ senderEmail, senderName, content }), // Passing dynamic content to the template
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};
