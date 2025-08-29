<script lang="ts">
import { DefaultListItem, PortableText } from '@portabletext/svelte';
import { urlFor } from '$lib//sanity/client';
import { fly } from 'svelte/transition';
import type { Section } from '$lib/types/project';
import { cubicOut } from 'svelte/easing';
import { onMount } from 'svelte';

export let section: Section;
export let index: number = 0;

let containerClass =
	'my-4 flex flex-1 flex-col items-center ' +
	(section?.image_placement === 'left'
		? 'sm:flex-row justify-between lg:gap-24 sm:gap-8 gap-4'
		: section?.image_placement === 'right'
			? 'sm:flex-row-reverse justify-between lg:gap-24 sm:gap-8 gap-4'
			: 'gap-2');

let textContainerClass =
	section?.image_placement === 'left'
		? 'sm:items-start justify-center flex flex-1 flex-col sm:text-left text-center'
		: section?.image_placement === 'right'
			? 'sm:items-end justify-center flex flex-1 flex-col sm:text-right text-center'
			: 'sm:items-center justify-center flex flex-1 flex-col text-center';

let ready = false;

onMount(() => {
	ready = true;
});
$: flyOptions = {
	duration: 500,
	delay: 400 + index * 150,
	easing: cubicOut,
	opacity: 0,
	...(section?.image_placement === 'left'
		? { x: -100 }
		: section.image_placement === 'right'
			? { x: 100 }
			: { y: 100 })
};
</script>

<div>
	{#if section}
		<section class={containerClass}>
			{#if ready}
				{#if section.image}
					<div
						in:fly|global={flyOptions}
						class="flex flex-1 items-center justify-center"
						class:sm:justify-end={section?.image_placement === 'left'}
						class:sm:justify-start={section?.image_placement === 'right'}
					>
						<img
							loading="lazy"
							class="max-w-[80%] rounded-md object-contain"
							src={urlFor(section.image)?.width(768).auto('format').url()}
							alt="Project Section"
							width="80%"
						/>
					</div>
				{/if}
				<div class={textContainerClass + " text-gray-900 dark:text-white"} in:fly={flyOptions}>
					<div class="mx-auto max-w-full sm:mx-0">
						<PortableText
							value={section.content}
							components={{ listItem: { normal: DefaultListItem, bullet: DefaultListItem } }}
						/>
					</div>
				</div>
			{/if}
		</section>
	{/if}
</div>
