import { useState } from "react";

type CaseImage = {
	src: string;
	alt: string;
	description: string;
};
type CaseLocation = {
	site: string;
	town: string;
	state: string; //or province
	country?: string;
};
type CaseProps = {
	year: number;
	location: CaseLocation;
	images: CaseImage[];
	videos?: string[];
};

export function ACase(props: CaseProps): JSX.Element {
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
							<p>
								<i>{image.description}</i>
							</p>
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
				{props.videos &&
					props.videos.length > 0 &&
					props.videos.map((url) => (
						<div key={url}>
							<iframe
								lang="en"
								height="100%"
								width="100%"
								src={url}
								title={url}
							/>
						</div>
					))}
			</section>
		</>
	);
}
