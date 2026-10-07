// store
import { useNavStore } from '@/store';

// component
import { ResponsiveText, NavOpenBtn } from '@/components';

export default function Nav() {
	return (
		<nav
			className='flex py-2 rounded-full items-center fixed text-lg z-30 min-w-max m-auto leading-none font-boxing backdrop-blur-lg backdrop-saturate-[250%] backdrop-hue-rotate-[9deg] border border-[#ffffff15] left-1/2 -translate-x-1/2 gap-[12px] top-[12px] pl-[16px] md:gap-6 md:top-6 md:pr-2 md:pl-12 min-h-16'
			style={{ textShadow: `0 0 0px black` }}>
			<button
				title='Go to home section'
				onClick={() => useNavStore.getState().lenisRef?.current?.lenis?.scrollTo('#home')}
				className='w-max'>
				<span>{`arv`}</span>
			</button>

			<div className={`border-r border-neutral min-h-[14px] h-7 hidden md:block`}></div>

			<p className='flex-[1] text-center cursor-text'>
				<span>
					<ResponsiveText
						desktop={`portfolio#2026`}
						mobile={'portfolio#26'}
					/>
				</span>
			</p>

			<NavOpenBtn />
		</nav>
	);
}
