import type { Metadata } from 'next';
import { Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Script from 'next/script';

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
		<script
			dangerouslySetInnerHTML={{
				__html: `
              (function() {
                if (window.innerWidth > 1024) {
                  var script = document.createElement('script');
                  script.src = "https://cdn.jsdelivr.net/gh/lraveri/gpt-delivr@v0.1.1/packages/widget/dist/bundle.js";
                  script.onload = function() {
                    initializeChat({
                      baseURL: "https://monorepo-lerna-khaki.vercel.app",
                      baseColor: "#255957",
                      assistantId: "asst_7A5Fy0UskQKTVtOWFLOGwd3B",
                      initialMessage: "Ciao, sono l'assistente di Luca Raveri, come posso aiutarti?",
                      module: "luca",
                    });
                  };
                  document.head.appendChild(script);
                }
              })();
            `
			}}
		/>
		</body>
		</html>
	);
}
