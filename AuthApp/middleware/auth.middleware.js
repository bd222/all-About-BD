const jwt = require('jsonwebtoken')
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try { 
      console.log(`BODY TOKEN :${req.body.token}`);
      console.log(`COOKIE TOKEN  :${req.cookies.token}`);
      console.log("Header", req.header("Authorization").replace("Bearer", " "));

      //" HERE THERE IS SOME PROBLEM WHILE I VERIFY MY TOKEN EXTRACT FROM COOKIE ???????? "

      // Retrieve the token from this 3 methors 
      //1.Request Body
      //2.Useing Bearer(Header)
      //3. Frome Cookie we get the token and verify ("THIS METHORD FACEING PROBLEM !!!!!!!!!!!!")
      const token = req.body.token||req.cookie.token || req.header('Authorization').replace('Bearer', '');
      if (!token || token === undefined) {
          return res.status(400).json({
              success: false,
              message: `Can't get Token!`
          });
      }

      // No 2: Verify the token given by the user
      try {
          const payload = jwt.verify(token, process.env.JWT_SECRECT_KEY); // Decode the token to check if it's valid
          // console.log(payload);
          req.user = payload;
      } catch (err) {
          return res.status(400).json({
              success: false,
              message: `Invalid Token!`
          });
      }
      next();
  } catch (err) {
      return res.status(400).json({
          success: false,
          message: `Something went wrong while verifying the Token!`
      });
  }
};


exports.isStudent = async(req, res,  next)=>{
    try {
        if(req.user.role!= "Student"){
            return res.status(402).json({
                success:false, 
                message:`This is the Protected Route For Student!!!`
            });
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false, 
            message:"User Role is't matching.",
        })
    }
}





exports.isAdmin = async(req, res,  next)=>{
    try {
        if(req.user.role!= "Admin"){
            return res.status(402).json({
                success:false, 
                message:`This is the Protected Route For Admin!!!`
            });
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false, 
            message:"User Role is't matching.",
        })
    }
}
