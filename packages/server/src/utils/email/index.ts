import mail from '@sendgrid/mail';
import env from '../../env';
import logs from '../logs';

const SENDGRID_API_KEY = env('SENDGRID_API_KEY');

interface Email {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

mail.setApiKey(SENDGRID_API_KEY);

const sendMail = (email: Email) => {
  mail
    .send(email)
    .then(() => {
      return;
    })
    .catch((error) => {
      logs(`Could not send email: ${error}`, 'email/index.ts');
    });
};

export default sendMail;
