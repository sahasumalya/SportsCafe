import  handlers from './handler';
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  port     : process.env.PORT,
  password : process.env.PASSWORD,
  timeout  : 15000,
  database : process.env.DB
});
 
connection.connect((err)=>{
  if(err)
   console.log(err);
  else
   console.log("Connection established");
});

 

let routes = 
  {
    method: 'POST',
    path: '/postdata',
    handler: handlers(connection)
  }
;

export default routes;