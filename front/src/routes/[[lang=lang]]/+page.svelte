<script lang="ts">
	import { createCollapsible, melt } from '@melt-ui/svelte'
  const {
    elements: { root, content, trigger },
    states: { open }
  } = createCollapsible()
	import { availableLanguageTags } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Calendar from '$ui/Calendar/Calendar.svelte';

	export let data
  	
	$: ({ session, supabase } = data)
	onMount (async () => {
	
	})
	
</script>


 
<div use:melt={$root}>
  <button use:melt={$trigger}>{$open ? 'Close' : 'Open'}</button>
  {#if $open}
	 <!-- content here -->
	 <div use:melt={$content} transition:slide>Obi-Wan says: Hello there!</div>
  {/if}
</div>
<p>{m._test()}</p>

