import { useEffect, useState } from "react";

export function MemeComponent() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemes, setAllMemes] = useState([]);

	useEffect(() => {
		async function getMemes() {
			const res = await fetch("https://api.imgflip.com/get_memes");
			const data = await res.json();
			setAllMemes(data.data.memes);
		}
		getMemes();
	}, []);

	console.log(allMemes);

	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomNumber].url;
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
	<div className="input-group">
		<label htmlFor="top-text">Top text:</label>
		<input
			id="top-text"
			className="input"
			placeholder="Top text"
			type="text"
			name="topText"
			value={meme.topText}
			onChange={handleChange}
		/>
	</div>
	<div className="input-group">
		<label htmlFor="bottom-text">Bottom text:</label>
		<input
			id="bottom-text"
			className="input"
			placeholder="Bottom text"
			type="text"
			name="bottomText"
			value={meme.bottomText}
			onChange={handleChange}
		/>
	</div>
	<button className="form--button" type="submit" onClick={getMemeImage}>
		Create Meme &#128171;
	</button>
	<div className="meme">
		<img className="meme--image" src={meme.randomImage} alt="random meme image" />
		<h2 className="meme--text top">{meme.topText}</h2>
		<h2 className="meme--text bottom">{meme.bottomText}</h2>
	</div>
</div>
		</main>
	);
}
