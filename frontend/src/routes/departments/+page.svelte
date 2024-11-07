<script>
	const departmentLinks = [
		{ link: 'accounting', name: 'Accounting' },
		{ link: 'biology', name: 'Biology' },
		{ link: 'chemistry', name: 'Chemistry' },
		{ link: 'cpsc', name: 'Computer Science' },
		{ link: 'economics', name: 'Economics' },
		{ link: 'engineering', name: 'Engineering' },
		{ link: 'finance', name: 'Finance' },
		{ link: 'isds', name: 'Information Systems & Decision Sciences' },
		{ link: 'kinesiology', name: 'Kinesiology' },
		{ link: 'mathematics', name: 'Mathematics' },
		{ link: 'physics', name: 'Physics' },
		{ link: 'political-science', name: 'Political Science' },
		{ link: 'psychology', name: 'Psychology' }
	];
</script>

<h1>Departments</h1>

<div class="department-links">
	{#each departmentLinks as departmentLink}
		<a href="/departments/{departmentLink.link}">{departmentLink.name}</a>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		font-size: xx-large;
	}

	.department-links {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 1rem;
	}

	.department-links > a {
		color: rgb(var(--color-text));
		text-decoration: none;
		text-align: center;
		font-size: large;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		background-color: rgb(var(--color-background-500));
		overflow-x: hidden;
		white-space: nowrap;
	}
</style>
