module.exports = reqFilter = (req, resp, next) => {
  if (!req.query.id) {
    resp.send("Please Provide the Id!");
  } else if (req.query.id <= 0) {
    resp.send("You can not access this page");
  } else {
    next();
  }
};
