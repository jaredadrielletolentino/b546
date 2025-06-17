const mongoose = require("mongoose");

// [SECTION] Schema/Blueprint
const enrollmentSchema = new mongoose.Schema({

	userId: {
		type: String,
		required: [true, 'User ID is Required']
	},
	enrolledCourses: [{

		courseId: {
			type: String,
			required: [true, 'Course ID is Required']
		}
	}],
	totalPrice: {
		type: Number,
		required: [true, 'totalPrice is Required']
	},
	enrollOn: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
		default: 'Enrolled'
	}

});

// NOTE: difference between Model and Schema
// Schema: It serves as a blueprint. It defines what the data looks like including the fields, the types, and the rules
// Model: It is the actual OBJECT used to interact with the database. It makes CRUD possible using the Schema rules
// In a form of analogy, the SCHEMA is the recipe and the MODEL is the chef that uses the schema to cook

// [SECTION] Model
module.exports = mongoose.model('Enrollment', enrollmentSchema);