<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  function toggleTheme() {
    theme.update(current => current === 'light' ? 'dark' : 'light');
  }
</script>

<button
  on:click={toggleTheme}
  class="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-gray-300 dark:text-white transition-all duration-200 hover:bg-white/20 hover:scale-110 dark:bg-black/10 dark:hover:bg-black/20"
  aria-label="Toggle dark mode"
  title="Toggle dark mode"
>
  {#if mounted}
    {#if $theme === 'light'}
      <!-- Moon icon for dark mode -->
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    {:else}
      <!-- Sun icon for light mode -->
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    {/if}
  {/if}
</button>

