import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JavaScript", completed: true },
    { id: 2, text: "Learn React", completed: false },
    { id: 3, text: "Have a life!", completed: false }
  ]);
  const [filter, setFilter] = useState("all");
  const allCompleted = todos.length > 0 && todos.every(todo => todo.completed);

  const addTodo = (event) => {
    event.preventDefault();
    const newTodoText = event.target.elements.todoInput.value.trim();
    if (newTodoText) {
      setTodos([...todos, { id: Date.now(), text: newTodoText, completed: false }]);
      event.target.reset();
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const toggleAll = () => {
    const newCompletedState = !allCompleted;
    setTodos(todos.map(todo => ({ ...todo, completed: newCompletedState })));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const getTodoCountLabel = () => {
    if (filter === "all" || filter === "active") {
      return `${todos.filter(todo => !todo.completed).length} items left`; // aktif öğelerin sayısı
    } else if (filter === "completed") {
      return `${filteredTodos.length} completed tasks`;
    }
    return "";
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>ToDoList</h1>
        <form onSubmit={addTodo}>
          <input name="todoInput" className="new-todo" placeholder="What needs to be done?" autoFocus />
        </form>
      </header>

      <section className="main">
        <input className="toggle-all" type="checkbox" checked={allCompleted} onChange={toggleAll} />
        <label htmlFor="toggle-all" onClick={toggleAll}>Mark all as complete</label>

        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          {getTodoCountLabel()}
        </span>

        <ul className="filters">
          <li><a href="#/" className={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")}>All</a></li>
          <li><a href="#/" className={filter === "active" ? "selected" : ""} onClick={() => setFilter("active")}>Active</a></li>
          <li><a href="#/" className={filter === "completed" ? "selected" : ""} onClick={() => setFilter("completed")}>Completed</a></li>
        </ul>

        {todos.some(todo => todo.completed) && (
          <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        )}
      </footer>
    </section>
  );
}
