import ProjectCard from '@/components/cards/ProjectCard';

const Projects = () => {
	const projects = [
		{
			id: 1,
			imageSrc: '/images/project_1.webp',
			title: 'Personal Website',
			href: 'https://www.lucaraveri.com/',
			description: 'My personal website, built with Next.js and Tailwind CSS. Hosted on Vercel.'
		},
		{
			id: 2,
			imageSrc: '/images/project_2.webp',
			title: 'Yuung',
			href: 'https://yuung.cloud',
			description: 'Startup project to assist psycologist in their daily work. Built with Next.js and Supabase.'
		},
		{
			id: 3,
			imageSrc: '/images/project_3.webp',
			title: 'CodeGym',
			href: 'https://codegymonline.com',
			description: 'Personal project that aim to use GenAI in order to help developer preparing for job interviews.'
		}
	];

	const openSource = [
		{
			id: 1,
			imageSrc: '/images/open_source_1.webp',
			title: 'PHP GeoJSON Converter',
			href: 'https://github.com/lraveri/geojson-converter',
			description: 'A simple PHP library to convert GeoJSON files to other formats, such as GPX and KML.'
		}
	];

	return (
		<>
			<div className="container mx-auto py-8">
				<h1 className="text-3xl font-bold mb-6 text-center sm:py-4">Creative Projects</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{projects.map(project => (
						<ProjectCard
							key={project.id}
							imageSrc={project.imageSrc}
							title={project.title}
							href={project.href}
							description={project.description}
						/>
					))}
				</div>
			</div>
			<div className="container mx-auto">
				<h1 className="text-3xl font-bold mb-6 text-center sm:py-4">Open Source</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{openSource.map(project => (
						<ProjectCard
							key={project.id}
							imageSrc={project.imageSrc}
							title={project.title}
							href={project.href}
							description={project.description}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;