var email = require("./mail.ctrl");
var dev = require('../config/env/development');

module.exports.EmailWithInvoicePDF =(Mail) =>{
//   console.log(Mail);
  var content= ` <!DOCTYPE html>
  <html lang="en">

  <head>
      <title>web mail</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
 </head>
 <body>  
      <div>
           <h4>Hi ${Mail.Name},</h4>
           <h5> ${Mail.Content} </h5>
     </div>

  </body>

  </html>
  `
  email.SendEmail(content, Mail.Subject,Mail.Email,Mail.File)
}


module.exports.EmailWithoutAttachment =(Mail) =>{
     // console.log("mail cehck here ",Mail);
     var content= ` <!DOCTYPE html>
     <html lang="en">
   
     <head>
         <title>web mail</title>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>  
         <div>
              <h4>Hi ${Mail.Name},</h4>
              <h5> ${Mail.Content} </h5>
        </div>
   
     </body>
   
     </html>
     `
     email.SendEmailWithoutAttachment(content, Mail.Subject,Mail.Email)
   }



// module.exports.documentsShare = (data)=>{
//     // console.log(data);


//     var table  = '';

//     data.Documents.forEach(ts => {
//       table += `<tr class="success">         
//       <td>${ts.DocumentName}</td>
//       <td>${ts.DocumentType}</td>
//       // <td><a href="${encrypt.UploadPath}${ts.DocumentUrl}" target="_blank">Click here to download</td>
//       </tr>`
      
//     })
    
//     var content = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <title>Bootstrap Example</title>
//       <meta charset="utf-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1">
//       <meta name="viewport" content="width=device-width, initial-scale=1">
//       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
//       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
//       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
//     </head>
//     <body>
    
//     <div class="container">
//       <h2>Documents Shared</h2>
//       <p>The following are the documents shared to you:</p>            
//       <table class="table table-bordered">
//         <thead>
//           <tr>
//             <th>Document Name</th>
//             <th>Document Type</th>
//             <th>Download Link</th>
//           </tr>
//         </thead>
//         <tbody>    

//    ${table}

//         </tbody>
//       </table>
//     </div>
    
//     </body>
//     </html>
//     `  
//     email.SendEmail(content, data.Subject,data.Email);
// }