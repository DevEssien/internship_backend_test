// test/serverRoutes.test.js

const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
const app = require("../app"); // assuming your app setup is in app.js
const User = require("../models/User"); // assuming your User model is in models/User.js

chai.use(chaiHttp);
const expect = chai.expect;

describe("Server Routes", () => {
	// Setup and teardown hooks for database connection
	before(async () => {
		// Connect to a test database
		await mongoose.connect("mongodb://localhost:27017/testDb");
	});

	beforeEach(async () => {
		// Clear the database before each test
		await User.deleteMany({});
	});

	after(async () => {
		// Disconnect from the database after all tests
		await mongoose.disconnect();
	});

	it("should create a new user", async () => {
		const res = await chai
			.request(app)
			.post("/api/users")
			.send({ username: "testuser", email: "test@example.com" });

		expect(res).to.have.status(201);
		expect(res.body).to.be.a("object");
		expect(res.body).to.have.property("username", "testuser");
		expect(res.body).to.have.property("email", "test@example.com");
	});

	// Add more test cases for other routes as needed
});
