<script lang="ts">
	import SvelteSeo from "svelte-seo";
	import ThemeToggle from '../../components/ThemeToggle.svelte';
</script>

<div class="h-screen w-full">
	<ThemeToggle />
	<slot></slot>
</div>
<SvelteSeo
	title="Cameron Hammel"
	description="Cameron Hammel's portfolio website"
	keywords="Cameron Hammel, Cameron, Hammel, personal, website, portfolio, LinkedIn, GitHub, Resume"
	themeColor="#6EE2F5"
	openGraph={{
		title: 'Cameron Hammel',
		description: "Cameron Hammel's personal website",
		url: 'https://cameronhammel.dev',
		type: 'website',
		images: [
			{
				url: 'https://cameronhammel.dev/favicon.png',
				width: 1200,
				height: 630,
				alt: 'Cameron Hammel'
			}
		]
	}}
/>
