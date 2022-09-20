// const app = require("./app");
// console.log(app.x);
// const arr = [1, 2, 3, 4, 5, 6];
// const a = arr.filter((item) => {
//   return item === 2;
// });
// console.log(a);
// const fs = require("fs");
// fs.writeFileSync("helo.txt", "First Files Hello World");
// const http = require("http");
// http.createServer((req, res) => {
//     res.write("<h1>Hello World</h1>");
//     res.end()
// }).listen(4500);

// var data = require("./data");
// var http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "applicationjson" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(5000);

// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// });

// waitingData.then((data) => {
//   console.log(a + data);
// });

// app.get("", (req, res) => {
//   res.send("Hello, this is Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("Hello, this is About Page ");
// });

// app.get("*", (req, res) => {
//   res.send("Hello, this is About Page ");
// });
// app.listen(5001);

// Middleware
// const express = require("express");
// const reqFilter = require("./middleware");
// const app = express();
// const route = express.Router();

// route.use(reqFilter);

// app.get("/", (req, resp) => {
//   resp.send("Welcome to Home page");
// });

// app.get("/users", (req, resp) => {
//   resp.send("Welcome to Users page");
// });

// route.get("/about", (req, resp) => {
//   resp.send("Welcome to About page");
// });

// app.use("/", route);
// app.listen(5000);

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// async function getData() {
//   let result = await client.connect();
//   let db = result.db("ecom");
//   return db.collection("products");
//   //console.log("Collection", await collection.find({}).toArray());
// }
// getData().then((resp) => {
//   console.log("Response", resp.find({}).toArray());
// });



