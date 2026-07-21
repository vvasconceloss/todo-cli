import path from "node:path";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const DATA_DIR: string = path.join(process.cwd(), "data");
const FILE_PATH: string = path.join(DATA_DIR, "todo.json");

function fileExists(): boolean {
  return existsSync(FILE_PATH);
}

async function createFile(): Promise<void> {
  try {
    await writeFile(FILE_PATH, "{}");
    console.log("JSON file created successfully");
  } catch (err) {
    console.error("Failed to create file:", err);
  }
}

export async function readFileContent(): Promise<object> {
  try {
    let fileContent = await readFile(FILE_PATH, { encoding: 'utf8' });
    return JSON.parse(fileContent);
  } catch (err) {
    console.error("Failed to read file:", err);
    return {}
  }
}

export async function getNextId(): Promise<number> {
  const data = await readFileContent() as Record<string, { id: number }[]>;
  const tasks = data.tasks ?? [];

  return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
}

export async function setupFile(): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });

  if (!fileExists()) await createFile();

  const todoData: object = await readFileContent();
}
