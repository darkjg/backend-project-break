function checkAuth(req, res, next) {
  console.log(req.session)
  if (req.session.kind) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports=checkAuth