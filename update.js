const dbConnect = require("./mongodb");

const updatedata = async () => {
  const db = await dbConnect();
  let result = db.updateOne(
    { name: "note 5" },
    { $set: { name: "iphone pro max", price: "2000$" } }
  );
};
updatedata();
