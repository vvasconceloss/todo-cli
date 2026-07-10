#!/usr/bin/env node

import figlet from "figlet";
import { Command } from "commander";

console.log(await figlet.text("ToDo CLI"));

const program: Command = new Command();
program.name("todo-cli").description("A simple todo list CLI").version("1.0.0");

program.parse();
