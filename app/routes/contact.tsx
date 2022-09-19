import type { LinksFunction } from "@remix-run/node";
import type { FormEvent } from "react";
import { useState } from "react";
import formStyle from "../styles/form.css";
import pageStyle from "../styles/page.css";

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: pageStyle },
		{ rel: "stylesheet", href: formStyle },
	];
};
export default function Contact() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const payload = JSON.stringify({ name, email, message }, null, 2);
		console.log("submit: ", payload);

		fetch("mailto:evjero.git@gmail.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: payload,
		})
			.then((res) => {
				console.log("res: ", JSON.stringify(res.json()));
			})
			.catch((rej) => {
				alert(
					"Message failed to send, please try again, or email us directly at skylandsparanormal@gmail.com"
				);
				console.error("Message failed to send", {
					payload,
					reason: rej,
				});
			});
	};

	return (
		<div className="page contact">
			<a href="mailto:evjero.git@gmail.com?cc=evjero.git@gmail.com&subject=Skylands%20Paranormal%20Contact%3A%20First%20Last&body=message%20body%20here">
				Link text
			</a>
			<h1>Contact Us</h1>
			<hr />
			<section>
				<p>
					We will try to send responses in a timely manner, but please
					call your local law enforcement for emergency situations!
				</p>
			</section>
			<section>
				<form id="contact-form">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						required
						placeholder="First Last"
						value={name}
						onChange={(e) => setName(e.currentTarget.value)}
					/>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						required
						placeholder="youremail@example.com"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
					/>
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						required
						rows={5}
						value={message}
						onChange={(e) => setMessage(e.currentTarget.value)}
					/>
					<button onClick={handleSubmit}>Submit</button>
				</form>
			</section>
		</div>
	);
}
