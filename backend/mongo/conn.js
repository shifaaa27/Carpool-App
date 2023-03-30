import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://pranav:pranav1906@cluster0.7f7czdq.mongodb.net/?retryWrites=true&w=majority";

export const connectToServer = (callback) => {
  mongoose
    .connect(connectionString, {})
    .then(() => {
      console.log("Connected to MongoDB");
      return callback();
    })
    .catch((err) => {
      console.log(err);
      return callback(err);
    });
};