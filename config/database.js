const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://iPets:nFSzfPrMcKauQWiN@cluster0.4x5usih.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conectado à base de dados :)"))
  .catch((err) => {
    console.error(err);
  });

const PORT = process.env.PORT || 3000;

//Subindo o servidor localHost
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
