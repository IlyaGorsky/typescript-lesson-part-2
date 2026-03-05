type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

type TodoSmallCard = Pick<Todo, 'title' | 'completed'>;