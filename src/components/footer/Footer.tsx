import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
	return (
		<footer className="bg-custom-dark-gray text-gray-400 py-8">
			<div className="container mx-auto flex flex-col items-center">
				<div className="flex space-x-6 mb-4 text-gray-400">
					{/*<a href="tel:+393485690537" aria-label="Phone" className="text-gray-400">*/}
					{/*	<FontAwesomeIcon icon={faPhone} className="text-xl" />*/}
					{/*</a>*/}
					<a href="https://github.com/lraveri" target="_blank" aria-label="GitHub" className="text-gray-400">
						<FontAwesomeIcon icon={faGithub} className="text-xl" />
					</a>
					<a href="https://www.linkedin.com/in/lucaraveri" target="_blank" aria-label="LinkedIn"
					   className="text-gray-400">
						<FontAwesomeIcon icon={faLinkedin} className="text-xl" />
					</a>
					<a href="mailto:info@lucaraveri.com" aria-label="Email" className="text-gray-400">
						<FontAwesomeIcon icon={faEnvelope} className="text-xl" />
					</a>
				</div>
				<div className="text-gray-400">
					Made with Next.js and hosted on Vercel
				</div>
			</div>
		</footer>
	);
}
