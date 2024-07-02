'use server';
import Link from 'next/link';
import NavButton from '@/components/navbar/NavButton';
import Image from 'next/image';
import MobileMenuToggle from '@/components/navbar/MobileMenuToggle';

export default async function Navbar() {
	return (
		<nav className="w-full bg-white text-white py-4 relative">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<Link href={'/'}>
						<Image
							src="/profile.png"
							alt="Logo"
							width={40}
							height={40}
							className="w-10 h-10 rounded-full bg-white border-2 border-aqua mr-4 ml-4 sm:ml-0"
						/>
					</Link>
					<Link href={'/'}>
						<h1 className="text-teal text-xl font-extrabold">Luca Raveri</h1>
					</Link>
				</div>
				<div className="hidden md:flex flex-grow justify-center">
					<div className="flex items-center space-x-4">
						<NavButton href="/blog" label="Blog" />
						<NavButton href="/projects" label="Projects" />
						<NavButton href="/experience" label="Experience" />
						<NavButton href="/about" label="About" />
					</div>
				</div>
				<div className="hidden md:block">
					<a
						href="/luca_raveri_cv.pdf"
						download
						className="bg-teal text-white py-2 px-4 rounded-full border-2 border-teal hover:bg-lightgray hover:text-teal"
					>
						Download CV
					</a>
				</div>
				<div className="md:hidden">
					<MobileMenuToggle />
				</div>
			</div>
		</nav>
	);
}
