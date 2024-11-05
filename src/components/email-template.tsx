import * as React from 'react';

interface EmailTemplateProps {
    senderEmail: string;
    senderName: string;
    content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    senderName, senderEmail, content
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', color: '#333' }}>
        <h1 style={{ color: '#007BFF' }}>Message from {senderName}</h1>
        <p><strong>E-post:</strong> {senderEmail}</p>
        <hr style={{ border: '1px solid #007BFF' }} />
        <h2>Content of message:</h2>
        <p>{content}</p>
    </div>
);
