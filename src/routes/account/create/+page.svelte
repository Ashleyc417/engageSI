<script>
	import { enhance } from "$app/forms";

	export let form;

	let loading = false;

	const handleSubmit = () => {
		loading = true;
		return async ({ update }) => {
			await update();
			loading = false;
		};
	};
</script>

<form method="post" action="?/createAccount" use:enhance={handleSubmit}>
	<h2>Account Information</h2>
	<p>Please provide your full name and CSUF CWID to continue:</p>

	<div>
		<label for="full-name">Full Name</label>
		<input type="text" name="full-name" placeholder="John Doe" />
	</div>

	<div>
		<label for="cwid">Full Name</label>
		<input type="text" name="cwid" placeholder="842345992" />
	</div>

	<button type="submit" class="submit-btn">
		{#if loading}
			Loading...
		{:else}
			Continue
		{/if}
	</button>
	{#if form && form.message}
		<p class="error-msg">{form.message}</p>
	{/if}
</form>

<style>
	form {
		max-width: 500px;
		width: 100%;
		display: flex;
		gap: 1rem;
		flex-direction: column;
		border: 2px solid rgb(var(--color-background-600));
		border-radius: 0.5rem;
		padding: 2rem;
		margin-inline: auto;
	}

	h2 {
		text-align: center;
		font-size: 2rem;
	}

	p {
		font-size: 0.875rem;
		text-align: center;
	}

	form > div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	form > .submit-btn {
		border: none;
		cursor: pointer;
		background-color: rgb(var(--color-foreground));
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		transition: opacity 150ms ease-in;
	}

	form > .submit-btn:hover {
		opacity: 0.9;
	}

	input {
		border: none;
		background-color: rgb(var(--color-background-500));
		border-radius: 0.25rem;
		padding: 0.5rem;
	}

	.error-msg {
		color: rgb(var(--color-danger));
	}

	@media screen and (min-width: 640px) {
		form {
			padding: 3.5rem;
		}

		p {
			font-size: 1rem;
		}
	}
</style>
