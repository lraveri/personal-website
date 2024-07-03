import ProjectCard from '@/components/cards/ProjectCard';
import Header from '@/components/Header';
import { getOpenSourceProjects, getProjects } from '@/lib/service';

const Projects = async () => {
	const projects = await getProjects();
	const openSource = await getOpenSourceProjects();

	return (
		<>
			<div className="container mx-auto py-8">
				<Header title={'Creative Projects'} />
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
				<Header title={'Open Source'} />
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