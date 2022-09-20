const express = require("express");
const dbConnect = require("./mongodb");
const app = express();
const mongodb = require("mongodb");

app.use(express.json());

//GET Data
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

//Insert Data
app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = data.insert(req.body);
  resp.send(result);
});

//Update data
app.put("/:name", async (req, resp) => {
  let data = await dbConnect();
  let result = data.updateOne(
    { name: req.params.name },
    {
      $set: req.body,
    }
  );
  resp.send({ result: "Updated" });
});

//Delete Data
app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

app.listen(5000);
