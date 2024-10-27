'use server';

import { Resend } from "resend";

const formatEmail = (name, message, email) => {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h1 style="color: #007BFF;">Melding fra ${name}</h1>
        <p><strong>E-post:</strong> ${email}</p>
        <hr style="border: 1px solid #007BFF;" />
        <h2>Beskrivelse:</h2>
        <p>${message}</p>
      </div>
    `;
  };

export const sendEmail = async (senderName, message, senderEmail) => {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND);

    const emailContent = formatEmail(senderName, message, senderEmail);

    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['magnusgiverin@icloud.com'],
        subject: 'Message from Contact Form - ' + senderName,
        html: emailContent,
      });

      if (error) {
        console.error({ error });
        alert('Failed to send email. Please try again later.');
        return;
      }

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }

}