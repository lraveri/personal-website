'use client';
import { useState } from 'react';
import NavButton from '@/components/navbar/NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const MobileMenuToggle = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<button onClick={toggleMobileMenu} className="text-teal focus:outline-none mr-6 mt-2 text-2xl">
				<FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
			</button>
			{isMobileMenuOpen && (
				<div className="absolute top-full left-0 w-full bg-white z-50 shadow-lg">
					<div className="flex flex-col items-center space-y-4 mt-4 mb-4">
						<NavButton href="/blog" label="Blog" />
						<NavButton href="/projects" label="Projects" />
						<NavButton href="/experience" label="Experience" />
						<NavButton href="/about" label="About" />
						{/*<a*/}
						{/*	href="/luca_raveri_cv.pdf"*/}
						{/*	download*/}
						{/*	className="bg-teal text-white py-2 px-4 rounded-full border-2 border-teal hover:bg-lightgray hover:text-teal"*/}
						{/*>*/}
						{/*	Download CV*/}
						{/*</a>*/}
					</div>
				</div>
			)}
		</>
	);
};

export default MobileMenuToggle;
