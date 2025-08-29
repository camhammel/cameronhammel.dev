<script lang="ts">
import type { Quote } from '$lib/types/project';
import { PortableText } from '@portabletext/svelte';
import QuoteIcon from '../svg/quote.svelte';
import CustomMark from './blocks/CustomMark.svelte';

export let quote: Quote;
</script>

<div class="w-full" id="quote-{quote._id}">
	<div class="from-primary/60 to-primary/10 flex flex-col gap-4 rounded-md bg-gradient-to-b p-8">
		{#if quote}
			<div class="text-white h-16 w-16 rotate-180 dark:text-gray-900">
				<QuoteIcon />
			</div>
			<p class="flex flex-1 pb-4 pt-2 font-medium italic text-neutral-800 dark:text-gray-100">
				<PortableText value={quote.quote} components={{ marks: { highlight: CustomMark } }} />
			</p>
			<div class="flex w-full border-t-2 border-neutral-700 pt-4 dark:border-gray-300">
				<caption class="text-primary dark:text-gray-400 text-left font-bold">
					{quote.author}
				</caption>
			</div>
		{/if}
	</div>
</div>
