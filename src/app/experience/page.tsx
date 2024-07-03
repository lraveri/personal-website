import React from 'react';
import Header from '@/components/Header';

const Experience = () => {
	return (
		<div className="container mx-auto py-8">
			<Header title={'Experience'} />
			<div className="flex justify-center sm:px-0 px-4 mb-12">
				<div className="bg-white shadow-2xl rounded-lg p-6 w-full sm:w-2/3 lg:w-1/2">
					<h3 className="text-2xl font-semibold text-aqua">JAKALA H-Farm, Italy</h3>
					<p className="text-lg font-medium text-gray-600">Software Engineer</p>
					<p className="text-gray-500 mb-4">Feb 2023 - Present</p>
					<p className="text-gray-600"><span className="font-semibold text-aqua">Java Spring Back-end Developer:</span> Developed
						RESTful web
						services, ensuring high quality through testing and documentation.
					</p>
					<p className="font-semibold text-aqua mt-2">Key Achievements:</p>
					<ul className="list-disc list-inside ml-4 mt-2 space-y-1 mb-4">
						<li className="text-gray-600">Achieved up to 75% improvement in service performance by
							implementing parallel
							programming techniques for heavy computation tasks involving external ML APIs.
						</li>
						<li className="text-gray-600">Increased code coverage to 80% by developing unit tests and
							integration tests.
						</li>
						<li className="text-gray-600">Implemented a monitoring system using Splunk for log analysis,
							creating a dashboard
							that significantly improved the ability to identify and fix bugs.
						</li>
					</ul>
					<p className="text-gray-600">
						<span className="font-semibold text-aqua">PHP Laravel Full-stack Developer:</span> Worked on
						various
						projects, gaining expertise in the Laravel framework and front-end development. Acquired
						skills in server maintenance with AWS, Docker and CI/CD pipelines.
					</p>
					<p className="font-semibold text-aqua mt-2">Key Achievements:</p>
					<ul className="list-disc list-inside ml-4 mt-2 space-y-1">
						<li className="text-gray-600">Participated in an R&D project to develop a scalable Laravel
							application using an
							event driven architecture. The application was designed to be multitenant and
							multimodule.
						</li>
						<li className="text-gray-600">Implemented a monitoring system using AWS Cloudwatch logs and AWS
							Insight queries.
						</li>
						<li className="text-gray-600">Developed integrations between various systems, interacting with
							REST, GraphQL, and
							SOAP APIs.
						</li>
					</ul>
				</div>
			</div>

			<Header title={'Education'} />
			<div className="flex justify-center sm:px-0 px-4 mt-8">
				<div className="bg-white shadow-2xl rounded-lg p-6 w-full sm:w-2/3 lg:w-1/2">
					<div className="mb-4">
						<h3 className="text-2xl font-semibold text-aqua">H-Farm Business School, Italy</h3>
						<p className="text-lg font-medium text-gray-600">Executive Course in Emerging Technologies in
							Business</p>
						<p className="text-gray-500">May 2024</p>
					</div>
					<div className="mb-4">
						<h3 className="text-2xl font-semibold text-aqua">University of Trieste, Italy</h3>
						<p className="text-lg font-medium text-gray-600">Master’s Degree in Computer Engineering</p>
						<p className="text-gray-500">May 2023</p>
					</div>
					<div className="mb-4">
						<h3 className="text-2xl font-semibold text-aqua">University of Padua, Italy</h3>
						<p className="text-lg font-medium text-gray-600">Bachelor’s Degree in Computer Engineering</p>
						<p className="text-gray-500">Sep 2019</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
