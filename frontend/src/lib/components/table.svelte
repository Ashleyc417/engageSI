<!-- `schedules` lets us re-use the component below -->
<script>
	export let schedules;
</script>

<!-- Component to hold each department's table -->
{#each Object.entries(schedules.sessionsOffered) as [classTitle, sessionsOffered]}
	<h3>{classTitle}</h3>
	{#each sessionsOffered as sessionInfo}
		<div class="session-row">
			<span>{sessionInfo.classNumber}</span>
			<span>{sessionInfo.courseInstructor}</span>
			<span>{sessionInfo.siLeader}</span>
			<span>{sessionInfo.sessionDays}</span>
			<span>{sessionInfo.sessionTimes}</span>
			<span>{sessionInfo.location}</span>
		</div>
	{/each}
{/each}

<!-- Styling for each department's table -->
<style>
	.session-row {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding-left: 2rem;
		/* justify-content: center; */
	}
</style>
