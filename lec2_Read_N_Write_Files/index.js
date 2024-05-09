const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// Reading from file

// fs.readFile("./files/starter.txt", (err, data) => {
//   if (err) throw err;
//   //   console.log(data); // gives Buffer data
//   console.log(data.toString());
// });

// we can use utf-8 to directly read data without using toString()

// fs.readFile("./files/starter.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// Use path instead of hardcoding file path
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log("Hello");
// Async nature
// Output of above code
// Hello
// Hi, dipshit. This is your Overlord → even though we wrote its code before "Hello" → Async

// Writing to a file

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "This a a generic reply", // content that needs to be written n reply.txt
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");
//     //   Append to a file
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n \nThe fuck did you u say scumbag",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");

//         // Rename file
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete");
//           }
//         );
//       }
//     );
//   }
// );

// Above pattern can lead to callback hell, so use async functions

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    // unlink deletes a file
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nThis is appended via async "
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseFileRename.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseFileRename.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// exit on uncaught error
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception : ${err}`);
  process.exit(1);
});
