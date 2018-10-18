const nodemailer = require("nodemailer");
const AUTH_USER = process.env.NODEMAIL_AUTH_USER
const AUTH_PASSWORD = process.env.NODEMAIL_AUTH_PASSWORD

/*
    // THIS IS EXAMPLE OF BODY NEEDED FOR function sendEmail()

{
	"to": ["vutran6853@gmail.com", "Jordan@hotmail.com", "Ashley@yahoo.com"],
	"subject": "Approve Match",
	"name": ["VU", "Jordan", "Ashley"]
}

*/

let sendEmail = (req, res, next) => {
  // console.log('REQ.BODY: ', req.body)
  let { to } = req.body
  let { name } = req.body
  
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: AUTH_USER,
        pass: AUTH_PASSWORD
    }
  });

  for(var i = 0; i < to.length; i++) {
    // console.log('TO:', to[i])
    // console.log('BODY:', body[i]);
    var mailOptions = {
      from: '"kitneyExchangeEmail" kitneyExchangeEmail', // sender address 
      to: to[i], // list of receivers
      subject: req.body.subject, // Subject line
      text: 'Test1?', // plain text body
      forceEmbeddedImages: true,
      html: `
        <h3>Welcome to Kitney Exchange ${ name[i] }</h3>,
        <p>
          Carrots soybeans, owls duck raising or, cheep in plows. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Feed in a woof, a farmers market. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. bull bowels cat chicken cow, calf donkey duck.
        </p>
        <br/>
        <div>
          Embedded image: 
          <img style="height:150px; width:150px "src="https://cdn1.medicalnewstoday.com/content/images/articles/318/318852/hands-holding-a-heart.jpg"/>
        </div> 
        `,
      };
    //   console.log('');
    //   console.log('mailOptions: ', mailOptions)
    //   console.log('');

      // transporter.sendMail(mailOptions, (error, info) => {
      //   if (error) {
      //       return console.log(error);
      //   }
      //   console.log('Message %s sent: %s', info.messageId, info.response);
      //       res.render('index');
      //   });
  }
}

module.exports = {
  sendEmail
}