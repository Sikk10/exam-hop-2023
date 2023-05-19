const mongoose = require("mongoose");
const uri =
  "mongodb+srv://ganbayartuguldur:tuguldur1014@exam-hop-2023.fxmaxgd.mongodb.net/";
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected mongodb");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
