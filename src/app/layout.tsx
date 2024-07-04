import type { Metadata } from 'next';
import { Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
	title: 'Luca Raveri',
	description: 'Luca Raveri portfolio website'
};

const atkinson = Atkinson_Hyperlegible({
	weight: ['700'],
	style: ['normal'],
	subsets: ['latin']
});

export default function RootLayout({
									   children
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={atkinson.className}>
		<div className="min-h-screen flex flex-col items-center bg-white">
			<Navbar></Navbar>
			<main className="flex-grow">{children}</main>
			<Footer></Footer>
		</div>
		</body>
		</html>
	);
}
