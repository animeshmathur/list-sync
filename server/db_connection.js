const mongoose = require("mongoose");
const connect = async () =>
  await mongoose.connect(
    "mongodb://animesh:animesh1992@ds159293.mlab.com:59293/app-sync-db",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
module.exports = { connect };
