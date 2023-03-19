const mongoose = require("mongoose");

const url = `mongodb+srv://iPets:UeLHuz8kxlfv8xFH@cluster0.4x5usih.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  return await mongoose
    .connect(url)
    .then(console.log("Conectado ao mongo!"))
    .catch((err) => {
      console.log(err);
    });
};

const disconnect = async () => {
  return await mongoose.disconnect();
};

const database = {
  connect,
  disconnect,
};

module.exports = database;
