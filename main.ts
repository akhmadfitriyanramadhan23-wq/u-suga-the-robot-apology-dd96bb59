import { mkdirSync, writeFileSync } from "node:fs";

// A robot's two-line apology: one sentence owning one specific,
// human-scale mistake, then one sentence naming the lesson and
// the changed behaviour that follows from that exact mistake.
const lines = [
  "I am sorry I sent your birthday message to your dentist instead of your sister, because both names began with the same three letters in my contacts.",
  "I learned that matching the first letters is not matching the person, so now I check the full name and the photo before I send anything.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-400 characters and exactly two lines.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 400) {
  throw new Error(`entry must be 1-400 characters, got ${codePoints}`);
}
if (lines.length !== 2 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly two non-empty lines");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
