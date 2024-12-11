<script>
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";
	import Navbar from "../lib/components/navbar.svelte";
	import Footer from "../lib/components/footer.svelte"; // Import Footer component
	import "../globals.css";

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
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
	<Navbar />
	<main id="app">
		<slot />
	</main>
	<Footer companyName="EngageSI" />
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
		flex: 1; /* Grow and fill available space */
		padding: 1rem; /* Optional padding for spacing */
	}
</style>
