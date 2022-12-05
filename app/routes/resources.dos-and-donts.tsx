import type { LinksFunction } from "@remix-run/node";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function DosAndDonts() {
	return (
		<div className="page dos-and-donts">
			<section>
				<h1 id="the-dos-and-donts">The Do's & Don'ts</h1>
				<h3>Do:</h3>
				<ul>
					<li>
						Be respectful to potential spirits and other
						participants
					</li>
					<li>
						Know the location you are going to before you get there
					</li>
					<li>
						Have at least one other person with you at all times,
						especially in the dark
					</li>
					<li>
						Understand the equipment you are responsible for before
						use
					</li>
					<li>
						Be prepared with extra power supplies, snacks, and first
						aid kits
					</li>
					<li>
						Note down location, time, and participants at the
						beginning of recording session
					</li>
					<li>
						Try to debunk possible evidence like noises and moved
						objects
					</li>
					<li>Keep an open mind, but be rational</li>
					<li>Share personal experiences after a brief moment</li>
					<li>Act professional throughout an investigation</li>
					<li>
						Be conscious of the noises and smells you make; step
						away if necessary
					</li>
					<li>
						Help your team members with setup tasks or experiments
					</li>
					<li>
						Be thankful to potential spirits and site personnel at
						all times
					</li>
				</ul>
				<h3>Don't:</h3>
				<ul>
					<li>
						Expect anything paranormal to happen; some locations (or
						objects) are less active than others.
					</li>
					<li>
						Blindly navigate around in the dark without a flashlight
						or illumination device; safety first!
					</li>
					<li>
						Whisper during EVP sessions; most EVPs are quiet enough
						already.
					</li>
					<li>
						Trespass where you should not belong; get permission!
					</li>
					<li>
						Keep your feelings to yourself; if you feel ill in any
						way, let your team know and relocate.
					</li>
					<li>
						Antagonize, provoke, or instigate spirits; we don't
						fully understand the dangerous sides of the phenomena!
					</li>
					<li>
						Invite potential entities to follow you to different
						spots or even home with you.
					</li>
					<li>
						Offer layman's help to or usher spirits that may be in
						need; save that for the professionals.
					</li>
					<li>
						Immediately discuss evidence with clients. Take the time
						to review and evaluate before reconvening.
					</li>
				</ul>
			</section>
		</div>
	);
}
