import React from "react";
import { useSelector } from "react-redux";
import Meme from "./Meme";
import "./MemeList.css";

const MemeList = () => {
	const memes = useSelector((store) => store.memes);
	return (
		<div className="MemeList">
			{memes.map((meme) => (
				<Meme meme={meme} />
			))}
		</div>
	);
};

export default MemeList;
