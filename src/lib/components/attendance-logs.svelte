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

<style>
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
