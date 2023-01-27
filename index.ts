import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  console.log("ping");
  res.send("ping");
});

app.listen(PORT, () => {
  console.log("server is running");
});
