// // const colors = require("colors");

// // console.log("hello".green);
// // console.log("node");

// // // const moment = require("moment");

// // // var date = "2017-03-13";
// // // var time = "18:00";

// // // var timeAndDate = moment(date + " " + time);

// // // console.log(timeAndDate);

const http = require("http");
const data = require('./data')

http.createServer((req, resp) => {
resp.writeHead(200,{"Content-Type":"application\json"});
resp.write(JSON.stringify(data));
resp.end();
  })
  .listen(5000);

console.log(process.argv[2]);

// const fs = require("fs");

// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);
