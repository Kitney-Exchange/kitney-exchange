const nodemailer = require('nodemailer');

nodemailer.createTestAccount((error, account) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.ether',
    post: 587,
    secure: false, 
    auth: {
      user: account.user,
      pass: account.pass
    }
  });
});

const mailOption = {
  from: ' "Fred Foo" <foo@example.com>',
  to: 'vutran6853@gmail.com, vutran6853@gmail.com',
  subject: 'Hello World',
  text: 'Hello',
  html: '<p>Hello Dallas DFW</p>'
}

transporter.sendMail(mailOption, (error, info) => {
  if(error) {
    return console.log(error)
  }
  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

})