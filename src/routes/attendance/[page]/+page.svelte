<script>
	import AttendanceLogs from "$lib/components/attendance-logs.svelte";

	export let data;

	let attendanceLogs = data.attendanceLogs;
	let pageNumber = data.pageNumber;

	let numLogs = data.numLogs;
	let maxPages = Math.floor(numLogs / 8) + 1;
</script>

<section>
	<h2>Attendance Logs</h2>
	<AttendanceLogs {attendanceLogs} />
	<div class="page-container">
		{#if pageNumber > 1}
			<a data-sveltekit-reload href="/attendance/{pageNumber - 1}">{pageNumber - 1}</a>
		{/if}
		<span>{pageNumber}</span>
		{#if pageNumber < maxPages}
			<a data-sveltekit-reload href="/attendance/{pageNumber + 1}">{pageNumber + 1}</a>
		{/if}
	</div>
</section>

<style>
	section {
		width: 100%;
		max-width: 1280px;
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.page-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.page-container > a,
	.page-container > * {
		text-decoration: none;
		color: rgb(var(--color-text));
		padding: 0.75rem 1rem;
		width: 50px;
		text-align: center;
		border-radius: 0.5rem;
	}

	.page-container > span {
		background-color: rgb(var(--color-foreground));
	}

	.page-container > a {
		background-color: rgb(var(--color-background-500));
		transition: opacity 150ms ease-in;
	}

	.page-container > a:hover {
		opacity: 0.8;
	}
</style>
