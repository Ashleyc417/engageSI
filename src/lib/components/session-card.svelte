<script>
	import Popover from "$lib/components/popover.svelte";

	export let sessionInfo;
	export let isDashboard;
	export let sessionKey;

	const REQUEST_PATH = "/account/departments";

	const action = isDashboard ? "join" : "add";
	const siSession = sessionKey.split(";")[1];

	let isPopoverOpen = false;
	let isDeletePopoverOpen = false;
</script>

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

	<button on:click={() => (isPopoverOpen = true)} class="mark-attendance-btn">
		{#if isDashboard}
			Mark Attendance!
		{:else}
			Join!
		{/if}
	</button>
	{#if isDashboard}
		<button class="remove-session-btn" on:click={() => (isDeletePopoverOpen = true)}>
			Remove SI Session
		</button>
	{/if}
</div>

<Popover bind:isOpen={isPopoverOpen}>
	<form method="post" action={`${REQUEST_PATH}/${action}?sessionKey=${sessionKey}`}>
		<div class="form-wrapper">
			<p class="form-text">
				{#if isDashboard}
					Do you want to mark yourself attendance to this SI session?
				{:else}
					Would you like to add this SI session to your list?
				{/if}
			</p>
			<div class="form-buttons">
				<button class="action-btn" type="submit">
					{#if isDashboard}
						Yes, mark attendance!
					{:else}
						Yes, join this session!
					{/if}
				</button>
				<button class="secondary-btn" on:click|preventDefault={() => (isPopoverOpen = false)}>
					Cancel
				</button>
			</div>
		</div>
	</form>
</Popover>

<!-- Popover to delete SI session from list -->
{#if isDashboard}
	<Popover bind:isOpen={isDeletePopoverOpen}>
		<form method="post" action={`${REQUEST_PATH}/remove?sessionKey=${sessionKey}`}>
			<div class="form-wrapper">
				<p class="form-text">Are you sure you want to remove this SI session from your list?</p>
				<div class="form-buttons">
					<button class="danger-btn" type="submit">Yes, remove this session</button>
					<button
						class="secondary-btn"
						on:click|preventDefault={() => (isDeletePopoverOpen = false)}
					>
						Cancel
					</button>
				</div>
			</div>
		</form>
	</Popover>
{/if}

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

	.form-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.form-text {
		font-size: 1rem;
		line-height: normal;
		text-align: center;
	}

	.form-wrapper > .form-buttons {
		display: flex;
		gap: 0.5rem;
	}

	.action-btn,
	.secondary-btn,
	.danger-btn {
		cursor: pointer;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		background-color: transparent;
		transition:
			border-color 150ms ease-in,
			opacity 150ms ease-in;
	}

	.action-btn {
		background-color: rgb(var(--color-foreground));
	}

	.danger-btn {
		background-color: rgb(var(--color-danger));
	}

	.action-btn:hover,
	.danger-btn:hover {
		opacity: 0.9;
	}

	.secondary-btn {
		border: 2px solid rgb(var(--color-background-700));
	}

	.secondary-btn:hover {
		border-color: rgb(var(--color-background-600));
	}

	@media screen and (min-width: 640px) {
		.form-text {
			font-size: 1.25rem;
		}
	}
</style>
