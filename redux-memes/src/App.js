import React from "react";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Meme Generator!</h1>
				<MemeForm />
				<MemeList />
			</header>
		</div>
	);
}

export default App;
