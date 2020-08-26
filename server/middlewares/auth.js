module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(401).send({ message: "Please sign in to continue" });
  }
  next();
};
