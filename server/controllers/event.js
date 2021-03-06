const router = require("express").Router();
const auth = require("../middlewares/auth");
const { check, validationResult } = require("express-validator");
const Event = require("../models/event");
const User = require("../models/user");

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

router.post(
  "/api/edit/event",
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
  check("_id").not().isEmpty().withMessage("id must not be empty"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(500).send({ message: errors.array()[0].msg });
      }
      const {
        name,
        about,
        description,
        city,
        venue,
        eventDate,
        _id
      } = req.body;
      const userId = req.session.user._id;
      const event = await Event.findById(_id);
      if (!event) {
        return res.status(404).send({ message: "No event with that id" });
      }
      if (event.host.toString() !== userId.toString()) {
        return res
          .status(401)
          .send({ message: "Not authorised to edit this event" });
      }
      const updatedEvent = await Event.findByIdAndUpdate(_id, {
        name,
        about,
        description,
        city,
        venue,
        eventDate
      });
      res.send(updatedEvent);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

router.get("/api/all/user/events", auth, async (req, res) => {
  try {
    const { _id } = req.session.user;
    const eventIds = await User.findById(_id).select({ events: 1, _id: 0 });
    const events = await Event.find({ _id: { $in: eventIds } });
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});
// sign up to an event
router.get(
  "/api/join/event",
  auth,
  check("eventId").not().isEmpty().withMessage("event id must not be empty"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { eventId } = req.body;
      const { _id } = req.session.user;
      const user = await User.findById(_id);
      user.events = [eventId, ...user.events];
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
module.exports = router;
