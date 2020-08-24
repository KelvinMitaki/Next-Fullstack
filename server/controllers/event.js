const router = require("express").Router();

router.get("/api/test", (req, res) => {
  res.send({ message: "Hello World" });
});

module.exports = router;
