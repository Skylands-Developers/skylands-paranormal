import type { LinksFunction } from "@remix-run/node";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: pageStyle }];
};

export default function ExperimentalTechniques() {
	return (
		<div className="page experimental-techniques">
			<section>
				<h1 id="experimental-techniques">Experimental Techniques</h1>
			</section>
			<section>
				<h3 id="evp-session">EVP Session</h3>
				<p>
					The quintessential tried and true method for paranormal
					research and investigating. Electronic Voice Phenomena (EVP)
					is yet fully understood, but the idea is that sounds that
					are unheard at the time, can be recorded via audio tape,
					carried along radio frequencies, or captured on other
					electronic media. The fascinating aspect is that voices or
					sounds sometimes respond directly to questions asked during
					experimental sessions, leading to the classification of
					Intelligent Haunts. Most EVPs consist of single words. Rare
					and rarer still are phrases or complete sentences. More
					common sounds that are not voices are grunts or groans, and
					sometimes more fearful, growls. The quality of sounds
					recorded varies quite a bit. You may only get whispers or
					broken speech, other times it may be too loud or distorted
					to make out what is being said. Do your best in review to
					distinguish these noises, and be wary of noises that can
					naturally be explained away, such as team members or known
					animals.
				</p>
			</section>
			<section>
				<h3 id="call-and-response">Call & Response</h3>
				<p>
					This technique is typically for when no audio responses are
					being captured. You can politely ask spirits "for a sign" of
					their presence. Ask to repeat a distinct series of knocks,
					and knock out the series on a wall or rocks. You can also
					use one knock for responses meaning "Yes", and two knocks
					for "No" responses.
				</p>
			</section>
			<section>
				<h3 id="estes-method">The Estes Method</h3>
				<p>
					This relatively recent technique was established in
					Colorado, named after Estes Park in Colorado at the Stanley
					Hotel by{" "}
					<a href="https://www.karlpfeiffer.com/spirits-of-the-stanley">
						Karl Pfeiffer, Connor J. Randall, and Michelle Tate
					</a>
					. The gist is to use a device that sweeps radio frequencies,
					namely a SB7 or SB11 "Spirit Box", along with two to three
					investigators.
				</p>
				<p>
					One investigator will act as an Receiver while holding the
					Spirit Box. The Receiver should deprive themselves from
					non-audible sensory inputs, only relying on a direct audio
					sensation. It is best to use a tight (but comfortable)
					blindfold, and over-ear (20dB noise-cancelling) headphones.
					Allowing other senses will typically leave the investigator
					unable to focus on the audible sweeps. The Receiver should
					repeat any heard voices or noises. Try to repeat as soon as
					possible without interpreting too much. Being the Receiver
					may take some getting used to!
				</p>
				<p>
					Other investigators nearby, called Operators, will conduct a
					standard EVP session while being quiet enough as to not lead
					the isolated Receiver. Usually Operators are sat behind the
					Receiver. If the Receiver responds in an unrelated way to
					the Operators questions, do not change subjects. Discount
					any initial nonsense, and stick to the script.
				</p>
			</section>
			<section>
				<h3 id="mirrors">A Psychomanteum</h3>
				<p>
					Similar to Scrying, this occult-fashioned experiment only
					requires a mirror. One or two investigations should sit
					opposite a mirror, a few feet away. Typically, the mirror
					will be set at 45 degrees from a standing or resting
					position - the important part is to not see your own face in
					the reflection. Commonly used alongside this is a lit candle
					placed offset of the mirror or behind.
				</p>
				<p>
					After a short while,{" "}
					<a href="https://en.wikipedia.org/wiki/Pareidolia">
						pareidolia
					</a>{" "}
					may occur, showing visions or other ocular sensations. These
					can be interpreted however, but should generally be taken at
					face value. If more than one investigator is present during
					the experiment, remain quiet until the experiment is
					concluded. Only share experiences at the end in order to
					confer and compare, while not manipulating viewpoints or
					reactions. This experiment usually should not exceed 15
					minutes. If any ill feelings occur, stop immediately and
					relocate.
				</p>
			</section>
			<section>
				<h3 id="meditation">Meditation</h3>
				<p>
					This technique is more of a passive one. Team members should
					sit across from one another, or in a circle. Designate a
					leader of the session who will speak calmly to guide
					everyone into a state of meditation. Members can optionally
					hold their own or each others hands, so long as everyone is
					comfortable. Start by guiding everyone's breathing, in and
					out, slowing it down by each breath. Clear away any thoughts
					and focus on the feelings in your hands. Keep the breathing
					slow and relaxed. Begin to think about positive intentions.
					The leader should calmly speak and invite potential spirits
					to give a sign of their presence. Signs may come in
					different forms, whether temperature or other sensations.
					Ask your team to acknowledge what they are feeling or if
					they notice something, to speak out. After ten (10) minutes
					or so, the leader can end the experiment. If at any time
					someone feels ill, stop the experiment and relocate them.
				</p>
			</section>
			<section style={{ width: "100%" }}>
				<h3 id="reenactments">Reenactments</h3>
				<p>Work In Progress</p>
			</section>
			<section style={{ width: "100%" }}>
				<h3 id="trigger-objects">Trigger Objects</h3>
				<p>Work In Progress</p>
			</section>
		</div>
	);
}
