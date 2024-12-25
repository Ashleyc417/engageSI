<script>
	const departmentLinks = [
		{ link: "accounting", name: "Accounting" },
		{ link: "biology", name: "Biology" },
		{ link: "chemistry", name: "Chemistry" },
		{ link: "cpsc", name: "Computer Science" },
		{ link: "economics", name: "Economics" },
		{ link: "engineering", name: "Engineering" },
		{ link: "finance", name: "Finance" },
		{ link: "isds", name: "Information Systems & Decision Sciences" },
		{ link: "kinesiology", name: "Kinesiology" },
		{ link: "math", name: "Mathematics" },
		{ link: "physics", name: "Physics" },
		{ link: "political-science", name: "Political Science" },
		{ link: "psychology", name: "Psychology" }
	];
</script>

<h1>Departments</h1>

<p>Explore all Supplemental Instruction sessions organized by department below.</p>

<div class="department-links">
	{#each departmentLinks as departmentLink}
		<a href="/departments/{departmentLink.link}">{departmentLink.name}</a>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
	}

	p {
		text-align: center;
	}

	.department-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.department-links > a {
		height: 6rem;
		background-color: transparent;
		color: rgb(var(--color-text));
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		text-decoration: none;
		font-weight: 600;
		padding: 1rem;
		border-radius: 0.5rem;
		border: 2px solid rgb(var(--color-background-600));
		overflow-x: hidden;
		transition: border-color 150ms ease-in;
	}

	.department-links > a:hover {
		border-color: rgb(var(--color-background-700));
	}

	@media screen and (min-width: 640px) {
		.department-links {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media screen and (min-width: 768px) {
		.department-links > a {
			font-size: 1.25rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.department-links {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
</style>
