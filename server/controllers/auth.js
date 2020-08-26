const { check, validationResult } = require("express-validator");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const auth = require("../middlewares/auth");

router.get("/api/current_user", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(404).send({});
    }
    const user = await User.findById(req.session.user._id);
    if (user) {
      req.session.user = user;
      const isLoggedIn = req.session.isLoggedIn;
      return res.send({ user, isLoggedIn });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post(
  "/api/register",
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("first name must be two characters or more"),
  check("lastName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("last name must be two characters or more"),
  check("email").trim().isEmail().withMessage("email must be valid"),
  check("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("password must be 6 characters min"),
  check("confirmPassword")
    .trim()
    .isLength({ min: 6 })
    .withMessage("confirm password must be 6 characters min"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      } = req.body;
      if (password !== confirmPassword) {
        return res.status(401).send({ message: "Passwords do not match" });
      }
      const userExists = User.findOne({ email });
      if (userExists) {
        return res
          .status(401)
          .send({ message: "A user with that email already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      //  SEND EMAIL CONFIRM WITH SENDGRID
      const user = new User({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: hashedPassword
      });
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

router.post(
  "/api/login",
  check("email").trim().isEmail().withMessage("Please enter a valid email"),
  check("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("password must be 6 characters min"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }

      const { email, password } = req.body;
      const user = User.findOne({ email: email.toLowerCase() });
      if (!user) {
        return res.status(401).send({ message: "Invalid email or password" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send({ message: "passwords do not match" });
      }
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

router.post(
  "/api/update/user",
  auth,
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("first name must be two characters or more"),
  check("lastName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("last name must be two characters or more"),
  check("email").trim().isEmail().withMessage("email must be valid"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const { _id } = req.session.user;
      const user = await User.findByIdAndUpdate(_id, req.body);
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

router.post(
  "/api/follow/user",
  auth,
  check("_id").not().isEmpty().withMessage("id must not be empty"),
  async (req, res) => {
    try {
      const userId = req.session.user._id;
      const { _id } = req.body;
      if (userId.toString() === _id.toString()) {
        return res.status(401).send({ message: "You cannot follow yourself" });
      }
      const userToBeFollowed = await User.findById(_id);
      userToBeFollowed.followers = [userId, ...userToBeFollowed.followers];
      await userToBeFollowed.save();
      const follower = await User.findById(userId);
      follower.following = [userToBeFollowed._id, ...follower.following];
      await follower.save();
      res.send(userToBeFollowed);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);
module.exports = router;
