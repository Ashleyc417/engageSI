<script>
	export let sessionInfo;
	export let isDashboard;
	export let sessionKey;

	const requestPath = isDashboard ? "/account/departments/join" : "/account/departments/add";
</script>

<form method="post" action={`${requestPath}?sessionKey=${sessionKey}`}>
	<div class="card">
		<p class="si-leader-text"><strong>SI Leader:</strong> {sessionInfo.siLeader}</p>
		<p><strong>Days:</strong> {sessionInfo.sessionDays}</p>
		<p><strong>Times:</strong> {sessionInfo.sessionTimes}</p>
		<p><strong>Location:</strong> {sessionInfo.location}</p>
		<p><strong>Course Number:</strong> {sessionInfo.classNumber}</p>
		<p><strong>Instructor:</strong> {sessionInfo.courseInstructor}</p>

		<button type="submit" class="mark-attendance-btn"> Join! </button>
		{#if isDashboard}
			<button
				class="remove-session-btn"
				formaction="/account/departments/remove&sessionKey={sessionKey}"
			>
				Remove SI Session
			</button>
		{/if}
	</div>
</form>

<style>
	.card {
		background-color: rgb(var(--color-background-500));
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
		color: #ffffff;
		display: flex;
		flex-direction: column;
		text-align: left;
		text-indent: 3rem;
	}

	.card:hover {
		transform: translateY(-10px);
	}

	.mark-attendance-btn {
		width: 100%;
		background-color: #007bff;
		color: white;
		padding: 0.5rem;
		text-align: center;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.mark-attendance-btn:hover {
		background-color: #0056b3;
	}

	.remove-session-btn {
		width: 100%;
		background-color: rgb(253, 68, 68);
		color: white;
		padding: 0.5rem;
		margin-top: 0.5rem;
		text-align: center;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.si-leader-text {
		font-size: 1.6rem;
		text-align: center;
		text-indent: 0rem;
		font-weight: bold;
		color: #007bff;
	}

	.card p {
		font-size: 1.2rem;
		line-height: 1.5;
	}

	.card p strong {
		font-size: 1.2rem;
	}
</style>
