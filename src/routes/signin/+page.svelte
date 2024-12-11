<script>
	// Declare reactive variables for name, email, cwid, and error message
	let name = '';
	let email = '';
	let cwid = '';
	let errorMessage = '';

	// Handle form submission
	const handleSubmit = () => {
		// Basic validation
		if (!name || !email || !cwid) {
			errorMessage = 'Please enter name, email, and CWID.';
			return;
		}

		// Validate CWID (must be a 9-digit integer)
		if (!/^\d{9}$/.test(cwid)) {
			errorMessage = 'CWID must be a 9-digit number.';
			return;
		}

		// Validate email format using regex (basic validation)
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailPattern.test(email)) {
			errorMessage = 'Please enter a valid email address.';
			return;
		}

		// Simulate checking credentials (this is where you'd call your API or database)
		// For example, check if these credentials exist in your database
		// This is just a placeholder for actual login functionality
		// Replace this with your real login authentication (Supabase or another service)
		// If everything is valid, simulate successful login
		errorMessage = ''; // Clear error message

		// For example, if using Supabase, you'd check credentials here

		// Simulate a successful login
		alert('Login successful!');

		// Optionally, redirect to dashboard or other page
		// For example, use SvelteKit's goto('/dashboard')
		// You could redirect here after login success:
		// goto('/dashboard');
	};
</script>

<section>
	<form on:submit|preventDefault={handleSubmit}>
		<h2>Sign In</h2>
		<!-- Email field -->
		<div>
			<label for="email" class="block text-sm font-medium">Email</label>
			<input id="email" type="email" bind:value={email} required />
		</div>

		<div>
			<label for="cwid" class="block text-sm font-medium">Password</label>
			<input id="password" type="password" bind:value={cwid} required />
		</div>

		<!-- Display error message if validation fails -->
		{#if errorMessage}
			<div class="text-red-600 text-sm">{errorMessage}</div>
		{/if}

		<!-- Submit button -->
		<button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md">Sign In</button>

		<p>Don't have an account? <a href="/register">Create One!</a></p>
	</form>
</section>

<style>
	section {
		padding: 2rem 2rem;
	}

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
