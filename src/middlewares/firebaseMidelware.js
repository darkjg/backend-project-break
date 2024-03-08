function checkAuth(req, res, next) {
  console.log(req.session)

  if (req.session.token) {
  
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports=checkAuth