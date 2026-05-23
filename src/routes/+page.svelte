<script lang="ts">
	import TextField from '$lib/components/TextField.svelte';
	import { superForm } from 'sveltekit-superforms';

	let { data } = $props();

	// Client API:
	const superform = $derived(superForm(data.form));
	let delayed = $derived(superform.delayed);
</script>

<svelte:head>
	<title>Test App</title>
</svelte:head>

<form method="POST" use:superform.enhance>
	<TextField {superform} field="email" />
	<div>
		{#if $delayed}
			<span class="loading loading-xs loading-spinner"></span>
		{:else}
			<button class="button primary block"> Send Magic Link </button>
		{/if}
	</div>
</form>
