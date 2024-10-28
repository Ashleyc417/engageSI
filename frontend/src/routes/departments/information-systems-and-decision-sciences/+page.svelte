<script>
    import isds from '$lib/schedules/information-and-decision-science.json'
	import Intro from '../../../lib/components/intro.svelte';
    import Table from '../../../lib/components/table.svelte';
</script>

<h1>Information and Decision Sciences SI</h1>
<!-- `Intro` is an intro blurb that will on every department page -->
<Intro />

<h2>SI Schedule</h2>

<!-- `schedules` is the table of the math department's si courses offered  -->
<Table schedules={isds}/>	