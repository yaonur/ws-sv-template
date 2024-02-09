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
	let width = 500;
	let maxWidth=600
	
</script>


 
<div use:melt={$root} class="@container/main" >
  <button use:melt={$trigger}>{$open ? 'Close' : 'Open'}</button>
  {#if $open}
	 <!-- content here -->
	 <div use:melt={$content} transition:slide>Obi-Wan says: Hello there!</div>
  {/if}
  <p class="@[80rem]/main:underline">{m._test()}</p>
</div>
<input type="range" bind:value={width} min="0" max="1600" />
<div  id="map-div" class="bg-slate-400" style="width:{width}px">
	<p>Width:{width}px</p>
	<p class="test-class">Testing color</p>

</div>

<style>

	#map-div {
		container-type: inline-size;
    }
	.test-class{
		--mx-width:600px;

	}
	
    /* @container (width< calc(var(--mx-width))) { */
    @container (width< 600px) {
        .test-class {
            color:#1a9850 ;
        }
    
    }
</style>

