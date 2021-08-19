#!/usr/bin/env node

let fs = require("fs");

(function () {
  let n = process.argv[2];
  let name = process.argv[3];

  if (!Number.isInteger(+n) || n <= 0) {
    console.log("Invalid Input");
    return;
  }

  try {
    if (fs.existsSync(`${name}-1`)) {
      for (let i = 1; i <= n; i++) {
        fs.rmdirSync(`${name}-${i}`);
      }
    } else {
      for (let i = 1; i <= n; i++) {
        fs.mkdirSync(`${name}-${i}`);
      }
    }
  } catch (err) {
    console.log("some error occured...");
  }
})();
