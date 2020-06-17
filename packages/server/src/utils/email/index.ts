import mail from '@sendgrid/mail';
import env from '../../env';

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
      console.log('Email sent');
    })
    .catch((error) => console.log('Error sending mail: ', error));
};

export default sendMail;
