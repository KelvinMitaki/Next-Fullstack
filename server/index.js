const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongodb-session")(session);

const eventRoutes = require("./controllers/event");
const authRoutes = require("./controllers/auth");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // SESSION STORE
  const sessionStore = new mongoStore({
    collection: "sessions",
    uri: process.env.MONGO_URI
  });

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
  // CREATE SESSION
  server.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: sessionStore,
      cookie: {
        secure: !dev,
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 24
      }
    })
  );

  //ROUTES
  server.use(eventRoutes);
  server.use(authRoutes);

  server.all("*", (req, res) => handle(req, res));
  server.listen(PORT, err =>
    err ? console.log(err) : console.log(`server started on port ${PORT}`)
  );
});
