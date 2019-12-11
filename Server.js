const http = require("http");
const app = require("./App");
const db = require('./Database/DbConfig');

db.connect();

const PORT = 8000;

const server = http.createServer(app);
console.log(`--- 🏃🏻‍‍ Server Started Running @ Port [${PORT}] ‍🏃🏻‍‍ ---`)
server.listen(PORT);