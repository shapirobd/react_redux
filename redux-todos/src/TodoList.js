import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import "./TodoList.css";

const TodoList = () => {
	const todos = useSelector((store) => store.todos);
	console.log(todos);
	return (
		<div className="TodoList">
			<ul>
				{todos.map((todo) => (
					<Todo todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
