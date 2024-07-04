import Header from '@/components/Header';

export default function About() {
	return (
		<div className="container mx-auto py-8">
			<Header title={'About Me'} />
			<div className="flex justify-center sm:px-0 px-4 mb-12">
				<div className="bg-white shadow-2xl rounded-lg p-6 w-full sm:w-2/3 lg:w-1/2">
					<h3 className="text-2xl font-semibold text-aqua mb-2">Hi 👋 I&apos;m Luca</h3>
					<p className="text-gray-600 mb-4">
						I’m a passionate technology enthusiast with an engineering mindset and an insatiable curiosity
						for learning. My journey into the world of tech started at a young age, driven by a
						fascination with how things work and a desire to build and create.
					</p>
					<p className="text-gray-600 mb-4">
						My passion grew during my academic career, which led me to earn a Master&apos;s Degree
						in Computer Engineering.
						This journey provided me with a deep technical perspective and helped me develop strong
						problem-solving skills.
					</p>
					<p className="text-gray-600 mb-4">
						My professional adventure started at Jakala, where I quickly found my passion for back-end
						development. The technical challenge of building efficient, scalable systems for real-world
						applications immediately fascinated me. Each project was a new puzzle, a fresh opportunity to
						study and learn new technologies.
					</p>
					<p className="text-gray-600 mb-4">
						H-Farm has been a pivotal chapter in my career, opening doors to exciting events, hackathons,
						and extra university courses. Here, I&apos;ve explored the latest technologies, with a
						particular focus on Generative AI.
						These experiences have not only expanded my technical knowledge but also allowed me to connect
						with a community of other tech lovers.
					</p>
					<p className="text-gray-600 mb-4">
						Lately, I&apos;ve been diving into the world of JavaScript and Node.js. I have become deeply
						passionate about the entire JavaScript ecosystem, which has been a great source of inspiration.
						I&apos;m constantly exploring new frameworks, tools, and technologies to stay ahead in this
						fast-evolving world. 🚀
					</p>
					{/*<p className="text-gray-600 mb-4">*/}
					{/*	When I&apos;m not coding, you can find me contributing to open-source projects, attending tech*/}
					{/*	meetups, or engrossed in the latest tech reads. I believe in the power of continuous learning*/}
					{/*	and am always on the lookout for the next big thing in technology. Let&apos;s connect and*/}
					{/*	explore the*/}
					{/*	future of tech together!*/}
					{/*</p>*/}
				</div>
			</div>


			<Header title={'Skills'} />
			<div className="flex justify-center sm:px-0 px-4 mt-8">
				<div className="bg-white shadow-2xl rounded-lg p-6 w-full sm:w-2/3 lg:w-1/2">
					<div className="mb-4">
						<h3 className="text-xl font-semibold text-aqua">Programming Languages</h3>
						<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
							<li className="text-gray-600">Java</li>
							<li className="text-gray-600">PHP</li>
							<li className="text-gray-600">JavaScript</li>
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
