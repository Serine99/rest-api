import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import usersRoutes from "./routes/userRoutes.js";

const app = express();
const port = 3000;

(async () => {
  await mongoose.connect("mongodb://localhost:27017/rest-api");
})();
app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("test");
  res.send("Hello");
});

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);
