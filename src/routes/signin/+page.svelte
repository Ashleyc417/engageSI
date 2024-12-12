<script>
	export let form;
</script>

<form method="POST">
	<h2>Sign In</h2>
	<div>
		<label for="email" class="block text-sm font-medium">Email</label>
		<input id="email" type="email" />
	</div>

	<div>
		<label for="cwid" class="block text-sm font-medium">Password</label>
		<input id="password" type="password" />
	</div>

	{#if form && form.message}
		<div class="text-red-600 text-sm">{form.message}</div>
	{/if}

	<button type="submit">Sign In</button>

	<p>Don't have an account? <a href="/register">Create One!</a></p>
</form>

<style>
	form {
		max-width: 500px;
		width: 100%;
		display: flex;
		gap: 1rem;
		flex-direction: column;
		border: 2px solid gray;
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
	}

	a {
		color: white;
		text-underline-offset: 2px;
	}

	form > div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	form > button {
		border: none;
		cursor: pointer;
		background-color: rgb(var(--color-foreground));
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
	}

	input {
		border: none;
		background-color: rgb(var(--color-background-500));
		border-radius: 0.25rem;
		padding: 0.5rem;
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
