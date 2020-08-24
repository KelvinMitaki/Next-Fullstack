const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const eventRoutes = require("./controllers/event");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const mongooseConnect = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("connected to the database");
  };
  mongooseConnect();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  //ROUTES
  server.use(eventRoutes);

  server.all("*", (req, res) => handle(req, res));
  server.listen(PORT, err =>
    err ? console.log(err) : console.log(`server started on port ${PORT}`)
  );
});
