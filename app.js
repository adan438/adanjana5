//adan asaad+jana khlaila
const http = require("http");//import node.js core module
const fs = require("fs");//import file module
const path = require("path");
const dirPath = path.join(__dirname, "/templates");//templates בונים מסלול עד לתיקייה 
const designFile = fs.readFileSync(`${dirPath}/page.html`);// עד הסוףHTMLקריאת התוכן הנמצא בקובץ 
//מייצר שרת
const server = http.createServer(function (req, res) {
  console.log(req);
  res.setHeader("content-type", "text/html");
  res.end(designFile);
});
server.listen(3000);//listen for any incoming requests
