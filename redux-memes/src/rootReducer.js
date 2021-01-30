const INITIAL_STATE = { memes: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CREATE":
			return { memes: [...state.memes, action.meme] };
		case "DELETE":
			const { topText, bottomText, imgUrl } = action.meme;
			return {
				memes: state.memes.filter(
					(meme) =>
						meme.topText !== topText ||
						meme.bottomText !== bottomText ||
						meme.imgUrl !== imgUrl
				),
			};
		default:
			return state;
	}
};

export default rootReducer;
