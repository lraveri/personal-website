'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavButtonProps {
	href: string;
	label: string;
}

export default function NavButton({ href, label }: Readonly<NavButtonProps>) {
	const pathname = usePathname();

	const linkClasses = (path: string) =>
		`px-4 py-2 rounded-full text-xl font-medium ${
			pathname === path
				? 'text-white bg-gray-700'
				: 'text-white hover:bg-gray-700 hover:text-white'
		}`;

	return (
		<Link href={href} className={linkClasses(href)}>
			{label}
		</Link>
	);
}
