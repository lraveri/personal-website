import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
			<div className="relative rounded-full mb-4">
				<Image
					src="/profile.png"
					alt="Luca Raveri"
					width={300}
					height={300}
					className="rounded-full"
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
		</div>
	);
}
