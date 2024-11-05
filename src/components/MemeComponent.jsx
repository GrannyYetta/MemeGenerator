import memesData from "../../memesData";
import { useState } from "react";

export function MemeComponent() {
	// const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = useState(memesData);

	function getMemeImage() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					id="top-text"
					className="form--input"
					placeholder="Top text"
					type="text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>{" "}
				<input
					id="bottom-text"
					className="form--input"
					placeholder="Bottom text"
					type="text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<span className="meme">
					<img
						className="meme--image"
						src={meme.randomImage}
						alt="random meme image"
					/>
					<h2 className="meme-text top">{meme.topText}</h2>
					<h2 className="meme-text bottom">{meme.bottomText}</h2>
				</span>
				<button className="form--button" type="submit" onClick={getMemeImage}>
					Create Meme &#128171;
				</button>
			</div>
		</main>
	);
}
