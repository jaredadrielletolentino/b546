// JSON web tokens are an industry standard for sending information between our applications in a secure manner.
// the "jsonwebtoken" package will allow us to gain access to methods that will help us create a JSON web token.

const jwt = require('jsonwebtoken');

// We need to use environment variables:
require('dotenv').config();

// [SECTION] JSON Web Tokens
/*
- JSON Web Token or JWT is a way of securely passing information from the server to the client or to other parts of a server
- Information is kept secure through the use of the secret code
- Only the system that knows the secret code that can decode the encrypted information
- Imagine JWT as a gift wrapping service that secures the gift with a lock
- Only the person who knows the secret code can open the lock
- And if the wrapper has been tampered with, JWT also recognizes this and disregards the gift
- This ensures that the data is secure from the sender to the receiver
*/

// We will be creating a function/method for the creation of the token.
// Once this method is use, we will be providing the document of the user who will own the token.
	// The user parameter will contain the information of the user
module.exports.createAccessToken = (user) => {

	// Let us define the payload.
	// user details
		// payload: id of the user, email of the user, role of the user.
	let data = {
		id: user._id,
		email: user.email,
		isAdmin: user.isAdmin
	}

	// sign method is used to create or generate our token.
		// it has 3 arguments:
			// 1. Content of payload
			// 2. Signature or the secret key
			// 3. Additional Options
	return jwt.sign(data, process.env.JWT_SECRET_KEY, {});
}