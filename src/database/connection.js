const mongoose = require("mongoose");
const config = require("../config");

const { uri } = config.db;

async function createMongodbConnection() {
	try {
		const dbConnected = await mongoose.connect(uri);
		if (dbConnected) console.log("- Connected to MongoDB server");
	} catch (error) {
		console.log("- Database Error:: ", error);
	}
}

module.exports = createMongodbConnection;
