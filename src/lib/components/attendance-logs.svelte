<script>
	export let attendanceLogs;

	function formatTime(dateStr) {
		const date = new Date(dateStr);
		return date.toLocaleString();
	}

	function timeAgo(dateStr) {
		const now = new Date();
		const past = new Date(dateStr);
		const diffMs = now - past;

		const seconds = Math.floor(diffMs / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);
		const months = Math.floor(days / 30);
		const years = Math.floor(days / 365);

		if (seconds < 60) return `${seconds} seconds ago`;
		if (minutes < 60) return `${minutes} minutes ago`;
		if (hours < 24) return `${hours} hours ago`;
		if (days < 30) return `${days} days ago`;
		if (months < 12) return `${months} months ago`;
		return `${years} years ago`;
	}

	const logTimestamps = [];

	attendanceLogs.forEach((log) => {
		const timePassed = timeAgo(log.loggedAt);
		const formattedTime = formatTime(log.loggedAt);
		logTimestamps.push({ timePassed, formattedTime });
	});
</script>

<div class="table-container">
	<table>
		<thead>
			<tr>
				<th>SI Course</th>
				<th>SI Leader</th>
				<th>Logged At</th>
			</tr>
		</thead>
		<tbody>
			{#each attendanceLogs as log, i}
				<tr>
					<td>{log.siCourse}</td>
					<td>{log.siLeader}</td>
					<td title={logTimestamps[i].formattedTime}>{logTimestamps[i].timePassed}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.table-container {
		width: 100%;
		overflow-x: auto;
		border-radius: 0.5rem;
		background-color: rgb(var(--color-background-300));
		border: 2px solid rgb(var(--color-background-600));
	}

	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 2px;
		font-size: 1rem;
		text-align: left;
	}

	table th,
	table td {
		padding: 1rem;
		text-align: left;
	}

	table th {
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		background-color: rgb(var(--color-background-300));
		color: rgb(var(--color-text));
	}

	table thead tr {
		background-color: rgb(var(--color-background-700));
	}

	table tbody tr {
		background-color: rgb(var(--color-background-500));
		transition: opacity 150ms ease-in;
	}

	table th:first-child,
	table td:first-child {
		padding-left: 1.5rem;
	}

	table th:last-child,
	table td:last-child {
		padding-right: 1.5rem;
	}

	@media screen and (min-width: 640px) {
		.table-container {
			overflow-x: visible;
		}

		table {
			font-size: 1.125rem;
		}

		table th:first-child {
			border-top-left-radius: 0.5rem;
		}

		table th:last-child {
			border-top-right-radius: 0.5rem;
		}

		table tbody tr:last-child td:first-child {
			border-bottom-left-radius: 0.5rem;
		}

		table tbody tr:last-child td:last-child {
			border-bottom-right-radius: 0.5rem;
		}
	}
</style>
