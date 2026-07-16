#!/usr/bin/env node

import figlet from "figlet";
import { Command } from "commander";
import { addCommand } from "./commands/add.js";
import TodoService from "./services/todo.service.js";

console.log(await figlet.text("ToDo CLI"));

const todoService = new TodoService();

const program: Command = new Command();
program.name("todo-cli").description("A simple todo list CLI").version("1.0.0");

addCommand(program, todoService);

program.parse();
