import TodoItem from "../TodoItem/TodoItem";

function TodoList({todos}) {

return(
    <section>
        {todos.map((el, index) => (
            <TodoItem key={index} text={el} />
        ))}
    </section>
);
}
export default TodoList;