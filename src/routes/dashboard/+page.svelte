<script>
	import SessionCard from "$lib/components/session-card.svelte";
	import AttendanceLogs from "$lib/components/attendance-logs.svelte";

	export let data;

	const userSessions = data.userSessions;
	const attendanceLogs = data.attendanceLogs;
</script>

<section class="dashboard-container">
	<div class="user-section">
		<div class="user-card">
			<p class="student-name">Name: {data.profile.full_name}</p>
			<p>CWID: {data.profile.cwid}</p>
			<form method="post" action="?/logout">
				<button class="logout-btn" type="submit">Log Out</button>
			</form>
		</div>
	</div>
	<div class="dashboard-content-section">
		<h2>SI Sessions</h2>
		<div class="schedule-entry">
			<div class="card-container">
				{#each userSessions as userSession}
					<SessionCard
						sessionInfo={userSession.sessionInfo}
						isDashboard={true}
						sessionKey={`${userSession.extraInfo.department};${userSession.extraInfo.siCourse};${userSession.extraInfo.siLeader}`}
					/>
				{/each}
			</div>
		</div>
		<h2>Attendance Record</h2>
		<div class="attendance-record">
			{#if attendanceLogs.length > 0}
				<AttendanceLogs {attendanceLogs} />
				<a href="/attendance/1">View all attendance logs.</a>
			{:else}
				<p>Attendance logs will appear here.</p>
			{/if}
		</div>
	</div>
</section>

<style>
	a {
		display: block;
		margin-top: 0.5rem;
		color: rgb(var(--color-text));
		text-align: end;
		text-underline-offset: 2px;
	}

	.dashboard-container {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.user-section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.user-card {
		width: max-content;
		background-color: rgb(var(--color-background-500));
		padding: 2rem;
		border-radius: 0.5rem;
	}

	.student-name {
		font-weight: 600;
		font-size: 1.5rem;
	}

	.dashboard-content-section {
		width: 100%;
	}

	.logout-btn {
		width: 100%;
		cursor: pointer;
		border: 2px solid rgb(var(--color-background-600));
		background-color: transparent;
		border-radius: 0.25rem;
		margin-top: 0.5rem;
		padding: 0.5rem;
	}

	.schedule-entry,
	.attendance-record {
		padding-block: 1rem;
	}

	.card-container {
		display: grid;
		gap: 1rem;
	}

	@media screen and (min-width: 640px) {
		.student-name {
			font-size: 2rem;
		}
	}

	@media screen and (min-width: 768px) {
		.card-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (min-width: 1024px) {
		.dashboard-container {
			flex-direction: row;
		}
	}

	@media screen and (min-width: 1280px) {
		.card-container {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
