<script>
	export let sessionInfo;
	export let isDashboard;
	export let sessionKey;

	const requestPath = isDashboard ? "/account/departments/join" : "/account/departments/add";
	const siSession = sessionKey.split(";")[1];
</script>

<form method="post" action={`${requestPath}?sessionKey=${sessionKey}`}>
	<div class="card">
		<p class="si-leader-text">
			{#if isDashboard}
				<strong>{siSession} —</strong>
			{/if}
			<strong>SI Leader:</strong>
			{sessionInfo.siLeader}
		</p>
		<div class="session-info">
			<p><strong>Days:</strong> {sessionInfo.sessionDays}</p>
			<p><strong>Times:</strong> {sessionInfo.sessionTimes}</p>
			<p><strong>Location:</strong> {sessionInfo.location}</p>
			<p><strong>Course Number:</strong> {sessionInfo.classNumber}</p>
			<p><strong>Instructor:</strong> {sessionInfo.courseInstructor}</p>
		</div>

		<button type="submit" class="mark-attendance-btn"> Join! </button>
		{#if isDashboard}
			<button
				class="remove-session-btn"
				formaction="/account/departments/remove?sessionKey={sessionKey}"
			>
				Remove SI Session
			</button>
		{/if}
	</div>
</form>

<style>
	.card {
		background-color: rgb(var(--color-background-500));
		padding: 1.5rem;
		border-radius: 0.5rem;
		transition: transform 0.3s ease;
		color: #ffffff;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.5rem;
		text-align: left;
		height: 100%;
	}

	.mark-attendance-btn,
	.remove-session-btn {
		cursor: pointer;
		border: none;
		width: 100%;
		padding: 0.5rem;
		text-align: center;
		border-radius: 0.25rem;
		transition: opacity 150ms ease-in;
	}

	.mark-attendance-btn {
		background-color: rgb(var(--color-foreground));
		color: rgb(var(--color-text));
	}

	.remove-session-btn {
		background-color: transparent;
		color: rgb(var(--color-danger));
		border: 2px solid rgb(var(--color-danger));
	}

	.mark-attendance-btn:hover,
	.remove-session-btn:hover {
		opacity: 0.8;
	}

	.si-leader-text {
		font-size: 1.6rem;
		text-indent: 0rem;
		font-weight: bold;
		color: rgb(var(--color-foreground));
	}

	.card p {
		font-size: 1.2rem;
		line-height: 1.5;
	}

	.card p strong {
		font-size: 1.2rem;
	}
</style>
