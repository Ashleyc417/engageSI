<script>
	import math from '$lib/schedules/mathematics.json';
	import Intro from '$lib/components/intro.svelte';
	import Table from '$lib/components/table.svelte';
</script>

<!-- <img src="" alt="Math Banner" class="w-full" /> -->

<h1>Mathematics SI</h1>

<!-- `Intro` is an intro blurb that will on every department page -->
<Intro />

<h2>SI Schedule</h2>

<!-- `schedules` is the table of the math department's si courses offered  -->
<Table schedules={math} />
