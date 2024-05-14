import * as React from "react";

interface EmailTemplateProps {
  Name: string;
  Email: string;
  Message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
  Email,
  Message,
}) => (
  <div>
    <h2>Message from {Name}</h2>
    <p>{Message}</p>
    <div>Reply: {Email}</div>
  </div>
);
