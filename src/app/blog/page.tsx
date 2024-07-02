import ArticleCard from '@/components/cards/ArticleCard';

const Blog = () => {
	const articles = [
		{
			id: 1,
			imageSrc: '/images/article_1.webp',
			title: 'How to deal with CPU intensive tasks in Node.js',
			href: 'https://medium.com/@lucaraveri993'
		},
		{
			id: 2,
			imageSrc: '/images/article_2.webp',
			title: 'How to build an OpenAI Assistant with Javascript',
			href: 'https://medium.com/@lucaraveri993'
		},
		{
			id: 3,
			imageSrc: '/images/article_3.webp',
			title: 'How to deploy a Node.js API with AWS Lambda',
			href: 'https://medium.com/@lucaraveri993'
		},
		{
			id: 4,
			imageSrc: '/images/article_4.webp',
			title: 'Deploy a Java Spring Boot Application with Docker and AWS',
			href: 'https://medium.com/@lucaraveri993/deploying-a-simple-java-spring-boot-application-with-docker-and-aws-ec2-a-detailed-step-by-step-4a7801ad7674'
		}
	];

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-6 text-center sm:py-4">Articles</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{articles.map(article => (
					<ArticleCard
						key={article.id}
						imageSrc={article.imageSrc}
						title={article.title}
						href={article.href}
					/>
				))}
			</div>
		</div>
		// <div className="container mx-auto py-8">
		// 	<h1 className="text-3xl font-bold mb-6 text-center sm:py-4">Keynotes</h1>
		// 	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		// 		{articles.map(article => (
		// 			<ArticleCard
		// 				key={article.id}
		// 				imageSrc={article.imageSrc}
		// 				title={article.title}
		// 				href={article.href}
		// 			/>
		// 		))}
		// 	</div>
		// </div>;
	);
};

export default Blog;