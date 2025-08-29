<script>
import '../app.postcss';
import { onNavigate } from '$app/navigation';
import ThemeToggle from '../components/ThemeToggle.svelte';

onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
</script>

<div class="h-screen w-full bg-white dark:bg-gray-900">
	<ThemeToggle />
	<slot />
</div>
