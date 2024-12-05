const express = require("express");

const app = express();

app.use(express.json());

const productList = [];

app.post("/", (req, res) => {
  const { price, name } = req.body;

  if (!price || !name)
    return res
      .status(404)
      .json({ message: "product name and price are required" });

  productList.push({ price, name });
  return res.status(200).json({ productList });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
