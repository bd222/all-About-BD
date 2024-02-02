# Problem ❗️

### **There are 3 methord to get get token when a user logIn -**
#### 1. From Req Body.
#### 2. Request Body
#### 3. Useing Bearer(Header)
#### 4. Frome Cookie we get the token and verify ("THIS METHORD FACEING PROBLEM"❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️)


- ##### The Code is Here -

```JavaScript 
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
        const token = req.body.token||req.cookies.token || req.header('Authorization').replace('Bearer', '');
        if (!token || token === undefined) {
            return res.status(400).json({
                success: false,
                message: `Can't get Token!`
            });
        }

        // No 2: Verify the token given by the user
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET); // Decode the token to check if it's valid
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
```