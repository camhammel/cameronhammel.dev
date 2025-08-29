<script lang="ts">
import { onMount } from 'svelte';
import { fade, fly } from 'svelte/transition';
import IntersectionObserver from 'svelte-intersection-observer';
import SvelteSeo from 'svelte-seo';

import ProjectTitle from '../../../../components/ProjectTitle.svelte';
import ProjectSection from '../../../../components/ProjectSection.svelte';

import { getImageProps } from '$lib/sanity/client';
import ProjectTechStack from '../../../../components/ProjectTechStack.svelte';
import { cubicOut } from 'svelte/easing';
import ProjectSidebar from '../../../../components/ProjectSidebar.svelte';
import type { RgbaColor } from 'studio';
import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

let ready = false;

onMount(() => {
	ready = true;
});

export let data;
$: ({ project } = data);

$: bannerImageProps = project?.hero_banner?.asset?._ref
	? getImageProps({ image: project.hero_banner as SanityImageObject, maxWidth: '100vw' })
	: null;

const defaultBlack = { r: 0, g: 0, b: 0 };

function transformColourset(
	colourset?: Record<
		'main' | 'light' | 'lighter' | 'dark',
		{ rgb?: { r?: number; g?: number; b?: number } }
	>
): Record<string, { rgb: string }> {
	const transformRgb = (rgb?: Omit<RgbaColor, '_type'>) => `${rgb?.r} ${rgb?.g} ${rgb?.b}`;

	return {
		main: { rgb: transformRgb(colourset?.main.rgb || defaultBlack) },
		light: { rgb: transformRgb(colourset?.light.rgb || defaultBlack) },
		lighter: { rgb: transformRgb(colourset?.lighter.rgb || defaultBlack) },
		dark: { rgb: transformRgb(colourset?.dark.rgb || defaultBlack) }
	};
}

// Reactive statement to transform the colourset
$: colourset = transformColourset(project?.colourset);

let sectionNodes: HTMLElement[] = [];
let techStackNode: HTMLElement;

let sectionsIntersecting = [false];
let techStackIntersecting = false;

let projectIntersectionElements: Record<
	string,
	{ intersecting: boolean; title: string; show: boolean }
>;
// @ts-ignore
$: projectIntersectionElements = Object.assign(
	Object.assign(
		{
			'project-tech_stack': {
				intersecting: techStackIntersecting,
				title: 'Tech Stack',
				show: !!project?.tech_stack?.length
			}
		},
		project?.sections?.length &&
			project.sections.reduce((acc, section, index) => {
				// @ts-ignore
				acc[`project-${section.title}`] = {
					intersecting: sectionsIntersecting[index],
					title: section.title,
					show: true
				};
				return acc;
			}, {})
	)
);
let loaded = false;
</script>

<div
	class="project-details relative flex max-w-full flex-col overflow-visible bg-white dark:bg-gray-900"
	style="--color-primary: {colourset.main.rgb}; --color-primary-light: {colourset.light
		.rgb}; --color-primary-lighter: {colourset.lighter.rgb}; --color-primary-dark: {colourset.dark
		.rgb};"
>
	{#if project}
		<ProjectTitle project={project} />
		{#if ready}
			<div
				class="relative bottom-12 z-10 -mb-12 flex-1 gap-4 rounded-3xl bg-white dark:bg-gray-800 p-4"
				transition:fly={{ duration: 750, delay: 200, y: 200, easing: cubicOut, opacity: 1 }}
			>
				<div class="col-span-3 mx-auto max-w-screen-2xl">
					{#if project.hero_banner}
						<div class="flex flex-row justify-center">
							<img
								style="height: auto; width: 100%;"
								fetchpriority="high"
								loading="eager"
								class="rounded-2xl"
								alt="Hero Banner"
								data-loaded={loaded}
								on:load={() => loaded = true}
								{...bannerImageProps}
							/>
						</div>
					{/if}
					<div class="my-4">
						<IntersectionObserver
							element={techStackNode}
							bind:intersecting={techStackIntersecting}
							threshold={0.7}
						>
							<div id="project-tech_stack" bind:this={techStackNode}>
								{#if project.tech_stack?.length}
									<ProjectTechStack project={project} />
								{/if}
							</div>
						</IntersectionObserver>
						<div class="m-4 grid grid-cols-4 gap-4">
							<div
								class="col-span-4 flex flex-col gap-8 rounded-md bg-[#fff] dark:bg-gray-700 px-8 py-4 sm:col-span-3"
							>
								{#if project.sections?.length}
									{#each project.sections as section, index}
										<IntersectionObserver
											element={sectionNodes[index]}
											bind:intersecting={sectionsIntersecting[index]}
											threshold={0.7}
										>
											<section id={`project-${section.title}`} bind:this={sectionNodes[index]}>
												<ProjectSection section={section} index={index} />
											</section>
										</IntersectionObserver>
									{/each}
								{/if}
							</div>
							<ProjectSidebar
								project={project}
								projectIntersectionElements={projectIntersectionElements}
							/>
						</div>
					</div>
				</div>
			</div>
		{/if}
		<SvelteSeo
			title={`${project.name} | Cameron Hammel`}
			description="Cameron Hammel's personal website"
			keywords={`Cameron Hammel, Cameron, Hammel, personal, website, portfolio, LinkedIn, GitHub, Resume, ${project.name}`}
			openGraph={{
				title: `${project.name} | Cameron Hammel`
			}}
		/>
	{/if}
</div>

<style>
img {
	transition: 0.15s opacity;
}
img[data-loaded='false'] {
	opacity: 0;
}
</style>
