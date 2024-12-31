const express = require("express");
const mongoose = require("mongoose");
const User = require("./model.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mercysamuel1229:f1nyvejqJJdqNPO5@samplecluster.f1syk.mongodb.net/employee"
    );
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};
connectToDB();

app.get("/", async (req, res) => {
  res.send("Welcome!");
});

app.post("/user", async (req, res) => {
  try {
    const {name,email} = req.body
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();
    res
      .status(200)
      .send({ message: "User data saved successfully!", user: savedUser });
  } catch (err) {
    console.error("Error saving user data:", err);
    res.status(500).send({ error: "Error saving user data" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
