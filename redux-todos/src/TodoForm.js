import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./TodoForm.css";

const TodoForm = () => {
	const dispatch = useDispatch();
	const INITIAL_STATE = {
		todo: "",
	};
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "CREATE", todo: formData.todo });
		setFormData(INITIAL_STATE);
	};

	return (
		<form className="TodoForm" onSubmit={handleSubmit}>
			<label htmlFor="todo">Enter Todo</label>
			<input
				id="todo"
				name="todo"
				type="text"
				onChange={handleChange}
				value={formData.todo}
			/>
			<button>Add Todo</button>
		</form>
	);
};

export default TodoForm;
