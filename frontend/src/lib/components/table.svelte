<!-- `schedules` lets us re-use the component below -->
<script>
	export let schedules;
</script>

<!-- Component to hold each department's table -->
{#each Object.entries(schedules.sessionsOffered) as [classTitle, sessionsOffered]}
	<div class="schedule-entry">
		<h3>{classTitle}</h3>
		<table>
			<thead>
				<tr>
					<th>Class Number</th>
					<th>Course Instructor</th>
					<th>SI Leader</th>
					<th>Session Days</th>
					<th>Session Times</th>
					<th>Location</th>
				</tr>
			</thead>
			{#each sessionsOffered as sessionInfo}
				<tbody>
					<tr>
						<td>{sessionInfo.classNumber}</td>
						<td>{sessionInfo.courseInstructor}</td>
						<td>{sessionInfo.siLeader}</td>
						<td>{sessionInfo.sessionDays}</td>
						<td>{sessionInfo.sessionTimes}</td>
						<td>{sessionInfo.location}</td>
					</tr>
				</tbody>
			{/each}
		</table>
	</div>
{/each}

<!-- Styling for each department's table -->
<style>
	.schedule-entry {
		margin-block: 0.5rem;
	}

	.schedule-entry > h3 {
		padding: 1rem 0;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 18px;
		text-align: left;
	}

	table th,
	table td {
		padding: 0.5rem 1rem;
		text-align: left;
	}

	table thead tr {
		text-align: left;
		border: 2px solid white;
		background-color: rgb(var(--color-background-500));
	}

	table tbody tr {
		border: 2px solid #dddddd;
	}
</style>
