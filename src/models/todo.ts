export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoData {
  tasks: Task[];
}
