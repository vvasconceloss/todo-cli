import type { Task } from "../models/todo.js";
import { getNextId, readFileContent, writeToFile } from "../utils/file.js";

class TodoService {
  async add(title: string): Promise<void> {
    let id: number = await getNextId();
    const data = await readFileContent();

    data.tasks.push({ id, title, completed: false });

    const todoJSON = JSON.stringify(data);
    await writeToFile(todoJSON);
  }

  list(): Task[] {
    return [];
  }

  remove(id: number): void {}
}

export default TodoService;
