<script>
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";
	import Navbar from "../lib/components/navbar.svelte";
	import Footer from "../lib/components/footer.svelte";
	import { invalidateAll } from "$app/navigation";
	import "../globals.css";

	export let data;
	$: ({ session, supabase, profile } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession) invalidateAll();
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>EngageSI</title>
</svelte:head>

<div class="layout-container">
	<Navbar {profile} />
	<main id="app">
		<slot />
	</main>
	<Footer />
</div>

<style>
	/* Flexbox layout to push footer to the bottom */
	.layout-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh; /* Full viewport height */
	}

	/* Main content takes up remaining space */
	main {
		padding: 1rem; /* Optional padding for spacing */
		width: 100%;
	}
</style>
