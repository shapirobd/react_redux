import React from "react";
import { useDispatch } from "react-redux";
import "./Meme.css";

const Meme = ({ meme }) => {
	const dispatch = useDispatch();
	const handleDelete = (e) => {
		e.preventDefault();
		dispatch({ type: "DELETE", meme });
	};

	return (
		<>
			<div className="Meme" style={{ backgroundImage: `url(${meme.imgUrl})` }}>
				<img src={meme.imgUrl} />
				<h2 className="Meme-topText">{meme.topText}</h2>
				<h2 className="Meme-bottomText">{meme.bottomText}</h2>
			</div>
			<button className="Meme-delete-btn" onClick={handleDelete}>
				Delete
			</button>
		</>
	);
};

export default Meme;
