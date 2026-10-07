import SmoothScrolling from '@/components/dom/SmoothScroll';
import localFont from 'next/font/local';

// type
import type { Metadata, Viewport } from 'next';

import './globals.css';

const boxing = localFont({ src: '../../public/font/Boxing-Regular.woff', variable: '--font-boxing' });
const satoshi = localFont({ src: '../../public/font/Satoshi-Bold.woff', variable: '--font-satoshi' });
const fonts = `${boxing.variable} ${satoshi.variable}`;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

export const viewport: Viewport = {
	themeColor: '#0f1017',
	colorScheme: 'dark',
};

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: 'Arv | Creative Developer & Design Engineer',
	creator: 'Arv',
	generator: 'Next.js',
	referrer: 'origin-when-cross-origin',
	description:
		'Proficient in modern web development, with expertise in TypeScript/JavaScript (ES6), React, and Angular. Skilled at implementing dynamic user interfaces using Three.js, GLSL, and GSAP. Experienced in back-end development with Node.js, Express, and MongoDB. Knowledgeable in DevOps practices, including Docker, AWS (S3, Route 53, CloudFront), and CI/CD pipelines using GitHub Actions.',
	keywords: [
		'Frontend',
		'Backend',
		'TypeScript (JavaScript)',
		'HTML',
		'CSS/Sass',
		'Next.js',
		'React',
		'React Router',
		'React Redux',
		'Angular',
		'Angular Universal',
		'Webpack',
		'Zustand',
		'RxJS',
		'Karma/Jasmine',
		'Tailwind CSS',
		'Bootstrap',
		'Material UI',
		'PrimeNg',
		'Three.js',
		'WebGL',
		'GLSL',
		'GSAP',
		'Node.js',
		'Express',
		'Mongoose',
		'MongoDB',
		'RESTful API',
		'Git (Sourcetree)',
		'GitLab',
		'GitHub Actions',
		'Google Search Console',
		'Google Analytics',
		'Figma',
		'Illustrator',
		'Photoshop',
	],
	alternates: {
		canonical: './',
	},

	openGraph: {
		title: 'Arv | Creative Developer & Design Engineer',
		description:
			'Proficient in modern web development, with expertise in TypeScript/JavaScript (ES6), React, and Angular. Skilled at implementing dynamic user interfaces using Three.js, GLSL, and GSAP. Experienced in back-end development with Node.js, Express, and MongoDB. Knowledgeable in DevOps practices, including Docker, AWS (S3, Route 53, CloudFront), and CI/CD pipelines using GitHub Actions.',
		url: new URL('/', baseUrl),
		siteName: 'Arv | Creative Developer & Design Engineer',
		images: [
			{
				url: new URL(`${baseUrl}/meta/layne-chen-socials.png`),
				width: 1200,
				height: 630,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={fonts}>
			<head>
				<link
					fetchPriority='low'
					rel='mask-icon'
					href='/meta/safari-pinned-tab.svg'
					color='#ff6b3d'
				/>
				<link
					rel='shortcut icon'
					href='/favicon.ico'></link>
				<meta
					name='msapplication-TileColor'
					content='#0f1017'
				/>
				<meta
					name='msapplication-config'
					content={`${baseUrl}/meta/browserconfig.xml`}
				/>
			</head>
			<body>
				<SmoothScrolling>{children}</SmoothScrolling>
			</body>
		</html>
	);
}
