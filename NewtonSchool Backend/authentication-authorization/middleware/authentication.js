// token is created b/c each user should have unique access and token gives unique access to each users

const webToken = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log("coming from middleware");
    const authorization = req.headers.authorization;
    console.log(authorization);
    const decode = webToken.verify(authorization, 'dk-secret');
    console.log(decode);  //decode will give the particular data only matched

    req.emailToken = decode.userDetails.email;  //storing the particular data(email) in globel object req
    next();
  } catch (error) {
    res.status(401).json({
      massage: "unthorized person",
    });
  }
};
