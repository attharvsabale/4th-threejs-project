import { Fragment } from 'react';
import Image, { type StaticImageData } from 'next/image';

// store
import { useDomStore, useCursorStore } from '@/store';

// assets
import previewProject01 from '/public/dom/project-preview-01.webp';
import previewProject02 from '/public/dom/project-preview-02.webp';
import previewProject03 from '/public/dom/project-preview-03.webp';

// constant
import { CHAP } from '@/config/constants';

/* -------------------------------------------------------------------------- */
/*            edit this list to put your own projects on the page             */
/* -------------------------------------------------------------------------- */
// To use a real screenshot, replace the matching /public/dom/project-preview-0X.webp file
// (keep the same file name, roughly 4:3 landscape).

type ProjectItem = {
	parallax: 'previewProject01' | 'previewProject02' | 'previewProject03';
	preview: StaticImageData;
	alt: string;
	title: string;
	year: string;
	category: string;
	stack: string[];
	overview: string;
	demoUrl: string;
	codeUrl: string;
};

const PROJECTS: ProjectItem[] = [
	{
		parallax: 'previewProject01',
		preview: previewProject01,
		alt: 'Placeholder preview for project one',
		title: 'Project One',
		year: '2026',
		category: '# frontend',
		stack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
		overview: `A short summary of what this project does and the problem it solves.\n\nDescribe the most interesting technical challenge and how you approached it.\n\nMention any results — users, performance gains, or what you learned.`,
		demoUrl: '#',
		codeUrl: '#',
	},
	{
		parallax: 'previewProject02',
		preview: previewProject02,
		alt: 'Placeholder preview for project two',
		title: 'Project Two',
		year: '2026',
		category: '# full stack',
		stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST API'],
		overview: `A short summary of what this project does and the problem it solves.\n\nDescribe the most interesting technical challenge and how you approached it.\n\nMention any results — users, performance gains, or what you learned.`,
		demoUrl: '#',
		codeUrl: '#',
	},
	{
		parallax: 'previewProject03',
		preview: previewProject03,
		alt: 'Placeholder preview for project three',
		title: 'Project Three',
		year: '2026',
		category: '# frontend',
		stack: ['JavaScript', 'HTML', 'CSS', 'Three.js'],
		overview: `A short summary of what this project does and the problem it solves.\n\nDescribe the most interesting technical challenge and how you approached it.\n\nMention any results — users, performance gains, or what you learned.`,
		demoUrl: '#',
		codeUrl: '#',
	},
];

export default function Project() {
	const setText = useDomStore(state => state?.setText);
	const setContainer = useDomStore(state => state?.setContainer);
	const setAnchor = useDomStore(state => state?.setAnchor);

	function toggleRipple(bool: boolean) {
		useCursorStore.setState({ isRippleZone: bool });
	}

	return (
		<section
			className='flex gap-x-12 gap-y-6 flex-wrap'
			id='project'>
			{/* -------------------------------------------------------------------------- */
			/*                                    upper                                   */
			/* -------------------------------------------------------------------------- */}
			<header
				className='flex-[1] text-[13.75rem] border border-neutral min-h-72 flex rounded-[12rem_12rem_12rem_12rem] p-20'
				ref={setContainer}>
				<h2
					className='m-auto leading-none'
					data-font-family='BOXING'
					ref={setText}>
					{'project'}
				</h2>
			</header>
			<div
				className='flex-[0.3] flex border border-neutral min-h-72 rounded-[12rem_12rem_12rem_12rem] p-20'
				ref={setContainer}>
				<h2 className='m-auto text-6xl'>
					<span
						data-font-family='BOXING'
						ref={setText}>
						{'[05.]'}
					</span>
				</h2>
			</div>
			<div className='flex-[1_0_100%]'></div>

			{PROJECTS.map((project, idx) => {
				const isLast = idx === PROJECTS.length - 1;

				return (
					<Fragment key={project.parallax}>
						{/* -------------------------------------------------------------------------- */
						/*                                    1st row left                            */
						/* -------------------------------------------------------------------------- */}
						<figure
							className='border border-neutral rounded-[0rem_0rem_0rem_0rem] min-h-[60rem] flex flex-[3]'
							ref={el => {
								setContainer(el);
								setAnchor(el);
							}}
							data-parallax={project.parallax}
							data-anchor={CHAP.PROJECT}>
							<Image
								loading='lazy'
								src={project.preview}
								alt={project.alt}
								className='h-full w-full object-cover'
							/>
						</figure>

						<div className='block flex-[1_0_100%] md:hidden'></div>

						{/* -------------------------------------------------------------------------- */
						/*                                    1st row right                           */
						/* -------------------------------------------------------------------------- */}
						<div className='flex flex-[1] gap-12 flex-row flex-wrap md:flex-col'>
							<div
								className='border border-neutral min-h-72 flex flex-col p-20 flex-auto min-w-[180px]'
								ref={setContainer}>
								<h3 className='m-auto text-center text-5xl whitespace-pre-line'>
									<span
										data-font-family='BOXING'
										ref={setText}>
										{`${project.title}\n\n#${project.year}`}
									</span>
								</h3>
							</div>

							<div
								className='border border-neutral min-h-[39rem] flex flex-col p-20 flex-[1] min-w-[180px] md:flex-auto'
								ref={setContainer}>
								<div className='m-auto text-center'>
									<h3 className='text-4xl mb-6 leading-[1.5] whitespace-nowrap'>
										<span
											data-font-family='BOXING'
											ref={setText}>
											{project.category}
										</span>
									</h3>
									<ul className='font-satoshi text-xl leading-[1.5]'>
										{project.stack.map(tech => (
											<li key={tech}>
												<span
													data-font-family='SATOSHI'
													ref={setText}>
													{tech}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className='flex-[1_0_100%]'></div>

						{/* -------------------------------------------------------------------------- */
						/*                                    2nd row left                            */
						/* -------------------------------------------------------------------------- */}
						<div
							className={`border border-neutral min-h-72 px-12 gap-14 p-20 flex flex-[2] flex-col md:flex-row ${
								isLast ? 'md:rounded-[0rem_0rem_0rem_9rem]' : ''
							}`}
							ref={setContainer}>
							<h3 className='m-auto text-center text-4xl leading-[1.25]'>
								<span
									data-font-family='BOXING'
									ref={setText}>
									{`overview`}
								</span>
							</h3>

							<p className='m-auto text-xl font-satoshi whitespace-pre-line leading-[1.5]'>
								<span
									data-font-family='SATOSHI'
									ref={setText}>
									{project.overview}
								</span>
							</p>
						</div>

						<div className='block flex-[1_0_100%] md:hidden'></div>

						{/* -------------------------------------------------------------------------- */
						/*                                    2nd row right                           */
						/* -------------------------------------------------------------------------- */}
						<div
							className={`pointer-events-auto border border-neutral min-h-72 flex flex-[1] items-center justify-center text-4xl text-highlight p-20 rounded-[0rem_0rem_9rem_9rem] leading-[1] gap-40 md:gap-12 ${
								isLast ? 'md:rounded-[0rem_0rem_9rem_0rem]' : 'md:rounded-[0rem_0rem_0rem_0rem]'
							}`}
							ref={setContainer}
							onPointerEnter={e => toggleRipple(false)}
							onPointerLeave={e => toggleRipple(true)}>
							<a
								href={project.demoUrl}
								target='_blank'
								title={`Go to ${project.title} demo page`}>
								<span
									data-font-highlight='button'
									data-font-family='BOXING'
									ref={setText}>{`[ demo ]`}</span>
							</a>
							<a
								href={project.codeUrl}
								target='_blank'
								title={`Go to ${project.title} source code page`}>
								<span
									data-font-highlight='button'
									data-font-family='BOXING'
									ref={setText}>{`[ code ]`}</span>
							</a>
						</div>
						{!isLast && <div className='flex-[1_0_100%]'></div>}
					</Fragment>
				);
			})}
		</section>
	);
}
