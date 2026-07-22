import type { Command } from "commander";
import type TodoService from "../services/todo.service.js";

export function addCommand(program: Command, todoService: TodoService) {
  program
    .command("add")
    .description("add a new task")
    .requiredOption('--title <title>', 'set the task title')
    .action((options) => {
      todoService.add(options.title);
      console.log("> The task has been successfully added!");
    });
}
