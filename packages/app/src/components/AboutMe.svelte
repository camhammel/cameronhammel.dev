<script lang="ts">
import { page } from '$app/stores';
import { onMount } from 'svelte';
import HeaderLogo from '../svg/header-logo.svelte';
import { fly } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';
import { urlFor } from '$lib/sanity/client';
import type { SanityAsset } from '@sanity/image-url/lib/types/types';

import Arrow from '../svg/arrow.svelte';
import SvelteIcon from '../svg/svelte.svelte';
import SanityIcon from '../svg/sanity_type.svelte';
import InstagramIcon from '../svg/instagram.svelte';
import GitHubIcon from '../svg/github.svelte';
import EmailIcon from '../svg/email.svelte';
import LinkedinIcon from '../svg/linkedin.svelte';
import ContributionCalendar from './ContributionCalendar.svelte';
import type { GithubResponse } from '$lib/types/github';
import { spring } from 'svelte/motion';

export let profileImage: SanityAsset | undefined = undefined;
export let techStackItems: { name: string }[] = [];
export let githubData: GithubResponse | undefined;

$: isLink = $page.url.pathname !== '/';

let mounted = false;
let isMobile = false;

$: contributionsCalendar = githubData?.data?.user.contributionsCollection.contributionCalendar;

onMount(() => {
	mounted = true;
	isMobile = (document.querySelector('html')?.clientWidth || 0) < 640;
});

let coords = spring(
	{ x: 75, y: 25 },
	{
		stiffness: 0.05,
		damping: 0.75
	}
);
</script>

<div id="fp-about" class="flex min-h-svh w-full flex-col bg-white dark:bg-gray-900">
	<div class="flex flex-row items-center justify-center overflow-x-hidden bg-white dark:bg-gray-900 sm:justify-end">
		{#if mounted}
			<div
				class="p-2 sm:p-6"
				in:fly={{
					easing: cubicOut,
					delay: 150,
					duration: 500,
					...(isMobile ? { y: -50 } : { x: 50 })
				}}
			>
				{#if isLink}
					<a href="/" class="inline-block w-80 sm:w-[458px]"><HeaderLogo /></a>
				{:else}
					<div class="inline-block w-80 sm:w-[458px]"><HeaderLogo /></div>
				{/if}
			</div>
		{/if}
	</div>
	<div
		class="from-primary-lighter to-primary bg-gradient-[circle_at_var(--gradient-position)] relative mx-4 mb-4 flex flex-1 flex-col justify-evenly gap-4 rounded-3xl from-15% to-100% px-4 py-8 sm:mx-6 sm:mb-6 sm:gap-8 sm:pt-8"
		on:mousemove={(e) => {
			coords.set({ x: Math.round(e.clientX / window.innerWidth * 100), y: Math.round(e.clientY / window.innerHeight * 100) });
		}}
		on:mouseleave={(e) => {
			coords.set({ x: 80, y: 25 });
		}}
		role="presentation"
		style="--gradient-position: {$coords.x}% {$coords.y}%"
	>
		<div class="flex flex-col-reverse items-center sm:mx-4 sm:flex-row sm:justify-center">
			<div class="my-1 flex flex-col items-center sm:items-start">
				<h1
					class="text-center text-[clamp(24px,10svh,48px)] leading-none tracking-normal text-white dark:text-gray-900 [text-transform:none;] sm:text-start sm:text-7xl md:text-8xl"
				>
					Hi, I'm<br />Cameron.
				</h1>
				<p
					class="mt-4 max-w-[80%] text-center font-medium text-white dark:text-gray-900 sm:max-w-xl sm:text-left sm:text-lg md:text-xl"
				>
					I'm a software engineer based in Toronto 🇨🇦
					<br /> I build cutting edge web and mobile applications using modern frameworks such as
					<b>React-Native</b>, <b>Vue</b>, and <b>SvelteKit</b>.
				</p>
			</div>
			<div
				class="my-4 aspect-square max-w-32 overflow-clip rounded-full border-2 border-solid border-white dark:border-gray-900 bg-white dark:bg-gray-900 text-center font-medium text-white dark:text-gray-900 shadow-sm sm:my-0 sm:max-w-64 sm:text-lg"
			>
				{#if profileImage}
					<img
						src={urlFor(profileImage)?.width(512).auto('format').url()}
						alt="Project Section"
						height="256"
						width="256"
					/>
				{:else}
					<p class="text-7xl">👋</p>
				{/if}
			</div>
		</div>
		<div
			class="xs:grid-cols-3 mx-auto grid max-w-screen-2xl grid-cols-2 gap-2 px-4 sm:grid-cols-6 sm:gap-4"
		>
			<div
				class="glass-card col-span-full flex flex-row flex-wrap items-center justify-center gap-6 sm:col-span-3"
			>
				<a
					class="block aspect-square w-8 rounded-md p-1 text-white dark:text-gray-900 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-md"
					href="https://instagram.com/cameron.hammel"
					><InstagramIcon />
				</a>
				<a
					class="block aspect-square w-8 rounded-md p-1 text-white dark:text-gray-900 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-md"
					href="https://github.com/camhammel"
					><GitHubIcon />
				</a>
				<a
					class="block aspect-square w-8 rounded-md p-1 text-white dark:text-gray-900 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-md"
					href="https://linkedin.com/in/cameron.hammel"
					><LinkedinIcon />
				</a>
				<a
					class="block aspect-square w-8 rounded-md p-1 text-white dark:text-gray-900 transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-md"
					href="mailto:hello@cameronhammel.dev"
					target="”_blank”"
					rel="noopener"
					><EmailIcon />
				</a>
			</div>
			<div
				class="glass-card col-span-full flex items-center justify-center overflow-x-clip sm:col-span-3"
			>
				<p class="animate-infinite-scroll whitespace-nowrap font-medium text-white dark:text-gray-900 sm:text-lg">
					{' | ' + techStackItems.map(({ name }) => name).join(' | ')}
				</p>
				<p class="animate-infinite-scroll whitespace-nowrap font-medium text-white dark:text-gray-900 sm:text-lg">
					{' | ' + techStackItems.map(({ name }) => name).join(' | ')}
				</p>
				<p class="animate-infinite-scroll whitespace-nowrap font-medium text-white dark:text-gray-900 sm:text-lg">
					{' | ' + techStackItems.map(({ name }) => name).join(' | ')}
				</p>
			</div>
			{#if contributionsCalendar}
				<ContributionCalendar githubData={contributionsCalendar} />
			{/if}
			<div class="glass-card col-span-3 flex flex-col items-center gap-8 sm:col-span-full">
				<h5 class="text-center text-white dark:text-gray-900">This Website</h5>
				<div class="flex w-full flex-col items-center justify-center gap-8 text-center sm:flex-row">
					<div class="flex h-full w-full flex-col items-center justify-start gap-1 sm:w-24">
						<div class="min-h-8 w-6 text-white dark:text-gray-900"><SvelteIcon /></div>
						<p class="text-white dark:text-gray-900 sm:font-medium">SvelteKit</p>
					</div>
					<div class="flex h-full w-full flex-col items-center justify-start gap-1 sm:w-24">
						<div class="min-h-8 min-w-8 font-sans text-2xl font-bold leading-none text-white dark:text-gray-900">
							90+
						</div>
						<p class="text-white dark:text-gray-900 sm:font-medium">Lighthouse Score</p>
					</div>
					<div class="flex h-full w-full flex-col items-center justify-start gap-1 sm:w-24">
						<div class="min-h-8 w-20 text-white dark:text-gray-900 sm:w-full"><SanityIcon /></div>
						<p class="text-white dark:text-gray-900 sm:font-medium">Sanity CMS</p>
					</div>
				</div>
			</div>
		</div>
		<div
			class="3xl:absolute 3xl:bottom-12 3xl:right-4 mt-4 flex animate-bounce self-center text-white dark:text-gray-900 sm:mt-0 sm:self-end"
		>
			<div class="aspect-square w-8 -rotate-90 sm:w-12"><Arrow /></div>
		</div>
	</div>
</div>
