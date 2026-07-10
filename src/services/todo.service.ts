import type { Task } from "../models/todo.js";

class TodoService {
  add(title: string): void {}

  list(): Task[] {
    return [];
  }

  remove(id: number): void {}
}

export default TodoService;
