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

<form method="post" use:enhance={handleSubmit}>
	<h2>Sign Up</h2>

	<div>
		<button type="submit" formaction="/signin/?/socialLogin&provider=google" class="auth-button">
			<img src="/google.svg" alt="Google Icon" /> Sign Up with Google
		</button>
		<button type="submit" formaction="/signin/?/socialLogin&provider=discord" class="auth-button">
			<img src="/discord.svg" alt="Discord Icon" /> Sign Up with Discord
		</button>
	</div>

	<div class="divider">
		<div class="divider-line"></div>
		<div>or, sign up with your email</div>
		<div class="divider-line"></div>
	</div>

	<div>
		<label for="email">Email</label>
		<input name="email" type="email" />
	</div>
	<div>
		<label for="cwid">Password</label>
		<input name="password" type="password" />
	</div>
	<div>
		<label for="cwid">Confirm Your Password</label>
		<input name="confirm-password" type="password" />
	</div>

	{#if form && form.message}
		<div class="error-msg">{form.message}</div>
	{/if}

	<button class="submit-btn" type="submit">
		{#if loading}
			Loading...
		{:else}
			Sign Up
		{/if}
	</button>
	<p>Already have an account? <a href="/signin">Sign in!</a></p>
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
	}

	a {
		color: rgb(var(--color-text));
		text-underline-offset: 2px;
	}

	.auth-button {
		border: none;
		cursor: pointer;
		background-color: transparent;
		border: 2px solid rgb(var(--color-background-600));
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
	}

	form > .divider {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.divider > .divider-line {
		border: 1px solid rgb(var(--color-background-600));
		flex-grow: 1;
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
