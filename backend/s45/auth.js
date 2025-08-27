const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY="CourseBookingAPI"
require('dotenv').config();

//[SECTION] Token Creation


module.exports.createAccessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin
    };

    return jwt.sign(data, JWT_SECRET_KEY, {});
}

//[SECTION] Token Verification

module.exports.verify = (req, res, next) => {
    console.log(req.headers.authorization);

    let token = req.headers.authorization;

    if(typeof token === "undefined"){
        return res.send({ auth: "Failed. No Token" });
    } else {
        console.log(token);
        //Bearer Token ejdlaskfndlskfjlksd
        token = token.slice(7, token.lenght);
        console.log(token);


        //[SECTION] Token decryption

        jwt.verify(token, JWT_SECRET_KEY, function(err, decodedToken){
            if(err) {
                return res.send({
                    auth: "Failed",
                    message: err.message
                });
            } else {
                console.log("Result from verify method:")
                console.log(decodedToken);

                req.user = decodedToken;

                next();
            }
        })

    }
}


//[SECTION] Verify Admin

module.exports.verifyAdmin = (req, res, next) => {
    if(req.user.isAdmin) {
        next();
    } else {
        return res.send({
            auth: "Failed",
            message: "Action Forbidden"
        })
    }
}

// [SECTION] Error Handler
module.exports.errorHandler = (err, req, res, next) => {
    
    // We capture the error message from the error and if none, "Internal Server Error will be used"
    const errorMessage = err.message || "Internal Server Error";

    // We will be sending a standardized error response
    // We construct a standardized error response JSON object with the appropriate error message, status code, error code, and any additional details provided in the error object.

    res.json({
        message: errorMessage,
        errorCode: err.code || "SERVER_ERROR",
        details: err.details || null
    }) 
}