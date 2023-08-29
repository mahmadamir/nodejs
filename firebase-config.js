const admin = require("firebase-admin");

const serviceAccount = require("./bms-earn-firebase-adminsdk-alwuo-2f55b40a67.json"); // Update with your credentials path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
