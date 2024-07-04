import Header from '@/components/Header';

export default function About() {
	return (
		<div className="container mx-auto py-8">
			<Header title={'About Me'} />
			<div className="flex justify-center sm:px-0 px-4 mb-12">
				<div className="bg-white shadow-2xl rounded-lg p-6 w-full sm:w-2/3 lg:w-1/2">
					<h3 className="text-2xl font-semibold text-aqua mb-2">Hi 👋 I&apos;m Luca</h3>
					{/*<p className="text-lg font-medium text-gray-600">Software Engineer</p>*/}
					<p className="text-gray-600 mb-4">
						I am a passionate technology enthusiast with an engineering background. I have been working in
						the software industry for several years, specializing in back-end and full-stack development. I
						am always eager to learn and adopt new technologies to improve my skills and deliver
						high-quality software solutions.
					</p>
					<p className="text-gray-600 mb-4">
						My journey in technology started at a young age, and since then, I have been constantly
						exploring new areas in the field of software development. From developing small applications to
						working on large-scale projects, I have gained valuable experience and a deep understanding of
						various programming languages and frameworks.
					</p>
					<p className="text-gray-600 mb-4">
						In my spare time, I enjoy contributing to open-source projects, participating in hackathons, and
						reading about the latest trends in technology. I believe in continuous learning and strive to
						keep myself updated with the ever-evolving tech landscape.
					</p>
				</div>
			</div>

			<Header title={'Skills'} />
			<div className="flex justify-center sm:px-0 px-4 mt-8">
				<div className="bg-white shadow-2xl rounded-lg p-6 w-full sm:w-2/3 lg:w-1/2">
					<div className="mb-4">
						<h3 className="text-xl font-semibold text-aqua">Programming Languages</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li className="text-gray-600">JavaScript</li>
							<li className="text-gray-600">Java</li>
							<li className="text-gray-600">PHP</li>
						</ul>
					</div>
					<div className="mb-4">
						<h3 className="text-xl font-semibold text-aqua">Frameworks and Libraries</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li className="text-gray-600">Spring Boot</li>
							<li className="text-gray-600">Laravel</li>
							<li className="text-gray-600">React</li>
							<li className="text-gray-600">Next.js</li>
						</ul>
					</div>
					<div className="mb-4">
						<h3 className="text-xl font-semibold text-aqua">Technologies</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li className="text-gray-600">AWS</li>
							<li className="text-gray-600">Docker</li>
							<li className="text-gray-600">CI/CD Pipelines</li>
							<li className="text-gray-600">Node.js</li>
							<li className="text-gray-600">Terraform</li>
							<li className="text-gray-600">SQL</li>
							<li className="text-gray-600">Git</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
