const connect = require("./helper/db");
connect();

const express = require("express");
const cors = require("cors");

const port = 5000;
const app = express();

const taskRoutes = require("./routes/taskRoutes");

app.use(cors());
app.use(express.json());

app.use("/", taskRoutes);

const corsOptions = {
  origin: "http://localhost:3000/",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Todo list backend");
});
app.get("/test", (req, res) => {
  res.send("This is test endpoint");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
