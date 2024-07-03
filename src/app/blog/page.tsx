import ArticleCard from '@/components/cards/ArticleCard';
import Header from '@/components/Header';
import { getArticles } from '@/lib/service';
import { Article } from '@prisma/client';

const Blog = async () => {
	const articles: Article[] = await getArticles();

	return (
		<div className="container mx-auto py-8">
			<Header title={'Articles'} />
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