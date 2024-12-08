import { c } from "./index"; // Assuming the previous code is in colors.js
import fs from "fs";

function generateZincCss() {
  let cssContent = ":root {\n";

  // Generate CSS variables from 0 to 1000 in 10-step increments
  for (let shade = 0; shade <= 1000; shade += 10) {
    const hslColor = c.zinc(shade, "csshsl");
    cssContent += `  --c${shade
      .toString()
      .padStart(3, "0")}: ${hslColor}; /* HSL value of c.zinc(${shade}) */\n`;
  }

  cssContent += "}";

  fs.writeFileSync("zinc-colors.css", cssContent);
  console.log("zinc-colors.css generated successfully");
}

generateZincCss();
