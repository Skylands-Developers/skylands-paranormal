import { useState } from "react";
import type { CaseProps } from "./types";

export function CaseView(props: CaseProps): JSX.Element {
	const { location, year } = props;
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [currentImage, setCurrentImage] = useState<string>();
	const id = year.toString() + "_" + location.site;
	const locationString =
		location.site +
		", " +
		location.town +
		", " +
		location.state +
		", " +
		(location.country ?? "USA");

	const handleFullscreen = (current?: string) => {
		if (current !== undefined) {
			if (current !== currentImage) {
				setCurrentImage(current);
			}
			if (!isFullscreen) setIsFullscreen(true);
		} else {
			setIsFullscreen(false);
		}
	};

	return (
		<>
			<h1 id={id}>{year}</h1>
			<h2>{locationString}</h2>
			{props.underReview === true ? (
				<>
					<h2>Pending Evidence Review</h2>
					<br />
				</>
			) : (
				<></>
			)}
			<section className="investigations gallery">
				{props.images.map((image) => {
					const imageElement = (
						<img
							src={image.src}
							alt={image.alt}
							title={image.description}
							onClick={() => handleFullscreen(image.alt)}
						/>
					);
					const isActive = isFullscreen && currentImage == image.alt;
					return (
						<div key={image.alt}>
							{imageElement}
							<p>{image.description}</p>
							<dialog
								className={
									isActive ? "dialog active" : "dialog"
								}
								open={isActive}
								onClick={() => handleFullscreen()}
							>
								{imageElement}
							</dialog>
						</div>
					);
				})}
			</section>

			<section className="investigations gallery">
				{props.audios &&
					props.audios.length > 0 &&
					props.audios.map(({ description, src }) => (
						<div key={description} className="audio">
							<audio controls>
								<source src={src} type="audio/mpeg" />
							</audio>
							<br />
							<br />
							<span>{description}</span>
						</div>
					))}
			</section>

			<section className="investigations gallery">
				{props.videos &&
					props.videos.length > 0 &&
					props.videos.map((url) => (
						<div key={url} className="video">
							<iframe
								key={"iframe_" + url}
								src={url}
								title={url}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					))}
			</section>
		</>
	);
}
