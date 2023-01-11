const jwt = require('jsonwebtoken');
const JWT_SECRET = '$SHREESHABOY';
const fetchUser = (req, res, next) => {
    //Get the user from jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {

        res.status(401).send("Please Authenticate Using A Valid Token");
    }
    // try {

        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    
    

    
    // catch (error) {

    //     res.status(401).send("Please Authenticate Using A Valid Token token yaako modify aadange anstu");
    // }


}



module.exports = fetchUser;