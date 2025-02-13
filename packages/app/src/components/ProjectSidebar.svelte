<script lang="ts">
import { urlFor } from '$lib/sanity/client';
import type { Project, ProjectIntersectionElement } from '$lib/types/project';
import { fade } from 'svelte/transition';

export let project: Project;

export let projectIntersectionElements = {};

$: intersectionElements = Object.entries(
	projectIntersectionElements as unknown as Record<string, ProjectIntersectionElement>
);
</script>

<aside class="project-sidebar sticky top-3 col-span-4 grid h-fit gap-4 sm:col-span-1">
	<div class="flex h-fit flex-col gap-4 rounded-md bg-[#fff] p-4">
		{#if project.company_image}
			<img
				src={urlFor(project.company_image)?.width(768).auto('format').url()}
				class="rounded-md bg-[#fff] object-contain px-1"
				alt="Company Logo"
				transition:fade
			/>
		{/if}
		{#if project.summary}
			<div>
				<h5>About</h5>
				<p class="text-sm">{project.summary}</p>
			</div>
		{/if}
		{#if project.job_title}
			<div>
				<h5>Job Title</h5>
				<p class="text-sm">{project.job_title}</p>
			</div>
		{/if}
		{#if project.industry}
			<div>
				<h5>Industry</h5>
				<p class="text-sm">{project.industry}</p>
			</div>
		{/if}
		{#if project.website}
			<div>
				<h5>Website</h5>
				<a href={project.website} class="link break-all text-sm">{project.website}</a>
			</div>
		{/if}
	</div>
	{#if intersectionElements.length}
		<div class="h-fit rounded-md bg-[#fff] p-4">
			<h5>On this page</h5>
			<div class="mt-1 flex flex-col">
				{#each intersectionElements as [id, { show, title, intersecting }], index}
					{#if show}
						<div class="flex h-full flex-row items-center gap-4">
							<div
								class="h-5 w-[2px] bg-slate-200 transition-colors duration-300"
								style="background-color: {intersecting ? 'rgb(var(--color-primary))' : ''}"
							/>
							<a
								href={`#${id}`}
								on:click={(e) => {
									e.preventDefault();
									document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
								}}
								class="link text-sm text-slate-400 transition-colors duration-300"
								style="color: {intersecting ? 'rgb(var(--color-primary))' : ''}">{title}</a
							>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</aside>
