import path from "node:path";
import { existsSync } from "node:fs";
import type { TodoData } from "../models/todo.js";
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const DATA_DIR: string = path.join(process.cwd(), "data");
const FILE_PATH: string = path.join(DATA_DIR, "todo.json");

function fileExists(): boolean {
  return existsSync(FILE_PATH);
}

async function createFile(): Promise<void> {
  try {
    await writeFile(FILE_PATH, JSON.stringify({ tasks: [] }));
    console.log("> JSON file created successfully");
  } catch (err) {
    console.error("Failed to create file:", err);
  }
}

export async function readFileContent(): Promise<TodoData> {
  try {
    let fileContent = await readFile(FILE_PATH, { encoding: 'utf8' });

    if (!fileContent.trim()) {
      await createFile();
      return { tasks: [] };
    }

    return JSON.parse(fileContent) as TodoData;
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.warn("Corrupted JSON detected. Resetting file...");
      await createFile();
    } else {
      console.error("Failed to read file:", err);
    }

    return { tasks: [] };
  }
}

export async function writeToFile(content: string): Promise<void> {
  try {
    await writeFile(FILE_PATH, content);
    return;
  } catch (err) {
    console.error("Failed to write in file:", err);
    return;
  }
}

export async function getNextId(): Promise<number> {
  const data = await readFileContent();
  const tasks = data.tasks;

  return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
}

export async function setupFile(): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });

  if (!fileExists()) await createFile();

  const todoData: object = await readFileContent();
}
