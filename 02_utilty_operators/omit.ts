{
    type Todo = {
        id: number;
        title: string;
        completed: boolean;
    }

    type TodoShortCard = Omit<Todo, 'title'>;
}