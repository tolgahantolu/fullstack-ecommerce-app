import mongoose from "mongoose";

const db = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connect: Success");
    })
    .catch((err) => {
      //  throw new Error(err.message);
      console.log("MongoDB connect: Fail", err.message);
    });
};

export default db;
