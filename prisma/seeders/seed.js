const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	const projects = [
		{
			imageSrc: '/images/project_1.webp',
			title: 'Personal Website',
			href: 'https://www.lucaraveri.com/',
			description: 'My personal website, built with Next.js and Tailwind CSS. Hosted on Vercel.',
			order: 1
		},
		{
			imageSrc: '/images/project_2.webp',
			title: 'Yuung',
			href: 'https://yuung.cloud',
			description: 'Startup project to assist psycologist in their daily work. Built with Next.js and Supabase.',
			order: 2
		},
		{
			imageSrc: '/images/project_3.webp',
			title: 'CodeGym',
			href: 'https://codegymonline.com',
			description: 'Personal project that aim to use GenAI in order to help developer preparing for job interviews.',
			order: 3
		}
	];

	const openSource = [
		{
			imageSrc: '/images/open_source_1.webp',
			title: 'PHP GeoJSON Converter',
			href: 'https://github.com/lraveri/geojson-converter',
			description: 'A simple PHP library to convert GeoJSON files to other formats, such as GPX and KML.',
			order: 1
		}
	];

	const articles = [
		{
			imageSrc: '/images/article_1.webp',
			title: 'How to deal with CPU intensive tasks in Node.js',
			href: 'https://medium.com/@lucaraveri993',
			order: 1
		},
		{
			imageSrc: '/images/article_2.webp',
			title: 'How to build an OpenAI Assistant with Javascript',
			href: 'https://medium.com/@lucaraveri993',
			order: 2
		},
		{
			imageSrc: '/images/article_3.webp',
			title: 'How to deploy a Node.js API with AWS Lambda',
			href: 'https://medium.com/@lucaraveri993',
			order: 3
		},
		{
			imageSrc: '/images/article_4.webp',
			title: 'Deploy a Java Spring Boot Application with Docker and AWS',
			href: 'https://medium.com/@lucaraveri993/deploying-a-simple-java-spring-boot-application-with-docker-and-aws-ec2-a-detailed-step-by-step-4a7801ad7674',
			order: 4
		}
	];

	await prisma.project.createMany({ data: projects });
	await prisma.openSource.createMany({ data: openSource });
	await prisma.article.createMany({ data: articles });

	console.log('Data seeded successfully');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
