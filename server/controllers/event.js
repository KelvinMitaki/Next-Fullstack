const router = require("express").Router();
const auth = require("../middlewares/auth");
const { check, validationResult } = require("express-validator");
const Event = require("../models/event");

router.get("/api/test", (req, res) => {
  res.send({ message: "Hello World" });
});

router.get("/api/all/events", async (req, res) => {
  try {
    const events = await Event.find({});
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post(
  "/api/new/event",
  auth,
  check("name").trim().not().isEmpty().withMessage("name must not be empty"),
  check("about")
    .trim()
    .not()
    .isEmpty()
    .withMessage("about should not be empty"),
  check("description")
    .trim()
    .isLength({ min: 20 })
    .withMessage("please enter a description with 20 characters minimum"),
  check("city").trim().not().isEmpty().withMessage("city must not be empty"),
  check("venue")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Venue field must not be empty"),
  check("eventDate").isDate().withMessage("event date must be of date type"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(500).send({ message: errors.array()[0].msg });
      }
      const { name, about, description, city, venue, eventDate } = req.body;
      const { _id } = req.session.user;
      const event = new Event({
        name,
        about,
        description,
        city,
        venue,
        eventDate,
        host: _id
      });
      await event.save();
      res.send(event);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
module.exports = router;
