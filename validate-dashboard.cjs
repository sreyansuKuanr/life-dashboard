const fs = require("fs");

const html = fs.readFileSync("outputs/life-dashboard/index.html", "utf8");
const checks = [
  "Life Dashboard",
  'id="nav"',
  'id="themeToggle"',
  'id="exportCsv"',
  'id="timerButton"',
  'id="habitList"',
  'data-title="Finance Dashboard"',
  'data-title="Journal, Mood, and Timeline"',
  "localStorage.setItem",
  "new Blob",
];

for (const check of checks) {
  console.log(`${html.includes(check) ? "PASS" : "FAIL"} ${check}`);
}

console.log(`bytes ${html.length}`);
