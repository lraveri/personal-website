import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
	imageSrc: string;
	title: string;
	href: string;
}

export default function ArticleCard({ imageSrc, title, href }: CardProps) {
	return (
		<Link
			href={href}
			className="block bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 mx-8 sm:mx-0"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
				src={imageSrc}
				alt={title}
				width={400}
				height={250}
				className="w-full h-56 object-cover"
				priority={true}
			/>
			<div className="p-4">
				<h2 className="text-xl font-bold text-gray-800">{title}</h2>
			</div>
		</Link>
	);
};
