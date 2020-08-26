const { check, validationResult } = require("express-validator");
const User = require("../models/user");

const router = require("express").Router();

router.post(
  "/api/register",
  check("firstName")
    .isLength({ min: 2 })
    .withMessage("first name must be two characters or more"),
  check("lastName")
    .isLength({ min: 2 })
    .withMessage("last name must be two characters or more"),
  check("email").isEmail().withMessage("email must be valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 characters min"),
  check("confirmPassword")
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
      //  SEND EMAIL CONFIRM WITH SENDGRID
      const user = new User({
        firstName,
        lastName,
        email,
        password
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
  check("email").isEmail().withMessage("Please enter a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 characters min"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }

      const { email, password } = req.body;
      const user = User.findOne({ email, password });
      if (!user) {
        return res.status(401).send({ message: "Invalid email or password" });
      }
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

module.exports = router;
