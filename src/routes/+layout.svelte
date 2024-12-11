<script>
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import Navbar from '../lib/components/navbar.svelte';
	import Footer from '../lib/components/footer.svelte'; // Import Footer component
	import '../globals.css';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="layout-container">
	<Navbar /> <!-- Navbar always at the top -->

	<main id="app">
		<slot />
	</main>

	<Footer companyName="EngageSI" /> <!-- Footer always at the bottom -->
</div>

<style>
	/* Ensure the whole document height spans the viewport */
	html,
	body {
		height: 100%;
		margin: 0; /* Remove default margin */
	}

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

	/* Footer sticks to the bottom */
	footer {
		margin-top: auto; /* Pushes footer to the bottom */
	}
</style>
