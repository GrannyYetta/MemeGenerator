export function MemeComponent() {
	return (
		<main>
			<div className="form">
				<label htmlFor="top-text">Top text</label>
				<input
					id="top-text"
					className="form--input"
					placeholder="Top text"
					type="text"
				/>{" "}
				<label htmlFor="bottom-text">Bottom text</label>
				<input
					id="bottom-text"
					className="form--input"
					placeholder="Bottom text"
					type="text"
				/>
				<button className="form--button" type="submit">
					Create Meme &#128171;
				</button>
			</div>
		</main>
	);
}
