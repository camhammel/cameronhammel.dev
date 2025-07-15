<script lang="ts">
import { afterNavigate, beforeNavigate } from '$app/navigation';
import type { Quote } from '$lib/types/project';
import Testimonial from '../../components/Quote.svelte';

import ProjectTitle from '../../components/ProjectTitle.svelte';

export let data;

function setupTransitions(slug: string) {
	const containerElement = document.getElementById(`project-title-container-${slug}`);
	const titleElement = containerElement?.querySelector('h3');

	if (containerElement) containerElement.style.viewTransitionName = `title-container-${slug}`;
	if (titleElement) titleElement.style.viewTransitionName = `title-${slug}`;
}

beforeNavigate((navigation) => {
	if (navigation.to?.route.id === '/projects/[slug]' && navigation.to?.params?.slug) {
		setupTransitions(navigation.to.params.slug);
	}
});

afterNavigate((navigation) => {
	if (navigation.from?.route.id === '/projects/[slug]' && navigation.from?.params?.slug) {
		setupTransitions(navigation.from.params.slug);
	}
});

let quotes: Quote[] = [];
$: quotes = (data.projects?.flatMap((project) => project.quotes) ?? []).filter(Boolean) as Quote[];
</script>

<div class="max-w-screen flex w-full flex-col items-center justify-center">
	<AboutMe
		profileImage={data.portfolio?.profile_image}
		techStackItems={data.techStack}
		githubData={data.github}
	/>
	<div
		id="fp-experience"
		class="flex w-full flex-col items-center justify-center bg-white px-8 py-32"
	>
		{#if data.projects?.length}
			<h2 class="overflow-x-hidden text-center text-[clamp(1.5rem,4vw,2rem)] sm:text-left">
				Experience
			</h2>
			<ul class="grid w-full auto-cols-fr grid-flow-row auto-rows-fr justify-evenly gap-4">
				{#each data.projects as project, index}
					<li class="mx-auto h-full w-full max-w-7xl">
						<ProjectTitle project={project} index={index} />
					</li>
				{/each}
			</ul>
		{:else}
			<p>No projects found.</p>
		{/if}
	</div>
	<div id="fp-quotes" class="flex w-full flex-col items-center justify-center bg-white px-8 py-32">
		{#if data.projects?.length}
			<h2 class="overflow-x-hidden text-center text-[clamp(1.5rem,4vw,2rem)] sm:text-left">
				Testimonials
			</h2>
			<ul class="w-full columns-1 gap-4 sm:columns-2">
				{#each quotes as quote}
					<li class="mb-4 inline-block w-full">
						<Testimonial quote={quote} />
					</li>
				{/each}
			</ul>
		{:else}
			<p>No projects found.</p>
		{/if}
	</div>
</div>

<svelte:head>
	<style>
	html {
		overflow-y: overlay;
	}
	</style>
</svelte:head>
