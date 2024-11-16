<script>
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import Navbar from '../lib/components/navbar.svelte';
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

<Navbar />

<main id="app">
	<slot />
</main>
