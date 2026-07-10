import type { Command } from "commander";
import type TodoService from "../services/todo.service.js";

export function dummyCommand(program: Command, todoService: TodoService) {
  program
    .command("dummy")
    .description("A dummy command for testing")
    .action(() => {
      console.log("This is a dummy command.");
    });
}
