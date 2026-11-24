// The vacuum remembers that corner, even if the map does not.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "That corner is where the Wi-Fi dies. I went in once. I came back a different vacuum.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
