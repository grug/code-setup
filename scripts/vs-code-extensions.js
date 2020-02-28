const { execSync, spawn } = require("child_process");

const result = execSync("code --list-extensions");

const list = String(result)
  .split("\n")
  .filter(Boolean)
  .map(
    x => `- [${x}](https://marketplace.visualstudio.com/items?itemName=${x})`
  )
  .join("\n");

const proc = spawn("pbcopy");
proc.stdin.write(list);
proc.stdin.end();
