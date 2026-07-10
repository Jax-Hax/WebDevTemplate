<script lang="ts" module>
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { formFieldProxy, type SuperForm, type FormPathLeaves } from 'sveltekit-superforms';

	type Props = HTMLInputAttributes & {
		superform: SuperForm<T>;
		field: FormPathLeaves<T>;
	};

	let { superform, field, ...rest }: Props = $props();

	const { value, errors, constraints } = $derived(formFieldProxy(superform, field));
</script>

<div class="fieldset">
<label class="fieldset-legend text-base">
  {field}<br />
  <input
    name={field}
    type="text"
    class="input {$errors ? 'input-error' : ''}"
    aria-invalid={$errors ? 'true' : undefined}
    bind:value={$value}
    {...$constraints}
    {...rest} />
</label>
{#if $errors}<span class="text-error">{$errors}</span>{/if}
</div>