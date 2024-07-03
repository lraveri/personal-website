import prisma from '@/lib/client/prisma';
import { Article, OpenSource, Project } from '@prisma/client';

export async function getProjects(): Promise<Project[]> {
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

export async function getOpenSourceProjects(): Promise<OpenSource[]> {
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

export async function getArticles(): Promise<Article[]> {
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