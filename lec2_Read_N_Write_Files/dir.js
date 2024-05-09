const fs = require("fs");

// Create new directory if it doesn't exist
if (!fs.existsSync("./new-dir")) {
  fs.mkdir("./new-dir", (err) => {
    if (err) throw err;
    console.log("new-dir created");
  });
}

// Delete a directory if it exists

if (fs.existsSync("./new-dir")) {
  fs.rmdir("./new-dir", (err) => {
    if (err) throw err;
    console.log("Directory Deleted");
  });
}

// exit on uncaught error
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception : ${err}`);
  process.exit(1);
});
