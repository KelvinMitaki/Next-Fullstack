const express = require("express");
const next = require("next");
const eventRoutes = require("./controllers/event");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //ROUTES
  server.use(eventRoutes);

  server.all("*", (req, res) => handle(req, res));
  server.listen(PORT, err =>
    err ? console.log(err) : console.log(`server started on port ${PORT}`)
  );
});
