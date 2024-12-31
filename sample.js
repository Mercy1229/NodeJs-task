const express = require("express");
const mongoose = require("mongoose");
const { Car } = require("./model");
const app = express();
const Connect = async () => {
  await mongoose.connect(
    "mongodb+srv://mercysamuel1229:f1nyvejqJJdqNPO5@samplecluster.f1syk.mongodb.net/employee"
  );
  console.log(`Connect with ${mongoose.connection.host}`);
};
Connect();

app.get("/", async (req, res) => {
  const car = new Car({
    name: "Volvo",
    year: 2000,
  });
  const data = await car.save();
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server is running on 3000..");
});
