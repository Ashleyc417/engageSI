<script>
	import SessionCard from "./session-card.svelte";

	export let schedules;
	export let departmentName;
</script>

<div class="schedule-cards">
	{#each Object.entries(schedules.sessionsOffered) as [classTitle, sessionsOffered]}
		<div class="schedule-entry">
			<h2 class="class-title">{classTitle}</h2>
			<div class="card-container">
				{#each sessionsOffered as sessionInfo}
					<SessionCard
						{sessionInfo}
						isDashboard={false}
						sessionKey={`${departmentName};${classTitle};${sessionInfo.siLeader}`}
					/>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.schedule-cards {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.schedule-entry {
		padding: 1rem;
		border-radius: 8px;
	}

	.class-title {
		margin-bottom: 1rem;
		font-size: 1.8rem;
		font-weight: bold;
		text-align: center;
		color: rgb(var(--color-foreground));
	}

	.card-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.card-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1024px) {
		.card-container {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
