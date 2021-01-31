const INITIAL_STATE = { todos: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CREATE":
			return { todos: [...state.todos, action.todo] };
		case "DELETE":
			return { todos: state.todos.filter((todo) => todo !== action.todo) };
		default:
			return state;
	}
};

export default rootReducer;
