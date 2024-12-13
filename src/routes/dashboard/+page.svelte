<script>
	import SessionCard from "$lib/components/session-card.svelte";

	export let data;

	const userSessions = data.userSessions;
</script>

<section class="dashboard-container">
	<div class="user-section">
		<div class="user-card">
			<h2>Name: {data.profile.full_name}</h2>
			<p>CWID: {data.profile.cwid}</p>
		</div>
		<form method="post" action="/auth/logout">
			<button class="logout-btn" type="submit">Log Out</button>
		</form>
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
		<div>
			<h2>Attendance Record</h2>
		</div>
	</div>
</section>

<style>
	.dashboard-container {
		display: flex;
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

	.logout-btn {
		width: 100%;
		cursor: pointer;
		border: 2px solid gray;
		background-color: transparent;
		padding: 0.5rem;
		border-radius: 0.25rem;
	}

	.schedule-entry {
		padding: 1rem;
		border-radius: 8px;
	}

	.card-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
</style>
