const nodemailer = require("nodemailer");
const AUTH_USER = process.env.NODEMAIL_AUTH_USER
const AUTH_PASSWORD = process.env.NODEMAIL_AUTH_PASSWORD

/*
    // This is example of BODY needed for function sendEmail()
    // 
{
  "to": ["vutran6853@gmail.com", "Jordan@hotmail.com", "Ashley@yahoo.com"],
	"subject": "Welcome Email",
	"name": ["VU", "Jordan", "Ashley"]
}

*/

let sendWelcomeEmail = (req, res, next) => {
  console.log('REQ.BODY: ', req)
  let { to } = req.body
  let { name } = req.body
  let { bcc } = req.body
  
  // let transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //       user: AUTH_USER,
  //       pass: AUTH_PASSWORD
  //   }
  // });
  
  // for(var i = 0; i < to.length; i++) {
  //   // console.log('TO:', to[i])
  //   // console.log('BODY:', body[i]);
  //   var mailOptions = {
  //     from: '"kitneyExchangeEmail" kitneyExchangeEmail', // sender address 
  //     to: to[i], // list of receivers
  //     subject: req.body.subject, // Subject line
  //     text: 'Test1?', // plain text body
  //     forceEmbeddedImages: true,
  //     html: `
  //       <h3>Welcome to Kitney Exchange ${ name[i] }</h3>,
  //       <p>
  //         Carrots soybeans, owls duck raising or, cheep in plows. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Feed in a woof, a farmers market. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. bull bowels cat chicken cow, calf donkey duck.
  //       </p>
  //       <br/>
  //       <div>
  //         Embedded image: 
  //         <img style="height:150px; width:150px "src="https://cdn1.medicalnewstoday.com/content/images/articles/318/318852/hands-holding-a-heart.jpg"/>
  //       </div> 
  //       `,
  //     };
  //     console.log('');
  //     console.log('mailOptions: ', mailOptions)
  //     console.log('');

  //       // transporter.sendMail(mailOptions, (error, info) => {
  //       //   if (error) {
  //       //       return console.log(error);
  //       //   }
  //       //   console.log('Message %s sent: %s', info.messageId, info.response);
  //       //       res.render('index');
  //       //   });
  // }
}


//// Did we want to send to one person or mult person for successStory Email?  ////
/// if so [ do FOR loop for mult ] ////

// {
//   "to": "vutran6853@gmail.com",
//   "subject": "Success Story",
//   "name": "VU"
// }


let sendSuccessStory = (req, res, next) => {
  console.log('HIT')
  console.log('req.body', req.body)
  console.log('req.parmas', req.parmas)


  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: AUTH_USER,
            pass: AUTH_PASSWORD }
  });


  // for(var i = 0; i < to.length; i++) {
  //   // console.log('TO:', to[i])
  //   // console.log('BODY:', body[i]);
  //   var mailOptions = {
  //     from: '"kitneyExchangeEmail" kitneyExchangeEmail', // sender address 
  //     to: to[i], // list of receivers
  //     subject: req.body.subject, // Subject line
  //     text: 'Test1?', // plain text body
  //     forceEmbeddedImages: true,
  //     html: `
  //       <h3>Welcome to Kitney Exchange ${ name[i] }</h3>,
  //       <p>
  //         Carrots soybeans, owls duck raising or, cheep in plows. Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Feed in a woof, a farmers market. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. bull bowels cat chicken cow, calf donkey duck.
  //       </p>
  //       <br/>
  //       <div>
  //         Embedded image: 
  //         <img style="height:150px; width:150px "src="https://cdn1.medicalnewstoday.com/content/images/articles/318/318852/hands-holding-a-heart.jpg"/>
  //       </div> 
  //       `,
  //     };
  //     console.log('');
  //     console.log('mailOptions: ', mailOptions)
  //     console.log('');

  //       // transporter.sendMail(mailOptions, (error, info) => {
  //       //   if (error) {
  //       //       return console.log(error);
  //       //   }
  //       //   console.log('Message %s sent: %s', info.messageId, info.response);
  //       //       res.render('index');
  //       //   });
  // }

}

module.exports = {
  sendWelcomeEmail,
  sendSuccessStory
}