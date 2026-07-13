import fs from "node:fs";
import { existsSync } from "node:fs";

const FILE_PATH: string = "./src/data/todo.json";

function fileExists(): boolean {
  return existsSync(FILE_PATH);
}

async function createFile(): Promise<void> {
  try {
    fs.writeFile(FILE_PATH, "{}", (err) => {
      console.error("Failed to create file:", err);
    });

    console.log("JSON file created successfully");
  } catch (err) {
    console.error("Failed to create file:", err);
  }
}

export async function setupFile(): Promise<void> {
  if (!fileExists()) await createFile();
}
