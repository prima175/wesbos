import { createTransport, getTestMessageUrl } from 'nodemailer';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
function makeANiceEmail(text: string) {
  return `
     <div  
     style="
     border :1px solid black ;
     padding:20px;
     font-family:snas-serif;
     line-height:2;
     font-size:20px;
     " >
     <h2>hello there
     </h2>
     <p>${text}</p>
     <p>prima</p>

</div>
     `;
}
export interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
export interface Envelope {
  from: string;
  to?: string[] | null;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  // email the user a token
  const info = (await transport.sendMail({
    to,
    from: 'primadhar175@gmail.com',
    subject: 'your password reset token',
    html: makeANiceEmail(`your password  reset token is here!
    <a href ="${process.env.FRONTEND_URL}/reset?token=${resetToken}">click here to reset</a>`),
  })) as MailResponse;
  console.log(info);
  if (process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`message sent!preview at ${getTestMessageUrl(info)}`);
  }
}