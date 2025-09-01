import express from "express";
import cors from "cors"

const app = express();
app.use(express.json());
app.use("/", (req, res, next) => {
  console.log(req.method);
  next()
})
app.use(cors())

app.get("/", (req, res) => {
  res.send({ userId: 1, id: 1, title: "delectus aut autem", completed: "false" });
});

app.listen(3005, () => {
  console.log("server running on:3005");
});
