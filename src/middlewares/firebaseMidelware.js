function checkAuth(req, res, next) {
  
  if (req.session.kind) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports=checkAuth