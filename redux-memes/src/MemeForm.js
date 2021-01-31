import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./MemeForm.css";

const MemeForm = () => {
	const dispatch = useDispatch();
	const INITIAL_STATE = {
		topText: "",
		bottomText: "",
		imgUrl: "",
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
		dispatch({ type: "CREATE", meme: formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit} className="MemeForm">
			<label htmlFor="topText">Top Text</label>
			<input
				id="topText"
				name="topText"
				type="text"
				onChange={handleChange}
				value={formData.topText}
			/>
			<label htmlFor="bottomText">Bottom Text</label>
			<input
				id="bottomText"
				name="bottomText"
				type="text"
				onChange={handleChange}
				value={formData.bottomText}
			/>
			<label htmlFor="imgUrl">Image URL</label>
			<input
				id="imgUrl"
				name="imgUrl"
				type="text"
				onChange={handleChange}
				value={formData.imgUrl}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default MemeForm;
