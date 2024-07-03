import prisma from '@/lib/client/prisma';

export async function getProjects() {
	return prisma.project.findMany({
		where: {
			isPinned: false,
			isPublished: true
		},
		orderBy: {
			order: 'asc'
		}
	});
}

export async function getOpenSourceProjects() {
	return prisma.openSource.findMany({
		where: {
			isPinned: false,
			isPublished: true
		},
		orderBy: {
			order: 'asc'
		}
	});
}

export async function getArticles() {
	return prisma.article.findMany({
		where: {
			isPinned: false,
			isPublished: true
		},
		orderBy: {
			order: 'asc'
		}
	});
}