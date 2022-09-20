const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "max 100",
    price: 200,
    brand: "maxx",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

main();
