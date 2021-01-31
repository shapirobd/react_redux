import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<TodoForm />
				<TodoList />
			</header>
		</div>
	);
}

export default App;
