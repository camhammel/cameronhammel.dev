<script lang="ts">
import type { Project } from '$lib/types/project';
import { page } from '$app/stores';
import { fly, scale } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';
import { onMount } from 'svelte';
import Arrow from '../svg/arrow.svelte';
import { beforeNavigate } from '$app/navigation';
import { lastRoute } from '$lib/stores/lastRoute';

export let project: Pick<Project, 'name' | 'slug' | 'start_date' | 'end_date' | 'colourset'>;
export let index = -1;

let ready = false;
let isFirstPage = true;

{
	$lastRoute;
}

beforeNavigate(({ from }) => {
	$lastRoute = from?.url.pathname || '/';
});

onMount(() => {
	isFirstPage = $lastRoute === '/';

	ready = true;
});

function getYearFromDate(date?: string) {
	return date?.split('-')?.[0] || '2024';
}

function getDateRange() {
	const start = project.start_date?.split('-')?.[0] || '2024';
	const end = project.end_date?.split('-')?.[0] || 'Present';
	return `${start} - ${end}`;
}

const isActivePage = $page.url.pathname === `/projects/${project.slug}`;
</script>

{#if project}
	<div
		class="flex flex-col"
		class:h-full={!isActivePage}
		id={`project-title-container-${project.slug}`}
		style={`view-transition-name: title-container-${project.slug}`}
	>
		{#if isActivePage}
			<div class="bg-primary relative pb-12 pt-8">
				<a
					href="/#fp-experience"
					class="hover:bg-primary-dark absolute left-5 top-14 z-10 w-12 rounded-md p-2 text-white transition-colors duration-300 sm:left-10"
				>
					<Arrow />
				</a>
				<div class="flex w-full flex-col items-center pb-12">
					{#if ready}
						<div
							class="project-title-component projects-list-item group flex w-full flex-col items-center px-28 transition-colors duration-300"
							in:fly={{ y: 50, easing: cubicOut, delay: 300 }}
						>
							<h3
								class="text-wrap text-center text-3xl transition-colors duration-300 group-hover:text-white sm:text-[3rem] sm:leading-[4.5rem]"
							>
								{project.name}
							</h3>
							<span
								class="text-md mt-2 px-2 text-center font-['Space_Mono'] font-bold text-white sm:mt-0 sm:text-lg"
							>
								{getDateRange()}
							</span>
						</div>
					{/if}
				</div>
			</div>
		{:else}
			<div
				class="flex w-full flex-grow flex-col items-center justify-center"
				style="--color-hover: {project.colourset.main.hex};"
			>
				{#if ready}
					<a
						class="bg-primary project-title-component projects-list-item group flex w-full flex-grow origin-top flex-row items-center rounded-3xl px-4 py-1 transition-all duration-300 hover:-translate-y-2 hover:bg-[--color-hover] hover:shadow-md sm:px-8 sm:py-2"
						href={`/projects/${project.slug}`}
						in:scale={{
							delay: isFirstPage ? 50 + 100 * index : 0,
							start: 0.5,
							easing: cubicOut,
							duration: isFirstPage ? 250 : 0
						}}
					>
						<span
							class="hidden w-fit px-2 font-['Space_Mono'] text-lg font-bold text-white sm:inline"
						>
							{getYearFromDate(project.start_date)}
						</span>
						<span
							class="hidden w-10 px-2 font-['Space_Mono'] text-4xl font-bold text-white sm:inline"
						>
							/
						</span>
						<h3
							class="w-full text-center text-2xl leading-7 transition-colors duration-300 group-hover:text-white sm:line-clamp-1 sm:w-auto sm:text-left sm:text-[3rem] sm:leading-[4.5rem]"
						>
							{project.name}
						</h3>
					</a>
				{/if}
			</div>
		{/if}
	</div>
{/if}
<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
