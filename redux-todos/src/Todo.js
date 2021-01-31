import React from "react";
import { useDispatch } from "react-redux";
import "./Todo.css";

const Todo = ({ todo }) => {
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch({ type: "DELETE", todo });
	};

	return (
		<li className="Todo">
			<p>{todo}</p>
			<button onClick={handleDelete}>Remove</button>
		</li>
	);
};

export default Todo;
