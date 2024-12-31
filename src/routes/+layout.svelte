<script>
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";
	import Navbar from "../lib/components/navbar.svelte";
	import Footer from "../lib/components/footer.svelte";
	import { invalidateAll } from "$app/navigation";
	import { getFlash } from "sveltekit-flash-message";
	import { page } from "$app/stores";
	import "../globals.css";
	import { beforeNavigate } from "$app/navigation";
	import { fly } from "svelte/transition";

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

	const flash = getFlash(page);
	beforeNavigate((navigation) => {
		if ($flash && navigation.from?.url.toString() != navigation.to?.url.toString()) {
			$flash = undefined;
		}
	});

	let playAnimation = false;

	// Deteremines delay and how long the toast notification is on for
	$: if ($flash) {
		setTimeout(() => {
			playAnimation = true;
			setTimeout(() => {
				playAnimation = false;
			}, 5000);
		}, 500);
	}
</script>

<svelte:head>
	<title>EngageSI</title>
</svelte:head>

{#if $flash && playAnimation}
	<div transition:fly={{ x: 10, duration: 75 }} class="flash-notification">
		<span>
			{#if $flash.type === "success"}
				<i class="icon-success">✔</i>
			{:else}
				<i class="icon-error">✖</i>
			{/if}
		</span>
		<span>{$flash.message}</span>
		<button class="close-btn" on:click={() => ($flash = undefined)}>
			<img class="icon" src="/close.svg" alt="Close Icon" />
		</button>
	</div>
{/if}

<div class="layout-container">
	<Navbar {profile} />
	<main id="app">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.layout-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		padding: 1rem;
		width: 100%;
	}

	.flash-notification {
		z-index: 100;
		position: fixed;
		bottom: 3rem;
		right: 2rem;
		border-radius: 0.375rem;
		background-color: rgb(var(--color-background-300));
		border: 2px solid rgb(var(--color-background-600));
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.flash-notification .icon-success {
		display: inline-block;
		color: rgb(var(--color-foreground));
	}

	.flash-notification .icon-error {
		display: inline-block;
		color: rgb(var(--color-danger));
	}

	.flash-notification .close-btn {
		margin-left: 0.5rem;
		display: inline-block;
		background: none;
		border: none;
		cursor: pointer;
	}

	.flash-notification .close-btn .icon {
		width: 18px;
		height: 18px;
	}
</style>
