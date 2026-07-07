#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

program.name("todo-cli").description("A simple todo list CLI").version("1.0.0");

program.parse();
