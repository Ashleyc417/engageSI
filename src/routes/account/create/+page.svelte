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
	<h2 class="text-center text-lg font-semibold md:text-xl">Account Information</h2>
	<p class="mt-1 text-center">Please provide your full name and CSUF CWID to continue:</p>
	<input
		type="text"
		name="full-name"
		placeholder="John Doe"
		class="w-full rounded-xl bg-background-400 p-2 shadow-sm outline-none transition"
	/>
	<input
		type="text"
		name="cwid"
		placeholder="842345992"
		class="w-full rounded-xl bg-background-400 p-2 shadow-sm outline-none transition"
	/>

	<button
		type="submit"
		class="w-full rounded-xl bg-foreground-neutral py-1 font-semibold text-background-400 transition"
	>
		{#if loading}
			Loading...
		{:else}
			Continue
		{/if}
	</button>
	{#if form && form.message}
		<p class="text-sm font-semibold text-red-400">{form.message}</p>
	{/if}
</form>
