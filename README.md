# Todo CLI

A simple command-line Todo application built with **Node.js** and **TypeScript**.

This project is intentionally small. Its purpose is not to build the most feature-rich task manager, but to establish a solid understanding of backend development fundamentals before moving to larger projects.

---

# Features

- Add new tasks
- List all tasks
- Remove tasks
- Persistent storage using JSON
- Simple command-line interface
- Strong typing with TypeScript

Example:

```bash
todo-cli add "Study Node.js"
todo-cli list
todo-cli remove 1
```

---

# Tech Stack

- Node.js
- TypeScript
- pnpm

No external database or frameworks are used on purpose.

The objective is to first master the core language and runtime before introducing additional abstractions.

---

# Project Structure

```
todo-cli/
│
├── src/
│   ├── commands/
│   │   ├── add.ts
│   │   ├── list.ts
│   │   └── remove.ts
│   │
│   ├── services/
│   │   └── todo.service.ts
│   │
│   ├── models/
│   │   └── todo.ts
│   │
│   ├── utils/
│   │   └── file.ts
│   │
│   ├── data/
│   │   └── todos.json
│   │
│   └── index.ts
│
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

The project is intentionally divided into small responsibilities to encourage clean architecture from the beginning.

---

# Architecture

```
CLI

 │

 ▼

Command

 │

 ▼

Service

 │

 ▼

File System

 │

 ▼

todos.json
```

Responsibilities:

- **CLI** receives user input.
- **Commands** interpret the requested action.
- **Services** contain business logic.
- **File utilities** handle persistence.
- **JSON** acts as the storage layer.

Although simple, this separation makes the application easier to maintain and extend.

---

# Getting Started

## Clone the repository

```bash
git clone https://github.com/vvasconceloss/todo-cli.git

cd todo-cli
```

---

## Install dependencies

```bash
pnpm install
```

---

## Run the project

```bash
pnpm run dev
```

---

# Available Commands

## Add a task

```bash
todo-cli add "Read Clean Code"
```

---

## List tasks

```bash
todo-cli list
```

Example output:

```
1. Study Node.js
2. Learn TypeScript
3. Build APIs
```

---

## Remove a task

```bash
todo-cli remove 2
```

---

# Data Persistence

Tasks are stored inside a local JSON file.

Example:

```json
[
  {
    "id": 1,
    "title": "Study Node.js"
  },
  {
    "id": 2,
    "title": "Learn TypeScript"
  }
]
```

Using JSON instead of a database allows the project to focus on file manipulation and application logic before introducing database concepts.

---

# Development Principles

This project follows a few guiding principles:

- Keep the code simple.
- Prefer readability over clever solutions.
- Separate responsibilities.
- Use strong typing.
- Avoid unnecessary dependencies.
- Build a solid foundation before increasing complexity.

---

# Requirements

- Node.js 20+
- pnpm

---

# License

This project is licensed under the MIT License.
Feel free to use, modify, and learn from the code.

---

# Author

**Victor Vasconcelos**
