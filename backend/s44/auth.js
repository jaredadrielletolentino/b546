const jwt = require("jsonwebtoken");

require('dotenv').config();

//[SECTION] Token Creation


module.exports.createAccessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin
    };

    return jwt.sign(data, process.env.JWT_SECRET_KEY, {});
}

// [SECTION] Token Verification
/*
Analogy
- Receive the gift and open the lock to verify if the the sender is legitimate and the gift was not tampered with.
- Verify will be used as a middleware in ExpressJS. Functions added as argument in an expressJS route are considered as middleware and is able to receive the request and response objects as well as the next() function. Middlewares will be further elaborated on later sessions.
*/

module.exports.verify = (req, res, next) => {
    // console.log(req.headers.authorization);

    let token = req.headers.authorization;

    if(token === undefined) {
        return res.send({auth: "Failed. No Token"});
    } else {
        // console.log(token);
        token = token.slice(7, token.length);
        // console.log(token);

        //[SECTION] Token decryption
                /*
                Analogy
                    Open the gift and get the content
                - Validate the token using the "verify" method decrypting the token using the secret code.
                - token - the jwt token passed from the request headers.
                - JWT_SECRET_KEY - the secret word from earlier which validates our token.
                - function(err,decodedToken) - err contains the error in verification, decodedToken contains the decoded data within the token after verification
                */
        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decodedToken) {
            {
                if(err) {
                    return res.send({
                        auth: "Failed",
                        message: err.message
                    })
                } else {
                    // console.log(decodedToken);
                    req.user = decodedToken;
                    next();
                }
            }
        })
    }
}

module.exports.verifyAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next();
    } else {
        return res.status(403).send({
            auth: "Failed",
            message: "Action Forbidden"
        })
    }
}