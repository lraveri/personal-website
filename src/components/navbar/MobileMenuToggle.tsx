'use client';
import { useState, useEffect, useRef } from 'react';
import NavButton from '@/components/navbar/NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const MobileMenuToggle = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsMobileMenuOpen(false);
		}
	};

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			<button onClick={toggleMobileMenu} className="text-teal focus:outline-none mr-6 mt-2 text-2xl">
				<FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
			</button>
			{isMobileMenuOpen && (
				<div ref={menuRef} className="absolute top-full left-0 w-full bg-white z-50 shadow-lg">
					<div className="flex flex-col items-center space-y-4 mt-4 mb-4">
						<NavButton href="/blog" label="Blog" />
						<NavButton href="/projects" label="Projects" />
						<NavButton href="/experience" label="Experience" />
						<NavButton href="/about" label="About" />
					</div>
				</div>
			)}
		</>
	);
};

export default MobileMenuToggle;
