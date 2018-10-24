const nodemailer = require("nodemailer");
const AUTH_USER = process.env.NODEMAIL_AUTH_USER;
const AUTH_PASSWORD = process.env.NODEMAIL_AUTH_PASSWORD;

/*
    // THIS IS EXAMPLE OF BODY NEEDED FOR function sendEmail()

{
	"to": ["vutran6853@gmail.com", "Jordan@hotmail.com", "Ashley@yahoo.com"],
	"subject": "Approve Match",
	"name": ["VU", "Jordan", "Ashley"]
}

*/

let sendEmail = (req, res, next) => {
  console.log("Hello");
  console.log("REQ.BODY: ", req.body);
  let { to } = req.body;
  let { name } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: AUTH_USER,
      pass: AUTH_PASSWORD
    }
  });

  for (var i = 0; i < to.length; i++) {
    // console.log('TO:', to[i])
    // console.log('BODY:', body[i]);
    var mailOptions = {
      from: '"kitneyExchangeEmail" kitneyExchangeEmail', // sender address
      to: to[i], // list of receivers
      subject: req.body.subject, // Subject line
      text: "Test1?", // plain text body
      forceEmbeddedImages: true,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      
      <head>
        <title>KitneyExchangeEmail-1</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: none;
            -webkit-text-resize: 100%;
            text-resize: 100%;
          }
      
          a {
            outline: none;
            color: #40aceb;
            text-decoration: underline;
          }
      
          a:hover {
            text-decoration: none !important;
          }
      
          .nav a:hover {
            text-decoration: underline !important;
          }
      
          .title a:hover {
            text-decoration: underline !important;
          }
      
          .title-2 a:hover {
            text-decoration: underline !important;
          }
      
          .btn:hover {
            opacity: 0.8;
          }
      
          .btn a:hover {
            text-decoration: none !important;
          }
      
          .btn {
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -ms-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
      
          table td {
            border-collapse: collapse !important;
          }
      
          .ExternalClass,
          .ExternalClass a,
          .ExternalClass span,
          .ExternalClass b,
          .ExternalClass br,
          .ExternalClass p,
          .ExternalClass div {
            line-height: inherit;
          }
      
          @media only screen and (max-width:500px) {
            table[class="flexible"] {
              width: 100% !important;
            }
            table[class="center"] {
              float: none !important;
              margin: 0 auto !important;
            }
            *[class="hide"] {
              display: none !important;
              width: 0 !important;
              height: 0 !important;
              padding: 0 !important;
              font-size: 0 !important;
              line-height: 0 !important;
            }
            td[class="img-flex"] img {
              width: 100% !important;
              height: auto !important;
            }
            td[class="aligncenter"] {
              text-align: center !important;
            }
            th[class="flex"] {
              display: block !important;
              width: 100% !important;
            }
            td[class="wrapper"] {
              padding: 0 !important;
            }
            td[class="holder"] {
              padding: 30px 15px 20px !important;
            }
            td[class="nav"] {
              padding: 20px 0 0 !important;
              text-align: center !important;
            }
            td[class="h-auto"] {
              height: auto !important;
            }
            td[class="description"] {
              padding: 30px 20px !important;
            }
            td[class="i-120"] img {
              width: 120px !important;
              height: auto !important;
            }
            td[class="footer"] {
              padding: 5px 20px 20px !important;
            }
            td[class="footer"] td[class="aligncenter"] {
              line-height: 25px !important;
              padding: 20px 0 0 !important;
            }
            tr[class="table-holder"] {
              display: table !important;
              width: 100% !important;
            }
            th[class="thead"] {
              display: table-header-group !important;
              width: 100% !important;
            }
            th[class="tfoot"] {
              display: table-footer-group !important;
              width: 100% !important;
            }
          }
        </style>
      </head>
      
      <body style="margin:0; padding:0;" bgcolor="#eaeced">
        <table style="min-width:320px;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#eaeced">
          <!-- fix for gmail -->
          <tr>
            <td class="hide">
              <table width="600" cellpadding="0" cellspacing="0" style="width:600px !important;">
                <tr>
                  <td style="min-width:600px; font-size:0; line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="wrapper" style="padding:0 10px;">
              <!-- module 1 -->
              <table data-module="module-1" data-thumb="thumbnails/01.png" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td data-bgcolor="bg-module" bgcolor="#eaeced">
                    <table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:29px 0 30px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <th class="flex" width="100%" align="left" style="padding:0;">
                                <table class="center" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="font:bold 18px/18px Arial, Helvetica, sans-serif; color:#888;">
                                      <a target="_blank" style="text-decoration:none; color:#888;" href="#">Kitney Exchange</a>
                                      <!-- <a target="_blank" style="text-decoration:none;" href="https://www.kitneyexchange.com/">
                                        <img src="images/logo.png" border="0" style="font:bold 12px/12px Arial, Helvetica, sans-serif; color:#606060;" align="left"
                                         vspace="0" hspace="0" width="113" height="12" alt="Kitney Exchange" />
                                      </a> -->
                                    </td>
                                  </tr>
                                </table>
                              </th>
                              <th class="flex" align="left" style="padding:0;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td data-color="text" data-size="size navigation" data-min="10" data-max="22" data-link-style="text-decoration:none; color:#888;"
                                     class="nav" align="right" style="font:bold 13px/15px Arial, Helvetica, sans-serif; color:#888;">
                                      <a target="_blank" style="text-decoration:none; color:#888;" href="#">Contact</a>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- module 2 -->
              <table data-module="module-2" data-thumb="thumbnails/02.png" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td data-bgcolor="bg-module" bgcolor="#eaeced">
                    <table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="img-flex">
                          <img src="https://images.unsplash.com/photo-1526030020109-32b589277488?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dd6e6d904aaf74feeb2eb226dc41776&auto=format&fit=crop&w=1497&q=80"
                           style="vertical-align:top;" width="600" height="306" alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td data-bgcolor="bg-block" class="holder" style="padding:58px 60px 52px;" bgcolor="#f9f9f9">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td data-color="title" data-size="size title" data-min="25" data-max="45" data-link-color="link title color" data-link-style="text-decoration:none; color:#292c34;"
                               class="title" align="center" style="font:35px/38px Arial, Helvetica, sans-serif; color:#292c34; padding:0 0 24px;">
                                Hello ${name[i]}, </td>
                            </tr>
                            <tr>
                              <td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;"
                               align="center" style="font:bold 16px/25px Arial, Helvetica, sans-serif; color:#888; padding:0 0 23px;">
                                Thank you for your interest in being a part of the exchange pairing program. You recently submitted the Kitney Exchange medical
                                history questionnaire.
                              </td>
                            </tr>
                            <tr>
                              <!-- <td style="padding:0 0 20px;">
                                <table width="134" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td data-bgcolor="bg-button" data-size="size button" data-min="10" data-max="16" class="btn" align="center" style="font:12px/14px Arial, Helvetica, sans-serif; color:#f8f9fb; text-transform:uppercase; mso-padding-alt:12px 10px 10px; border-radius:2px;"
                                     bgcolor="#7bb84f">
                                      <a target="_blank" style="text-decoration:none; color:#f8f9fb; display:block; padding:12px 10px 10px;" href="#">Learn More</a>
                                    </td>
                                  </tr>
                                </table>
                              </td> -->
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="28"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- module 3 -->
              <table data-module="module-3" data-thumb="thumbnails/03.png" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td data-bgcolor="bg-module" bgcolor="#eaeced">
                    <table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="img-flex">
                          <img src="https://images.unsplash.com/photo-1493551511613-abc8320c265e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2b4d31cd0082364b59d039cca5e420c3&auto=format&fit=crop&w=1350&q=80"
                           style="vertical-align:top;" width="600" height="249" alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td data-bgcolor="bg-block" class="holder" style="padding:65px 60px 50px;" bgcolor="#f9f9f9">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td data-color="title" data-size="size title" data-min="20" data-max="40" data-link-color="link title color" data-link-style="text-decoration:none; color:#292c34;"
                               class="title" align="center" style="font:30px/33px Arial, Helvetica, sans-serif; color:#292c34; padding:0 0 24px;">
                                Process
                              </td>
                            </tr>
                            <tr>
                              <td data-color="text" data-size="size text" data-min="10" data-max="26" data-link-color="link text color" data-link-style="font-weight:bold; text-decoration:underline; color:#40aceb;"
                               align="center" style="font:16px/29px Arial, Helvetica, sans-serif; color:#888; padding:0 0 21px;">
                                We will be processing your information and perform cross matching with other candidates in your area. The average wait time
                                for a potential match can range due to complicity of matching. Please be patient with us. Our priority is the
                                safety and health of our candidates. Please allow at least one month for a response. You will be notified when
                                a match is available for you. Thank you for being patient.
                              </td>
                            </tr>
                            <!-- <tr>
                              <td style="padding:0 0 20px;">
                                <table width="134" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td data-bgcolor="bg-button" data-size="size button" data-min="10" data-max="16" class="btn" align="center" style="font:12px/14px Arial, Helvetica, sans-serif; color:#f8f9fb; text-transform:uppercase; mso-padding-alt:12px 10px 10px; border-radius:2px;"
                                     bgcolor="#f5ba1c">
                                      <a target="_blank" style="text-decoration:none; color:#f8f9fb; display:block; padding:12px 10px 10px;" href="#">Thank You</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr> -->
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="28"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <!-- module 4 -->
      
      
              <!-- module 7 -->
              <table data-module="module-7" data-thumb="thumbnails/07.png" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td data-bgcolor="bg-module" bgcolor="#eaeced">
                    <table class="flexible" width="600" align="center" style="margin:0 auto;" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="footer" style="padding:0 0 10px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr class="table-holder">
                              <th class="tfoot" width="400" align="left" style="vertical-align:top; padding:0;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td data-color="text" data-link-color="link text color" data-link-style="text-decoration:underline; color:#797c82;" class="aligncenter"
                                     style="font:12px/16px Arial, Helvetica, sans-serif; color:#797c82; padding:0 0 10px;">
                                      Kitney Exchange, 2018. &nbsp; All Rights Reserved.
                                      <a target="_blank" style="text-decoration:underline; color:#797c82;" href="sr_unsubscribe">Unsubscribe.</a>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                              <th class="thead" width="200" align="left" style="vertical-align:top; padding:0;">
                                <table class="center" align="right" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td class="btn" valign="top" style="line-height:0; padding:3px 0 0;">
                                      <a target="_blank" style="text-decoration:none;" href="#">
                                        <img src="images/ico-facebook.png" border="0" style="font:12px/15px Arial, Helvetica, sans-serif; color:#797c82;" align="left"
                                         vspace="0" hspace="0" width="6" height="13" alt="fb" />
                                      </a>
                                    </td>
                                    <td width="20"></td>
                                    <td class="btn" valign="top" style="line-height:0; padding:3px 0 0;">
                                      <a target="_blank" style="text-decoration:none;" href="#">
                                        <img src="images/ico-twitter.png" border="0" style="font:12px/15px Arial, Helvetica, sans-serif; color:#797c82;" align="left"
                                         vspace="0" hspace="0" width="13" height="11" alt="tw" />
                                      </a>
                                    </td>
                                    <td width="19"></td>
                                    <td class="btn" valign="top" style="line-height:0; padding:3px 0 0;">
                                      <a target="_blank" style="text-decoration:none;" href="#">
                                        <img src="images/ico-google-plus.png" border="0" style="font:12px/15px Arial, Helvetica, sans-serif; color:#797c82;" align="left"
                                         vspace="0" hspace="0" width="19" height="15" alt="g+" />
                                      </a>
                                    </td>
                                    <td width="20"></td>
                                    <td class="btn" valign="top" style="line-height:0; padding:3px 0 0;">
                                      <a target="_blank" style="text-decoration:none;" href="#">
                                        <img src="images/ico-linkedin.png" border="0" style="font:12px/15px Arial, Helvetica, sans-serif; color:#797c82;" align="left"
                                         vspace="0" hspace="0" width="13" height="11" alt="in" />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </th>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- fix for gmail -->
          <tr>
            <td style="line-height:0;">
              <div style="display:none; white-space:nowrap; font:15px/1px courier;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
            </td>
          </tr>
        </table>
      </body>
      
      </html>
        `
    };
    //       console.log('');
    //       console.log('mailOptions: ', mailOptions)
    //       console.log('');

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message %s sent: %s", info.messageId, info.response);
      res.render("index");
    });
  }
};

module.exports = {
  sendEmail
};
