import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white text-center -mt-12 sm:-mt-0">
			<div className="relative rounded-full mb-4 h-[200px] w-[200px] sm:w-[300px] md:h-[300px]">
				<Image
					src="/profile.webp"
					alt="Luca Raveri"
					width={300}
					height={300}
					className="rounded-full"
					priority={true}
				/>
				<div className="border-2 border-aqua absolute inset-0 rounded-full"></div>
			</div>
			<h1 className="text-4xl font-bold text-aqua mb-2">Luca Raveri</h1>
			<h2 className="text-2xl font-semibold text-gray-400 mb-4">Software Engineer</h2>
			<p className="text-lg text-gray-400 mb-6 px-4 sm:px-0">
				I&apos;m a passionate technology enthusiast with an engineering background.
				<br />
				Let&apos;s connect! 🚀
			</p>
			<a
				href="/luca_raveri_cv.pdf"
				download
				className="sm:hidden bg-teal text-white py-2 px-4 rounded-full border-2 border-teal hover:bg-lightgray hover:text-teal"
			>
				Download CV
			</a>
		</div>
	);
}
