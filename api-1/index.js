const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3001, () => console.log("API 1 is listening"));

app.get("/properties", (req, res) => {
  return res.json([
    {
      id: 1,
      name: "Property 1"
    },
    {
      id: 2,
      name: "Property 2"
    },
    {
      id: 3,
      name: "Property 3"
    }
  ]);
});
