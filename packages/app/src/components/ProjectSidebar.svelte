<script lang="ts">
import { urlFor } from '$lib/sanity/client';
import { theme } from '$lib/stores/theme';
import type { Project, ProjectIntersectionElement } from '$lib/types/project';
import { fade } from 'svelte/transition';

export let project: Project;

export let projectIntersectionElements = {};

$: intersectionElements = Object.entries(
	projectIntersectionElements as unknown as Record<string, ProjectIntersectionElement>
);
</script>

<aside class="project-sidebar sticky top-4 self-start col-span-4 grid h-fit gap-4 sm:col-span-1">
	<div class="flex h-fit flex-col gap-4 rounded-md bg-white dark:bg-gray-700 p-4">
		{#if project.company_image}
					<img
			src={urlFor(project.company_image)?.width(768).auto('format').url()}
			class="rounded-md bg-white object-contain px-2"
			alt="Company Logo"
			transition:fade
		/>
		{/if}
		{#if project.summary}
			<div>
				<h5 class="text-gray-900 dark:text-white font-semibold mb-2">About</h5>
				<p class="text-sm text-gray-700 dark:text-gray-300">{project.summary}</p>
			</div>
		{/if}
		{#if project.job_title}
			<div>
				<h5 class="text-gray-900 dark:text-white font-semibold mb-2">Job Title</h5>
				<p class="text-sm text-gray-700 dark:text-gray-300">{project.job_title}</p>
			</div>
		{/if}
		{#if project.industry}
			<div>
				<h5 class="text-gray-900 dark:text-white font-semibold mb-2">Industry</h5>
				<p class="text-sm text-gray-700 dark:text-gray-300">{project.industry}</p>
			</div>
		{/if}
		{#if project.website}
			<div>
				<h5 class="text-gray-900 dark:text-white font-semibold mb-2">Website</h5>
				<a href={project.website} class="link break-all text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">{project.website}</a>
			</div>
		{/if}
	</div>
	{#if intersectionElements.length}
		<div class="h-fit rounded-md bg-[#fff] dark:bg-gray-700 p-4">
			<h5 class="text-gray-900 dark:text-white font-semibold mb-2">On this page</h5>
			<div class="mt-1 flex flex-col">
				{#each intersectionElements as [id, { show, title, intersecting }], index}
					{#if show}
						<div class="flex h-full flex-row items-center gap-4">
							<div
								class="h-5 w-[2px] bg-slate-400 dark:bg-gray-500 transition-colors duration-300"
								style="background-color: {intersecting ? $theme === 'light' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-primary-light))' : ''}"
							/>
							<a
								href={`#${id}`}
								on:click={(e) => {
									e.preventDefault();
									document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
								}}
								class="link text-sm text-slate-400 dark:text-gray-500 transition-colors duration-300"
								style="color: {intersecting ? $theme === 'light' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-primary-light))' : ''}">{title}</a
							>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</aside>
