<!-- newest it is supposed to center and justify the fuckin code but that shit is not working-->
<script>
	export let data;
</script>

<form>
	<h2>Register</h2>

	<div>
		<label for="name">Your Name</label>
		<input id="name" type="text" required />
	</div>
	<div>
		<label for="email" class="block text-sm font-medium">Email</label>
		<input id="email" type="email" required />
	</div>
	<div>
		<label for="text" class="block text-sm font-medium">CWID</label>
		<input id="text" type="text" required />
	</div>

	<div>
		<label for="password" class="block text-sm font-medium">Password</label>
		<input id="password" type="password" required />
	</div>

	<div>
		<label for="confirm-password" class="block text-sm font-medium">Confirm Your Password</label>
		<input id="confirm-password" type="password" required />
	</div>

	<!-- Display error message if validation fails -->
	<!-- {#if errorMessage}
		<div class="text-red-600 text-sm">{errorMessage}</div>
	{/if} -->

	<!-- Submit button -->
	<button type="submit">Register</button>

	<p>Have an account? <a href="/signin">Sign in!</a></p>
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
		padding: 3.5rem;
		margin-inline: auto;
	}

	h2 {
		text-align: center;
		font-size: 2rem;
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
</style>
